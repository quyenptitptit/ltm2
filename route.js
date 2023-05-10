const express = require('express')
const router = express.Router()
const search = require('./controller')

router.post('/searchByDayNha', (req, res) => {
    search.searchByDay(req.body.id, (err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})
router.post('/searchByPrice', (req, res) => {
    search.searchByPrice(req.body.min, req.body.max, (err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})
router.get('/days', (req, res) => {
    search.getDayNha((err, results) => {
        if(err) {
            res.json(err)
        } else {
            results = results.map(r => {
               return r.iddaynha
            })
            res.json(results)
        }
    })
})

module.exports = router