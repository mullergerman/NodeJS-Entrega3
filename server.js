/*
====================================================================================
Alumno: German Luis Muller
Desafio Entregable Numero: 3 (Version 1)
Fecha: 23/09/2021
====================================================================================
*/

const Contenedor = require('./contenedor.js')
const express = require('express');
const contenedor = new Contenedor('productos.txt');

const app = express();
const server = app.listen(8080 || process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error)=>{
    console.log(error);
})

app.get('/productos', async (req,res)=>{
    try {
        let productos = await contenedor.getAll();
        res.json(productos);
    } catch (error) {
        res.send("No se encuentran productos registrados!");
        console.log(error);
    }  
});

app.get('/productoRandom', async (req,res)=>{
    try {
        let productos = await contenedor.getAll();
        let id = parseInt(Math.random() * productos.length);
        console.log(id);
        res.json(productos[id]);
    } catch (error) {
        res.send("No se encuentran productos registrados!");
        console.log(error);
    }  
});