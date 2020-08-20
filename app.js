const express = require('express');
const cors = require('cors');
const controllers = require('./controllers/index');
const checkToken = require('./middleware/checkToken');
const port = 3500;

const app = express();

// enable cors
app.use(cors());
// enable JSON body parse
app.use(express.json());
// Routes
app.get('/', controllers.all);
app.get('/load-game', checkToken, controllers.loadGame);
app.get('/start-game', controllers.startGame);
app.post('/makemove', checkToken, controllers.makeMove);

// error handling
app.use((req, res, next) => {
  res.status(404);
  res.json({
    message: 'Route not found!',
  });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
