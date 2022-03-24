const Bounty = require("./models/Bounty.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bountyHunters", {
  useNewUrlParser: true,
});

/*
 * Instructions:
 *
 * For each prompt below, write a query that completes the task described in
 * the prompt.
 *
 * Tip: comment out your answers before moving on to the next prompt.
 *
 */

// Create a new Bounty with the following values:
// - name: Han Solo,
// - wanted for:  Owing Money
// - client: Jabba the Hut
// - reward: 10000000
// - ship: Millennium Falcon
// - hunters: Bobba Fett, Dengar, IG-88, Zuckus, Greedo, Bossk, 4-Lom
// - captured: false

// Bounty.create({
//   name: "Han Solo",
//   wantedFor: "Owing Money",
//   client: "Jabba the Hut",
//   reward: 10000000,
//   ship: "Millennium Falcon",
//   hunters: [
//     "Bobba Fett",
//     " Dengar",
//     "IG-88",
//     "Zuckus",
//     "Greedo",
//     "Bossk",
//     "4-Lom",
//   ],
//   captured: false,
// }).then((e) => console.log(e));

// Find all bounties in the database

// Bounty.find({}).then((e) => console.log(e));

// Find all bounties where the client is 'Time Bureau'

// Bounty.find({ client: "Time Bureau" }).then((e) => console.log(e));

// Find all bounties that have been captured

// Bounty.find({ captured: true }).then((e) => console.log(e));

// Find all bounties with a reward greater than 100,000

// Bounty.find({ reward: { $gt: 100000 } }).then((e) => console.log(e));

// Starbuck and the Captain have come to an understanding. Remove her record.

// Bounty.deleteOne({ name: "Starbuck" }).then((e) => console.log(e));

// Update Sara Lance's name to be her super hero alias, 'White Canary'

// Bounty.updateOne({ name: "Sara Lance" }, { name: "White Canary" }).then((e) =>
//   console.log(e)
// );

// Update Rocket's ship to be 'The Milano 2'
Bounty.updateOne({ name: "Rocket" }, { ship: "The Milano 2" }).then((e) => {
  console.log(e);
});
