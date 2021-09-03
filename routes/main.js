const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', async (req, res, next) => {
    const data = req.context
    const itemCtr = controllers.item.instance()
    data.asal = await itemCtr.get({category:'عسل'})
    data.jelly = await itemCtr.get({category:'ژل'})
    data.garde = await itemCtr.get({category:'گرده'})
    res.render('home', data)
})
router.get('/blog',(req, res, next) => {
    const data = req.context
    res.render('blog', data)
})

router.get('/items', async (req, res, next) => {
    const filters = res.query
    const itemCtr = controllers.item.instance()
    const items = await itemCtr.get(filters)

    res.json({
        items
    })
})
router.post('/order', async (req, res, next)=>{
    const orderData = req.body
    res.json(orderData)
})
module.exports = router
