const express = require('express');

const app = express();

// Konfigurišite proxy za POST rutu '/'
app.post('/',(req,res)=> res.send({'post':'ok'}));

app.post('/:id', (req, res, next) => {
  const id = req.params.id; // Dobijanje ID parametra iz URL-a
  const targetUrl = `https://api.klix.ba/v1/rate/${id}`; // Konstruisanje ciljne adrese sa ID
  
  res.redirect(306, targetUrl); 
   // Pozivamo proxy kako bismo prosledili zahtev ciljnoj adresi
});

// Ostatak vaših Express ruta i podešavanja

app.listen(3000, () => {
  console.log('Server je pokrenut na portu 3000');
});
