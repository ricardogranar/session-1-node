const { response } = require('express');
const express = require('express');
const { request } = require('http');


const PORT = 3000;
const server = express();
const router = express.Router();
// http://localhost:3000 --    /huevos-fritos (yo que me quiero casar con el primer match);

router.get("/", (request, response) => {

 // console.log(request) // El pedido que entra a la cocina = Un pincho de tortilla

const tortilla = {
    huevos, 3,
    patatas: "Muchas",
    punto: "poco hecha"

}
// console.log(response); // Procesamos la petición y entregamos el resultado -> un plato con un trozo de tortilla.
return response.send(tortilla);
});

router.get("/huevos-fritos", (request, response) => {
    const huevosFritos = {
        cantidad: 4,
        variedad: "huevos camperos",
        patatas: true,
    }
    return response.send(huevosFritos);
});
// Le añadimos el router a nuestro servidor.
server.use("/", router);

server.listen(PORT, () => {
    console.log(`Servidor a toda máquina en http://localhost:${PORT}`);
});
