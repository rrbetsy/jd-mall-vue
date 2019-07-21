const router = require('koa-router')()
const index = require('./api/index')
const shopCartAll = require('./api/shop-cart/all')
router.get('/', index).get('/shop-cart/all', shopCartAll)
// .get('/post/:id', show)
// .post('/post', create)
module.exports = router
