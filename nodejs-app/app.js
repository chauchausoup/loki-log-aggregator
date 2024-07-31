const express = require=('express')
const app = expres()
const port = 8080

app.get('/',(req,res)=>{
	console.log("root endpoint hi")
	res.send("hello world")
})

app.listen(port,()=>{
	console.log("app is listening on the port:")
})


