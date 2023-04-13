const router = require("express").Router();
const { response } = require("express");
const { find, findByIdAndDelete } = require("../models/Event");
let event = require("../models/Event");

router.route("/add").post((req, res) => {
  const UserID = req.body.UserID;
  const EmailAddress = req.body.EmailAddress;
  const DateEvent = req.body.Date;
  const EventType = req.body.EventType;
  const Description = req.body.Description;
  const ExpectedParticipants = req.body.ExpectedParticipants;
  const RequiredItems = req.body.RequiredItems;
  const Notes= req.body.Notes;
  const EventPhoto= req.body.EventPhoto;

  const newEvent= new event({
    UserID,
    EmailAddress,
    DateEvent,
    EventType,
    Description,
    ExpectedParticipants,
    RequiredItems,
    Notes,
    EventPhoto,
  });
  newEvent
    .save()
    .then(() => {
      res.json("Paper Submitted for Reviewing");
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;