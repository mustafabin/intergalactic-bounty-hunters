# Intergalactic Bounty Hunters

## Set up

Start `Mongo`, by typing `mongod`, if you don't already have it running.

Open a new tab and start a Mongo shell if you don't have it running by typing `mongo`.

Connect to a new sub-database by typing:

```
use hunters
```

If this database does not exist, it will be created

Let's create a collection for all the beings that have bounties.

```js
db.createCollection('bounties')
```

We should get an `ok` message.

## Create/Insert

Let's add our first bounty

```js
db.bounties.insert(
  {
    name: 'Han Solo',
    wantedFor : 'Owing money',
    client : 'Jabba the Hut',
    reward : 1000000,
    ship: 'Millennium Falcon',
    hunters :['Bobba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
    captured: false
  }
)
```

You should get an ok message that looks similar to this:

![Insert ok](https://i.imgur.com/KdFh4Ss.png)

Using the above template, make another bounty.

Now insert a few more bounties (at least 5).

```js
db.bounties.insert([
  {
    name: 'Han Solo',
    wantedFor : 'Owing money',
    client : 'Jabba the Hut',
    reward : 1000000,
    ship: 'Millennium Falcon',
    hunters :['Bobba Fett', 'Dengar', 'IG-88', 'Zuckuss', 'Greedo', 'Bossk', '4-LOM'],
    captured: false
  },
  {
    name: 'Rocket',
    wantedFor : 'Stealing Batteries',
    client : 'Ayesha High Priestess of the Sovereign',
    reward : 1000000000,
    ship: 'The Milano',
    hunters :['Nebula', 'Ravagers'],
    captured: false
  },
  {
    name: 'Sara Lance',
    wantedFor : 'Screwing up the timeline, causing anachronisms',
    client : 'Time Bureau',
    reward : 50000,
    ship: 'Waverider',
    hunters :['Chronos'],
    captured: false
  },
  {
    name: 'Malcolm Reynolds',
    wantedFor : 'Aiming to misbehave',
    client : 'The Alliance',
    reward : 40000,
    ship: 'Serenity',
    hunters :['Jubal Early'],
    captured: false
  },
  {
    name: 'Starbuck',
    wantedFor : "Disobeying Captain's orders",
    client : 'Captain Adama',
    ship: 'Demetrius',
    reward : 1000,
    hunters :['Apollo'],
    captured: true
  }
])
```

## Read/Query

Wrote out the query for each of the following prompts after the prompt. Test
them in the Mongo shell first!

* Do a query to see all the bounties
* Do a query to find the bounty whose client is `Time Bureau`
* Do a query to find the bounties who have been `captured`
* Do a query specific to the bounty you inserted
* Do a query to just return the names of all the bounties

## Remove

Wrote out the query for each of the following prompts after the prompt. Test
them in the Mongo shell first!

* Starbuck and the Captain have come to an understanding. Remove her record
* Find and remove the duplicate record - be sure to JUST remove the one copy

## Update

Wrote out the query for each of the following prompts after the prompt. Test
them in the Mongo shell first!

* Update `Sara Lance`'s name to be her superhero alias 'White Canary'
* Update Rocket's ship to be `The Milano 2`
