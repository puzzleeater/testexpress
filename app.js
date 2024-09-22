const express = require("express");
const portX = process.env.PORT || 80;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req,res)=>{
	res.status(200).send("HELLO WORLD");
});

app.listen(portX, ()=>{console.log("listening to port", portX)});