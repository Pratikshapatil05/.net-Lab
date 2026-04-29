const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy data
let arr = [
    { id: 1, name: "Adi", department: "Developer" },
    { id: 2, name: "Sarika", department: "Tester" },
    { id: 3, name: "Pratiksha", department: "Coder" },
    { id: 4, name: "Sitara", department: "Designer" }
];

//  GET all users
app.get('/users', (req, res) => {
    res.json({
        message: "Users list",
        data: arr
    });
});

// GET user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const user = arr.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        message: "Particular user info",
        data: user
    });
});

