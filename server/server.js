let objStr = JSON.stringify(people);
console.log(objStr);
let obj2 = JSON.parse(objStr);
console.log(obj2);


const express = require('express');
const app = express();

app.use(express.json());

const users = [
  {
    username: 'user1',
    birthdate: '1990-01-01',
    age: 34,
    email: 'user1@example.com',
    password: 'password1',
    valid: true
  },
  {
    username: 'user2',
    birthdate: '1985-05-15',
    age: 39,
    email: 'user2@example.com',
    password: 'password2',
    valid: true
  },
  {
    username: 'user3',
    birthdate: '2000-09-09',
    age: 24,
    email: 'user3@example.com',
    password: 'password3',
    valid: true
  }
];

// API route for authentication
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const { password, ...userDetails } = user;
    res.json(userDetails);
  } else {
    res.status(401).json({ valid: false });
  }
});