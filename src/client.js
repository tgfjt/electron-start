const choo = require('choo')
const document = require('global/document')

const main = require('./models/main')
const mainView = require('./views/mainView')

const app = choo()

app.model(main)

app.router(['/', mainView])

const tree = app.start()

document.getElementById('app').appendChild(tree)
