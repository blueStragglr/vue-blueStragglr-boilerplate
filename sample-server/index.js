const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'blueStragglr#secretKey',
  resave: false,
  saveUninitialized: true
}));

const loginInfo = [
  {
    username: 'blue',
    password: 'stragglr',
    role: 'admin'
  }, {
    username: 'light',
    password: 'user',
    role: 'user'
  }
]

app.use(cors());

app.get('/', (req, res) => res.send('Hello blueStragglr!'))
app.post('/login', (req, res) => {
  let loginFlag = false
  loginInfo.forEach(element => {
    if (req.body.username === element.username && req.body.password === element.password) {
      sess = req.session
      sess.username = req.body.username
      res.json({
        username: element.username,
        role: element.role
      })
      loginFlag = true
    }
  })
  if (!loginFlag){ res.status(401).json({ error: 'Something failed!' }) }
})

app.get('/logout', function (req, res) {
  let sess = req.session;
  if (sess.username) {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    })
  } else {
    res.redirect('/');
  }
})


app.get('/check_session', (req, res) => {

})

app.listen(port, () => console.log(`Login sample listening at http://localhost:${port}`))
