const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  name: String,
  wantedFor: String,
  reward: {
    type: Number,
    min: 0
  },
  client:String,
  ship: String,
  hunters: [String],
  captured: Boolean
});

module.exports = mongoose.model('Bounty', bountySchema);
