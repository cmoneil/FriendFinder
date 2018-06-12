var friendData = require('../data/friends.js');

var diffArray = [];
var diffTotalArray = [];
var bestFriend;

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData)
    });

    app.post('/api/friends', function (req, res) {
        for (i = 0; i < friendArray.length; i++) {
           
            console.log(friendArray[i].scores)
            
            for (j = 0; j < req.body.scores.length; j++) {

                var scoreDiff = Math.abs(friendArray[i].scores[j] - req.body.scores[j])

                diffArray.push(scoreDiff);

            }
            function getSum(total, num) {
                return total + num;
            }
            function myFunction() {
                var diffTotal = diffArray.reduce(getSum);
                //console.log(diffTotal);
                diffTotalArray.push(diffTotal);
                diffArray = []
                console.log("difftotalarray: " + diffTotalArray);

            }
            myFunction();

        }
        Array.min = function (diffTotalArray) {
            return Math.min.apply(Math, diffTotalArray);
        };
        var value = Array.min(diffTotalArray)
        var key = diffTotalArray.indexOf(value);

        console.log("value: " + value);
        console.log("key: " + key)
        bestFriend = friendArray[key].name;
        console.log(bestFriend);
        diffTotalArray = [];
        friendArray.push(req.body)
        console.log(friendArray);
        
        res.json(bestFriend);
    })

};

Array.min = function (friendArray) {
    return Math.min.apply(Math, friendArray);
};
var value = Array.min(friendArray);
var key = friendArray.indexOf(value);



//compare each item one friend at a time.
// one loop that goes through all of the friends
// one nested loop that goes through the scores