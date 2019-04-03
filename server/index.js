const express    = require('express'),
      http       = require('http'),
      bodyParser = require('body-parser'),
      morgan     = require('morgan'),
      router     = require('./routes/router'),
      app        = express();

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));

router(app);

// Server Setup
const PORT = process.env.PORT || 3010;
const server = http.createServer(app);

server.listen(PORT);

console.log(`Server listening on port: ${PORT}`);
