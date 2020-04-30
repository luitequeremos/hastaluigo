const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static('docs'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/docs/index.html'));
});
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
