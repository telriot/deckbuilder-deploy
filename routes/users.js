const express = require("express")
const router = express.Router()
const User = require("../models/User")
const Deck = require("../models/Deck")
const { isProfileOwner } = require("../middleware")
const { editProfileValidationRules, validate } = require("../middleware")

/* GET /:id user by Id . */
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).send("Server Error")
  }
})

router.get("/:id/decks", async (req, res, next) => {
  try {
    const { author, page, sortOrder } = req.query
    const decks = await Deck.paginate(
      { author: author },
      {
        sort: { [sortOrder]: -1 },
        page: page || 1,
        limit: 12
      }
    )
    res.json(decks)
  } catch (error) {
    console.log(error)
    res.status(500).send("Server Error")
  }
})

/* PUT /:id update user profile */
router.put(
  "/:id",
  isProfileOwner,
  editProfileValidationRules(),
  validate,
  async (req, res, next) => {
    const {
      description,
      mtgoUsername,
      arenaUsername,
      email,
      dciNumber,
      country,
      city,
      twitter,
      twitch,
      youtube,
      avatar
    } = req.body.user

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        description,
        mtgoUsername,
        arenaUsername,
        email,
        dciNumber,
        country,
        city,
        twitter,
        twitch,
        youtube,
        avatar
      })
      res.json(user)
    } catch (error) {
      console.log(error)
      res.status(500).send("Server Error")
    }
  }
)

module.exports = router
