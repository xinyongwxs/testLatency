var express = require('express');
var router = express.Router();
import { callTestApi } from './apiBuilder';

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/latency', async (req, res) => {
  let apiArr = [];
  let url = "http://ec2-54-255-215-252.ap-southeast-1.compute.amazonaws.com/api/v1.0/ordersInfo/echo";
  let results = [];

  try {
    for (let i = 0; i < 100; i++) {
      let startTime = new Date();
      console.log("No." + i + " call start: " + startTime.toString());
      const resultItem = await callTestApi(url);
      console.log("response: " + resultItem.data);
      results.push(resultItem.data);
      let endTime = new Date();
      let period = endTime.getTime() - startTime.getTime();
      console.log("No." + i + " call end in " + period + " ms: " + endTime.toString());

    }
    // let values = await Promise.all(apiArr);
    // let resultArr = values.map(val => val.data);
    res.send(results.length);
  } catch(e) {
    console.log(e.message);
    console.log(e.stack);
    res.status(400).send(e.message);
  }
  
  // callTestApi().then(result => {
  //   res.send(result.data);
  // }).catch(err => {
  //   res.status(400).send(err);
  // });
});

module.exports = router;