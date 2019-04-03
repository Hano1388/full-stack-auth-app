const express    = require('express'),
      http       = require('http'),
      bodyParser = require('body-parser'),
      morgan     = require('morgan'),
      app        = express();

// App Setup


// Server Setup
const PORT = process.env.PORT || 3010;
const server = http.createServer(app);

server.listen(PORT);

console.log(`Server listening on port: ${PORT}`);
