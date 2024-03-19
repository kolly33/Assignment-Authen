const { getBooks,putBooks, patchBooks, postBooks, deleteBooks, getAuthors, putAuthors, postAuthors, patchAuthors, deleteAuthors
} = require('./handlerfunction');

const authenticate = require("./authenticate");

const handleBooks = (req, res) => {
    if (req.url === "/books") {
      if (req.method === "GET") {
        authenticate(req, res, getBooks);
      } else if (req.method === "PUT") {
        authenticate(req, res, putBooks);
      } else if (req.method === "POST") {
        authenticate(req, res, postBooks);
      } else if (req.method === "PATCH") {
        authenticate(req, res, patchBooks);
      } else if (req.method === "DELETE") {
        authenticate(req, res, deleteBooks);
      } else {
        // Handle unsupported methods
      }
    } else {
      // Handle requests to other URLs (if applicable)
    }
  };
  
  const handleAuthors = (req, res) => {
    if (req.url === "/authors") {
      if (req.method === "GET") {
        authenticate(req, res, getAuthors);
      } else if (req.method === "PUT") {
        authenticate(req, res, putAuthors);
      } else if (req.method === "POST") {
        authenticate(req, res, postAuthors);
      } else if (req.method === "PATCH") {
        authenticate(req, res, patchAuthors);
      } else if (req.method === "DELETE") {
        authenticate(req, res, deleteAuthors);
      } else {
        res.status(405).send('Method not allowed for /books')
    
    }
  };
}
  
  module.exports = { handleBooks, handleAuthors };