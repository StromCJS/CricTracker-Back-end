const express = require('express');
const app = express();
const port = 5125;

app.use(express.json());

app.post('/auth/register', (req, res) => {
    const { username, password, role } = req.body;
    // Add your registration logic here
    res.send('User registered successfully');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:5125`);
});
