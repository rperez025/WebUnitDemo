// an array of objects
let tysFriends = [
    {
        name: 'Jim',
        age: 22
    },
    {
        name: 'James',
        age: 20
    },
    {
        name: 'Paul',
        age: 21
    },
    {
        name: 'Tyrone',
        age: 22
    },
    {
        name: 'Erkyah',
        age: 22
    }
]
console.log(tysFriends);

// make a function to do the filtering
function twentyOneOrOlder(friend)
{
    return friend.age >= 21; // when this is applied to the .filter() function
                            // it checks for the property and returns the
                            // object to the list if this criteria is true
}

// when it's time to apply the filter
twentyOneOrOlderFriends = tysFriends.filter(twentyOneOrOlder);

// display the filtered array
console.log(twentyOneOrOlderFriends);

console.log('------------------------------------');

/*
    In this activity, you will create a custome function by using
    .filter() to return the players who made the team, according to
    the roster dataset.
    Then, you'll use that filtered data to determine how many players
    made the cut.
*/

// An array of objects
let roster = [{
    name: "Doug",
    position: "Quarterback",
    madeTeam: true
  },
  {
    name: "Antonio",
    position: "Tight End",
    madeTeam: true
  },
  {
    name: "Nick",
    position: "Kicker",
    madeTeam: false
  },
  {
    name: "Ereck",
    position: "Offensive Live",
    madeTeam: false
  },
  {
    name: "AJ",
    position: "Line Backer",
    madeTeam: true
  }
  ];

  function madeCut(player)
  {
    // We can do one of the following:
    // return player.madeTeam == true;  - this means the returned value is not going to be 'zero'
    // or - is it NOT FALSE
    return player.madeTeam;
  }

// use the .filter() function to see who made the team
let team = roster.filter(madeCut);

// display who made the team
console.log(team)

// tell how many players made the team
console.log(`${team.length} players made the team`);