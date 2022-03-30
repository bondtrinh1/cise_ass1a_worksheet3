const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const books = require('./routes/api/books');
const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/books', books);
app.use(express.static("build"));


const path = require("path");

app.use(express.static(path.resolve(__dirname, "./cise_ass1a_worksheet3_frontend/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./cise_ass1a_worksheet3_frontend/build", "index.html"));
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));