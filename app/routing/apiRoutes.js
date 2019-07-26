// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  })

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware

    // you need to code to find the best match

    console.log(req.body)
    // [1,2,3]
    // [2,1,3] survey
    // 1-2 = 1   2-1 = 1 3-3 =0   1+1+0=dif 
    //  pos0 - pos0 = sum number
    var surveyscores = req.body.scores;
    
    // compare the scores from each friend with the scores from the survery and the minmun diference is the best match
    var bestdif = 0;
    var bestmatchindex = 0;

    for (var i = 0; i < friends.length; i++) {
      var dif = 0;
      for (var j = 0; j < surveyscores.length; j++) {
        dif += Math.abs(friends[i].scores[j] - surveyscores[j])
        if (bestdif < dif || bestdif === 0) {
          bestdif = dif
          bestmatchindex = i}
      }
    }

    // compare with best diff I have
    var bestmatch = {
      name: friends[bestmatchindex].name,
      photo: friends[bestmatchindex].photo,
      score: friends[bestmatchindex].scores
    }
    console.log("Your best match is: ", bestmatch)
    friends.push(req.body)
    console.log(req.body)
    res.json(bestmatch)
  }) 
}




  //   app.post("/api/clear", function(req, res) {
  //     // Empty out the arrays of data
  //     existingFriendData.length = 0;
  //     newFriendData.length = 0;

  //     res.json(bestmatch);
  //   });
  // };

  //****************phil's logic start */

  // app.post("/reserve", function(req,res){

  //   var userInputMessageBodyObject=req.body;

  // ​
  //   //store the total difference
  //   var totalDifference=0;
  // ​
  //   //store the result for each substraction from the scores
  //   var result=0;
  // ​
  //   //make a new array to store another array of obects with
  //   //total difference in the scores
  //   var newTablewithTotalDifference =[]

  // ​
  //   //outer for loop to iterate the entire array of object from table
  //   for(var i=0; i< currentTable.length;i++){
  // ​
  //       //reset the total difference for the next object person
  //       totalDifference=0;
  // ​
  //       //inner for loop to calculate the new Person from the user Input off req.body
  //       for(var j=0; j< userInputMessageBodyObject.scores.length;j++){
  // ​
  //           //subtract each object score from first element to the last element of the array
  //            result=  parseFloat(currentTable[i].scores[j]) - parseFloat(userInputMessageBodyObject.scores[j])

  //            //sum up the subtraction and stores in totatdifference
  //   //and change the values to be positive
  //            totalDifference += Math.abs(result)
  //        }

  //       //inserts into a new array of object for sorting the least total difference
  //        newTablewithTotalDifference.push({
  //            currentTable: currentTable[i].name,
  //            totalDifference: totalDifference,
  //            photo: currentTable[i].photo
  //        })
  //   }  
  // ​
  // //add a new person to our table from 
  //   //userInput that is stored in req.body
  //   currentTable.push(userInputMessageBodyObject);

  //   //sorts the new array of object against the total difference
  //   newTablewithTotalDifference.sort(function(a, b){
  //       return a.totalDifference-b.totalDifference
  //   })
  // ​
  //   console.log(newTablewithTotalDifference)

  //   //returns first element and response back the total least difference to the           //client during the post request 
  //   res.json(newTablewithTotalDifference[0]);
  // })

  //****************phil's logic end */
