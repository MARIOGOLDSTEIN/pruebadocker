const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/estado', (req, res) => {
    res.json({ mensaje: '¡El túnel interno /api/ funciona a la perfección!' });
});

app.listen(PORT, () => {
    console.log(`Backend escuchando en el puerto interno ${PORT}`);
});