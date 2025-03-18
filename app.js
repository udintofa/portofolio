const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Pastikan Express bisa membaca folder public (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route ke halaman HTML dalam folder 'pages'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});
app.get('/experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'experience.html'));
});
app.get('/profiles', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'profiles.html'));
});

// Route 404 untuk halaman yang tidak ditemukan
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
