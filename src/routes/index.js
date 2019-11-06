var express = require('express');
var router = express.Router();
import { callTestApi } from './apiBuilder';

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/latency', (req, res) => {
  callTestApi().then(result => {
    res.send(result.data);
  }).catch(err => {
    res.status(400).send(err);
  });
});

module.exports = router;