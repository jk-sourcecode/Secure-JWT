module.exports = function (app, router) {

    app.get('/_info', (req, res) => {
        res.json({ status: 'OK' })
    })

    app.use('/api', require('./lib/auth'))    
    app.use('/api', require('./controllers/products')(router))
    app.use('/', require('./controllers/user')(router))

    return app
}