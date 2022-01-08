const router = require('express').Router()
const rsvpController = require('./rsvpController')

router.get('/rsvp', rsvpController.get)
router.post('/rsvp', rsvpController.create)

module.exports = router
