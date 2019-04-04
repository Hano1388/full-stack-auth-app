const express    = require('express'),
      http       = require('http'),
      bodyParser = require('body-parser'),
      morgan     = require('morgan'),
      mongoose   = require('mongoose'),
      router     = require('./routes/router'),
      cors       = require('cors'),
      app        = express();

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth', {useNewUrlParser: true} );

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
const PORT = process.env.PORT || 3010;
const server = http.createServer(app);

server.listen(PORT);

console.log(`Server listening on port: ${PORT}`);
