const Bounty = require('../models/Bounty');
const bounties = require('./bounties.json');

Bounty.deleteMany({}).then(() => {
  Bounty.create(bounties).then(bounties => {
    console.log(bounties);
    process.exit();
  });
});
