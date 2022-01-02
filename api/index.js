const router = require('express').Router()
const rsvpController = require('./rsvpController')

router.post('/rsvp', rsvpController.create)

module.exports = router
