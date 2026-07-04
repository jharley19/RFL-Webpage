const express = require('express');
const app = express();
const PORT = 3000;

// Enable JSON middleware for parsing local request bodies
app.use(express.json());

// Serve static UI assets (HTML, CSS, JS) from a local 'public' folder
app.use(express.static('public'));

// Create a local application endpoint 
app.post('/api/process', (req, rsc) => {
    const { inputData } = req.body;
    
    // Process your logic completely on your hardware here
    const result = `Successfully processed: ${inputData}`;
    
    rsc.json({ success: true, data: result });
});

// Option B: Serve a static HTML file instead (make sure the path is correct)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the local web server
app.listen(PORT, () => {
    console.log(`Application successfully running locally at: http://localhost:${PORT}`);
});
