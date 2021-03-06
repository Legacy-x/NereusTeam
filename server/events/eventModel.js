var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  title : {
  	type : String,
  	required : true
  },
  _owner : { 
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'User'
  },
  startDate : Date,
  endDate : Date,
  location : String,
  locationId : String,
  positionLat: Number,
  positionLng: Number,
  type : String,
  description : String,
  skillsrequired : [String],
  website: String,
  startHour : String ,
  endHour : String,
  poster : String,
  users : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }]
});

var Event=mongoose.model('Event', eventSchema);


// var newEvent=new Event({
//   title : 'new Event'
// });

// newEvent.save(function (err,newEntry) {
//   console.log(newEntry);
// })

module.exports = Event;