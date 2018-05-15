var router = require('express').Router();

var Item = require('./models/item.js');

// GET /
router.get('/item', function (req, res, next) {
    Item.getItems(function (err, items) {
        if (err) console.error(err)
        res.json(items);
    })
});

router.post('/item', function (req, res, next) {
    Item.addItem(req.body.item, function (err, items) {
        if (err) console.error(err)
        res.end("HECHO!")
    });

})

router.put('/item', function (req, res, next) {
    Item.editItem(req.body.item, function (err, items) {
        if (err) console.error(err)
        res.end("HECHO!")
    });
})

router.put('/item/:id/suma', function (req, res, next) {
    Item.suma(req.params.id, function (err, items) {
        if (err) console.error(err)
        res.end("HECHO!")
    });
})

router.put('/item/:id/resta', function (req, res, next) {
    Item.resta(req.params.id, function (err, items) {
        if (err) console.error(err)
        res.end("HECHO!")
    });
})

router.delete('/item/:id', function (req, res, next) {
    Item.borrarItem(req.params.id, function (err, items) {
        if (err) console.error(err)
        res.end("HECHO!")
    });
})
module.exports = router;
