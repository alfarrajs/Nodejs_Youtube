//globals
//Modules
//osModules=> to interact with the operating system
//pathModules
//syncFiles
//asyncFiles
//HttpModule , req,res objects
//npm <=> use code written by other developers 

const http = require('http');
const server = http.createServer((req, res)=> {
   if(req.url === "/"){
    res.end("hello,world");
   }
   else if (req.url !== "/"){
    res.end("elsed content");
   }
})
server.listen(100);





