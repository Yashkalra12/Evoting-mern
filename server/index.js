const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5010;

// Connect to MongoDB and log status
connectToMongo().then(() => {
  console.log('MongoDB connection established successfully');
}).catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});

// Serve static files from the React frontend
const buildpath = path.join(__dirname, "../client/build");
app.use(express.static(buildpath));

// Enable CORS
app.use(cors({
  origin: 'https://evoting-mern-frontend.vercel.app', 
  methods: ['GET', 'POST','PUT','DELETE'], // Allow only GET ,POST ,PUT and DELETE requests
  credentials: true, // Allow credentials (cookies, authorization headers)
}));

// Middleware for parsing JSON bodies
app.use(express.json());

// Available Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/candidate', require('./routes/candidate'));

// Start server and log when it's running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
