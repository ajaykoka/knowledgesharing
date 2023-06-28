const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Mock user credentials for demonstration purposes
const users = [
  { username: 'admin', password: 'admin' },
  { username: 'test', password: 'test' }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
