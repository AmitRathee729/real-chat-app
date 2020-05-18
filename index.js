const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')                  // templeting engine
const http = require('http')
const container = require('./container')

container.resolve(function (users) {        // users comes from express-promise-router (line 20)
    // use express and http 
    const app = SetupExpress()
    function SetupExpress() {
        const app = express()
        const server = http.createServer(app)
        server.listen(3333, function () {
            console.log('Listening on port 3333')
        })
        ConfigureExpress(app);

        // setup router (express-promise-router)
        const router = require('express-promise-router')();
        users.setRouting(router);                   // it is used for controllers/users.js file

        app.use(router);
    }


    // setup configuration 
    function ConfigureExpress(app) {
        app.use(express.static('public'))           // static files like image save in public folder
        app.set('view engine', 'ejs')               // for templating engine used for view engine folder
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))
    }
})