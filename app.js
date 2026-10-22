// Ejemplo de código inseguro en app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const usuario = req.query.username;
  // Vulnerabilidad: Inyección de código mediante eval()
  eval("console.log('Usuario conectado: ' + " + usuario + ");");
  res.send('OK');
});

app.listen(3000);
