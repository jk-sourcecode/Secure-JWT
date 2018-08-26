const jwt = require('jsonwebtoken')

module.exports = function (router) {
    router.post('/login', (req, res) => {
        if (req.body.username === 'admin' && req.body.password === 'admin123') {
            let jwtToken = jwt.sign({status: 'success', username: req.body.username, }, 'admin', { expiresIn: 60 })
            res.json({
                status: 'success',               
                jwt: jwtToken
            })
        } else {
            res.status(401).json({ status: 'Login failed', error: 'Invalid username and password' })
        }

    })

    return router
}