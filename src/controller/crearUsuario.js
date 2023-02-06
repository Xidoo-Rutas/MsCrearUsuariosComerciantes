//controler
const express = require('express');
const model = require('../database/model');

const insertUsuario = (req, res) =>{
    try{
        const usuario = req.body;
        console.log("usuario");
        model.create(usuario, (error, docs) =>{
            res.json({
                status: "OK",
                status_code: 200,
                msg: "POST OK",
                view: docs
            });
            res.status(200).end();
        }) 
    } catch (error){
        console.log(error)
    }
}


module.exports = insertUsuario;