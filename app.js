const http = require('http');
const {handleBooks, handleAuthors} = require('./controller')


const port = 3000; 

const server = http.createServer(async (req,res)=> {
    try {
        
        // handle books endpoint
        handleBooks(req,res);
     
      //  handle authors endpoint
        handleAuthors(req,res); 
        
    } catch (error) {
        res.statusCode = 500;
        res.end(error.message)
    }
})

server.listen(port, ()=>{
    console.log('server is active at http://localhost:' + port)
    
})
