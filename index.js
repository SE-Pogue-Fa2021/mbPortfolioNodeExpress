const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

//DIRNAME ERROR
app.use(express.static(__dirname + '/public'))
// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))

app.get('/dr', (req,res) => res.render('DiceRoller'))

app.get('/gtke', (req,res) => res.render('GettingToKnowEachOther'))

app.get('/resume', (req,res) => res.render('Resume'))

app.get('/regexp', (req,res) => res.render('RegExp'))

// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))