const { question } = require("readline-sync");
var readlineSync = require("readline-sync");
//input the name
var username = readlineSync.question("Write your name: ");
console.log("Welcome! " + username + "...This is Abhishek\n");
console.log("Let's play a quiz to check how much do you know about me.\n");


//variable to store score
var score = 0;

//object to store highScorer info
var highScorer = [
  {
    name: "prashant",
    highScore: 6
  },
  {
    name: "sumit",
    highScore: 5
  }
];

//storing questions
var questions = [
  {
    question: "1. What is my last name? ",
    answer: "Pundir"
  },
  {
    question: "2. In which month my birthday comes? ",
    answer: "October"
  },
  {
    question: "3. Which is my favorite color? ",
    answer: "Black"
  },
  {
    question: "4. Which is my favorite sport? ",
    answer: "Cricket"
  },
  {
    question: "5. What is the color of my eyes? ",
    answer: "Brown"
  },
  {
    question: "6. Do I believe in god? ",
    answer: "Yes"
  },
  {
    question: "7. Do I have siblings? ",
    answer: "Yes"
  },
  {
    question: "8. What games do I like the most:Indoor or Outdoor? ",
    answer: "Outdoor"
  },
  {
    question: "9. Do I like to cook? ",
    answer: "Yes"
  },
  {
    question: "10. Do I play cricket? ",
    answer: "Yes"
  },
]
//calling play function
play(questions);

//play function
function play(questions) {
  for (var i = 0; i < questions.length; i++) {
    //calling quiz function
    quiz(questions[i].question, questions[i].answer);
  }
}

//quiz function
function quiz(question, answer) {
  var useranswer = readlineSync.question(question);
  if (useranswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log("right");

  }
  else {
    console.log("wrong");

  }
}

//calling updateLeaderFunction
updateLeaderBoard();

//leaderboard for high scorer
function updateLeaderBoard() {
  for (var j = 0; j < highScorer.length; j++) {
    if (score > highScorer[j].score) {
      var newPlayer = {
        name: username,
        highScore: score
      };
      highScorer.push(newPlayer);
      break;
    }
  }
}


console.log("Your final score: " + score + " out " + questions.length);
console.log("\n===========Game Over===========");

for (var i = 0; i < highScorer.length; i++) {
  if (score > highScorer[i].highScore) {
    console.log("Awesome..." + username + "!" + " You have just broken the high score");
    break;
  }
}
var newPlayer = {
  name: username,
  highScore: score
};
highScorer.push(newPlayer);
function leaders() {
  console.log("\nFinal LeaderBoard is: ");
  for (var i = 0; i < highScorer.length; i++) {
    var name = highScorer[i].name;
    var scored = highScorer[i].highScore;
    console.log(name + " : " + scored);
    console.log(highScorer.length);
  }
}
leaders();
console.log(highScorer);
