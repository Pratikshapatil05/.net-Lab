const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});