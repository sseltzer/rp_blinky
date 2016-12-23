var express = require('express');
var router = express.Router();

var rpio = require('rpio');


var pin = 11;
rpio.open(pin, rpio.OUTPUT, rpio.LOW);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blinky Blinker Controller' });
});
router.get('/on', function(req, res, next) {
  rpio.write(pin, rpio.HIGH);
  res.json('ok')
});
router.get('/off', function(req, res, next) {
  rpio.write(pin, rpio.LOW);
  res.json('ok')
});
router.get('/blink', function(req, res, next) {
  for (var i = 0; i < 3; i++) {
    /* On for 1 second */
    rpio.write(pin, rpio.HIGH);
    rpio.sleep(1);

    /* Off for half a second (500ms) */
    rpio.write(pin, rpio.LOW);
    rpio.msleep(500);
  }
  res.json('ok')
});

module.exports = router;
