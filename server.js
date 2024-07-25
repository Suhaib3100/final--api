const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/localize/en/', (req, res) => {
    const filePath = path.join(__dirname, 'public/en.json');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(404).json({ message: 'Language file not found' });
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});

app.get('/api/localize/en/list', (req, res) => {
    const langList = {
        "en": "English"
    };
    res.status(200).json(langList);
});

app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
