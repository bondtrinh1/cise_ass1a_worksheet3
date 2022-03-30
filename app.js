// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const books = require('./routes/api/books');
// const app = express();

// connectDB();

// app.use(cors({ origin: true, credentials: true }));
// app.use(express.json({ extended: false }));
// app.use('/api/books', books);
// app.use(express.static('build'));

// const path = require("path");

// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./cise_ass1a_worksheet3_frontend/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./cise_ass1a_worksheet3_frontend/build", "index.html"));
// });

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));

// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);


// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(dirname, "./cise_ass1a_worksheet3_frontend/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(dirname, "./cise_ass1a_worksheet3_frontend/build", "index.html"));
}); 


const port = process.env.PORT || 8082;



app.listen(port, () => console.log(`Server running on port ${port}`));