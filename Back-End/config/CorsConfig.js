const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173', // origen permitido 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

module.exports = cors(corsOptions);
