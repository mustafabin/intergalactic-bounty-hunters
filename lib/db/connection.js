const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bountyHunters', {
  useNewUrlParser: true
});
module.exports = mongoose;
