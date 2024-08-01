const express = require('express');
const app = express();
const port = 3000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port,'0.0.0.0' ,() => {
  console.log(`App listening at http://localhost:${port}`);
});