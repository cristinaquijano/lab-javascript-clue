// ITERATION 1

// Suspects Array

const suspectsArray = [
  // Supect 1 - mrGreen
  {
 card: 'mrGreen',
 firstName: 'Jacob',
 lastName: 'Green',
 occupation: 'Entrepreneur',
 age: 45,
 description: 'He has a lot of connections',
 image: src = 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
 color: 'green'
  },

  // Suspect 2 - drOrchid
  {
  card: 'drOrchid',
  firstName: 'Doctor',
  lastName: 'Orchid',
  occupation: 'Scientist',
  age: 26,  
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  image: src = 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  color: 'white'
  },

  // Suspect 3 - profPlum
  {
  card: 'profPlum,',
  firstName: 'Victor',
  lastName: 'Plum',
  occupation: 'Designer',
  age: 22,
  description: 'Billionaire video game designer',
  image: src= 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
  color: 'purple'
  },
  // Suspect 4 - missScarlet
  {
    card: 'missScarlet',
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: src = 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'  
  },
  // Suspect 5 - mrsPeacock
  {
    card: 'mrsPeacock',
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: src = 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue' 
  },
  // Suspect 6 - mrMustard
  {
  card: 'mrMustard',
  firstName: 'Jack',
  lastName: 'Mustard',
  occupation: 'Retired Football player',
  age: 62,
  description: 'He is a former football player who tries to get by on his former glory',
  image: src = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
  color: 'yellow'
  },
];

// Rooms Array

const roomsArray = [
{name: 'Dining Room'},
{name: 'Conservatory'},
{name: 'Kitchen'},
{name: 'Study'},
{name: 'Library'},
{name: 'Billiard Room'},
{name: 'Lounge'},
{name: 'Ballroom'},
{name: 'Hall'},
{name: 'Spa'},
{name: 'Living Room'},
{name: 'Observatory'},
{name: 'Theater'},
{name: 'Guest House'},
{name: 'Patio'}
];

// Weapons Array

const weaponsArray = [
  {name: 'rope', weight: 10},
  {name: 'knife', weight: 8},
  {name: 'candlestick', weight: 2},
  {name: 'dumbbell', weight: 30},
  {name: 'poison', weight: 2},
  {name: 'axe', weight: 15},
  {name: 'bat', weight: 13},
  {name: 'trophy', weight: 25},
  {name: 'pistol', weight: 20}
];


// ITERATION 2

function selectRandom(array) {
  if (!suspectsArray.length){
    return undefined
 }
 let randomArray = array[Math.floor(Math.random()*array.length)];
 return randomArray;
}

function pickMystery() {
  let randomSuspect = selectRandom (suspectsArray);
  let randomWeapon = selectRandom (weaponsArray);
  let randomRoom = selectRandom (roomsArray);
  let mistery = {};
  mistery.suspect = randomSuspect;
  mistery.weapon = randomWeapon;
  mistery.room = randomRoom;
 return mistery;
}
 

// ITERATION 3

function revealMystery(pickMystery) {
  return `${pickMystery.suspect.firstName} ${pickMystery.suspect.lastName} killed Mr. Boddy using the ${pickMystery.weapon.name} in the ${pickMystery.room.name}!`;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
