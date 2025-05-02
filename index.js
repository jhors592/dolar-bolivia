const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta nueva para mostrar el precio del dólar
app.get('/api/dolar', (req, res) => {
  res.json({
    pais: 'Bolivia',
    compra: 6.86,
    venta: 6.96,
    fuente: 'Banco Central de Bolivia'
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
