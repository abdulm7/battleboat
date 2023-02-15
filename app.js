// Imports
const express = require('express')
const app = express()
const port = 5000

const { dirname } = require('path');
const appDir = dirname(require.main.filename);

// Static Files
app.use(express.static('public'));
// Specific folder example
// app.use('/css', express.static(dirname + 'public/css'))
app.use('/js', express.static(appDir + '/public/js'));
// app.use('/img', express.static(dirname + 'public/images'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');
// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
   res.sendFile(dirname + '/views/about.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))