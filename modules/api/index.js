const express = require('express');
const apiRouter = express.Router();

const {render} = require('ejs');

const qrController = require('../qr/qr.controller');

apiRouter.get("/qr",(req,res)=>{
    res.render("index", {"qrurl":"", "status":"no data"});
});
apiRouter.post("/qr",(req,res)=>{
    try{
    const {url} = req.body;
    const qr = qrController.generateQR(url)
    .then(qr=>{
    data = {"qrurl":qr, "status":"ok"}
    res.render("index",data);
    });}catch(err){
        console.log(err);
    }
});
module.exports = apiRouter;