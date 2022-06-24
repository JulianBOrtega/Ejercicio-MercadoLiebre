const express = require("express");
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static('public'));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

app.listen(port, () =>
{
    console.log("Servidor corriendo (http://localhost:" + port + ")");
});