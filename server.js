
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'SmartLibrary server is running'
    });
});

// Start server when running directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`SmartLibrary running at http://localhost:${PORT}`);
    });
}

module.exports = app;
