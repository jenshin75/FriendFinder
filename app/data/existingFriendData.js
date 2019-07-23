// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var existingTableArray = [
  {
      existingName: "Existing User 1",
      existingA1: "1",
      existingA2: "2",
      existingA3: "3",
      existingA4: "4",
      existingA5: "5",
      existingA6: "1",
      existingA7: "2",
      existingA8: "3",
      existingA9: "4",
      existingA10: "5"
    }
  ];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = existingTableArray;
