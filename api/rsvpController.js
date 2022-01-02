const Rsvp = require('./rsvpModel')

async function create(req, res) {
  const nameKey = req.body.name.toLowerCase()
  const existingRsvp = await Rsvp.findOne({ where: { name: nameKey } })

  if (existingRsvp) {
    existingRsvp.name = nameKey
    existingRsvp.email = req.body.email
    existingRsvp.attending = req.body.attending
    existingRsvp.entree = req.body.entree
    existingRsvp.dairyFree = req.body.dairyFree
    existingRsvp.glutenFree = req.body.glutenFree
    existingRsvp.vegetarian = req.body.vegetarian
    existingRsvp.vegan = req.body.vegan

    await existingRsvp.save()

    res.sendStatus(200)
  } else {
    try {
      await Rsvp.create({
        name: nameKey,
        email: req.body.email,
        attending: req.body.attending,
        entree: req.body.entree,
        dairyFree: req.body.dairyFree,
        glutenFree: req.body.glutenFree,
        vegetarian: req.body.vegetarian,
        vegan: req.body.vegan,
      })

      res.sendStatus(201)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = {
  create,
}
