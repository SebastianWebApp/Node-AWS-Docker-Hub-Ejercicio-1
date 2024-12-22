import http from "node:http";

const Servidor = http.createServer((req, res) => {
  // Ruta principal
  if (req.url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Bienvenido a la página principal</h1>");
  } 
  // Ruta para otra URL
  else if (req.url === "/otra-ruta") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Estás en otra ruta</h1>");
  }
  // Si la URL no se encuentra, mostrar error
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end("<h1>No resource with given URL found</h1>");
  }
});

// El servidor escucha en el puerto 8080
Servidor.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
