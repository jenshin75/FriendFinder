// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    name: "Julie",
    photo: "www.yahoo.com",
    scores: ["1",
    "4",
    "4",
    "3",
    "1",
    "2",
    "2",
    "3",
    "4",
    "1"]
  },
  {
    name: "John",
    photo: "www.facebook.com",
    scores: ["2",
    "2",
    "3",
    "2",
    "5",
    "3",
    "3",
    "3",
    "3",
    "4"
  ]
  },
  {
    name: "Ken",
    photo: "www.cnn.com",
    scores: ["3",
    "5",
    "4",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "1"]
  },
  {
    name: "Barbie",
    photo: "www.aol.com",
    scores: ["1",
    "3",
    "2",
    "1",
    "5",
    "2",
    "5",
    "5",
    "1",
    "3"]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
