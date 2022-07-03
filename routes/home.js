const router = require("express").Router();

//handling the root route
router.get('/', function (req, res) {
    res.render('home.ejs');
});

module.exports = router;
