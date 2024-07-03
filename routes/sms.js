const express = require('express')
const router = express.Router()
const { MessagingResponse } = require('twilio').twiml;

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use((req, res, next) => {
  res.on('finish', async () => {
    // You might have to add a logic here like if(req.user) then perform following things
    // Do whatever you want to do here after every API call finishes
    // you can access res.statusCode, req.method etc.
    console.log(req.body.phone);
  });
  next();
});

router.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("Testing");

  res.type('text/xml').send(twiml.toString());

});

module.exports = router;