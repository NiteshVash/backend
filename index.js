// Import express and cors modules
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for the specific origin (e.g., localhost:3000)
app.use(cors({
    origin: 'http://localhost:3000', // Change to match the front-end origin
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Sample API route
app.post('/api/message', (req, res) => {
    const message = req.body.message;
    res.json({ message: `Received: ${message}` });
});

// Set up server to listen on a port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
