const http = require("http");

const HOST = "localhost";
const PORT = 8000;

const writeHTMLresponse = (res,htmlCode) =>{
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(htmlCode);
}

const products = {

    {
         name: "Reloj",    "Reloj": unknown workerData.
    }.{}, {}
}

const server= http.createServer((req, res) => {
 const url = req.url;
 console.log("URL es ", url);
 if(url== "/other"){
    writeHTMLresponse(res, "<p> Esta es otra ruta</p>");
 } else {
    writeHTMLresponse(res, "<p> codigo HTML </P>"); 
 }
})

server.listen(PORT, HOST, () =>{

console.log(`servidor corriendo en http://${HOST}:${PORT}`);

}

)
