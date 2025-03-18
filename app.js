const express = require('express');
const app = express();

// Melayani file statis dari folder 'public'
app.use(express.static('public'));

// Route utama
app.get('/', (req, res) => {
  res.sendFile('./pages/index.html', {root: __dirname});
});
app.get('/contact', (req, res) => {
  res.sendFile('./pages/contact.html', {root: __dirname});
});
app.get('/profiles', (req, res) => {
  res.sendFile('./pages/profiles.html', {root: __dirname});
});
app.get('/skills', (req, res) => {
  res.sendFile('./pages/skills.html', {root: __dirname});
});
app.get('/experience', (req, res) => {
  res.sendFile('./pages/experience.html', {root: __dirname});
});

// Middleware 404
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Menggunakan PORT dari Vercel atau default 3000 saat lokal
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
