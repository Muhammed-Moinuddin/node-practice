const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), "data.txt")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Hello from Moin");
        res.end();
    } 
    else if (req.url === "/form") {
        res.setHeader("Content-Type", "text/html");
        res.write("<form action='/submit' method='POST'><input name='formData'/><input name='formData2'/><button>Submit</button></form>");
        res.end();
    }
    else if (req.url === "/submit") {
       let data = "";
       req.on("data", chunk => data+=chunk);
       req.on("end", () => {
        fs.readFile(filePath, "utf-8", (err, fileData) => {
            const newData = fileData + "\n" + data;
            fs.writeFile(filePath, newData, () => {
                res.write("Data Received");
                res.end();
            }) 
        })
       
    });
    }
    else {
        res.write("404 - Not Found");
        res.end();
    }
});

server.listen(3000);