const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

// Models
const User = mongoose.model('Usuarios Registrados', userSchema);
const Product = mongoose.model('Product', productSchema);

// Ruta de registro de usuarios
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword
  });

  await newUser.save();

  res.json({ success: true, message: 'User registered successfully' });
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log(`Attempting to login with username: ${username}, password: ${password}`);

  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    console.log('Login successful');
    res.json({ success: true, token });
  } else {
    console.log('Invalid username or password');
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

// Ruta para agregar productos
app.post('/products', async (req, res) => {
  const { name, description, price, image, category } = req.body;

  const newProduct = new Product({
    name,
    description,
    price,
    image,
    category
  });

  await newProduct.save();

  res.json({ success: true, message: 'Product added successfully' });
});

// Ruta para obtener productos
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
