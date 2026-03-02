const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/sort-string', (req, res) => {
    const { data } = req.body;
    if (!data || typeof data !== 'string') {
        return res.status(400).json({ error: "Provide a valid string in 'data' field." });
    }
    const sortedArray = data.split('').sort();
    res.json({ word: sortedArray });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));