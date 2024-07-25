const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
    // Path to the localization file
    const filePath = path.join(__dirname, '../../locales/en.json');
    
    // Read the localization file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading localization file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        // Send the localization data as JSON
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
};
