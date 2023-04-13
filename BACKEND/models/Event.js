const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({

    UserID : {
        type : String
    },
    EmailAddress : {
        type : String
    },
    DateEvent : {
        type : Date
    },
    EventType : {
        type : String
    },
    Description : {
        type : String,
    },
    ExpectedParticipants : {
        type : Number,
    },
    RequiredItems : {
        type : String,
    },
    Notes : {
        type : String,
    },
    EventPhoto : {
        type : String,
    },

})

const Event = mongoose.model("Event",EventSchema);

module.exports =  Event;