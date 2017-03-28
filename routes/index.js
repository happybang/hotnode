var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
// 定义 about 页面的路由
router.get('/test', function(req, res) {
    res.render('index', { title: 'Express' });
});


module.exports = router;