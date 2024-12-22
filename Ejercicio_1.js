import http from "node:http";
const Servidor = http.createServer((req, res) => {

    res.end("9+9=18");

})

Servidor.listen(8081);