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
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'buyer'], default: 'buyer' }
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
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

// Ruta de registro de usuarios
app.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
    role: role || 'buyer' // Utilizar el rol proporcionado en la solicitud o por defecto 'buyer'
  });

  await newUser.save();

  res.json({ success: true, message: 'User registered successfully' });
});

// Ruta para obtener todos los usuarios (solo accesible por administradores)
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Ruta para actualizar usuarios
app.put('/users/:id', async (req, res) => {
  const { username, password, role } = req.body;

  let updatedData = { username, role };
  if (password) {
    updatedData.password = bcrypt.hashSync(password, 10);
  }

  try {
    await User.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json({ success: true, message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating user' });
  }
});

// Ruta para eliminar usuarios (solo accesible por administradores)
app.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting user' });
  }
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log(`Attempting to login with username: ${username}, password: ${password}`);

  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
    console.log('Login successful');
    res.json({ success: true, token, role: user.role });
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

// Ruta para obtener un producto por ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving product' });
  }
});

// Ruta para actualizar productos
app.put('/products/:id', async (req, res) => {
  const { name, description, price, image, category } = req.body;

  const updatedData = { name, description, price, image, category };

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating product' });
  }
});

// Ruta para eliminar productos
app.delete('/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting product' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
