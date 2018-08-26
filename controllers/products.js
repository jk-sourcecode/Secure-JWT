module.exports = function (router) {
    router.get('/products', (req, res) => {
        res.json({ data: 'product list' })
    })

    router.get('/products/item', (req, res) => {
        res.json({ data: 'Item 1' })
    })

    return router
}