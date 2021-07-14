var readLineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;
var questionAndAnswers = {
  question: [
    "Who does the Mad Titan sacrifice to acquire the Soul Stone? \nA.Nebula \nB.Ebony Maw \nC.Cull Obsidian \nD.Gamora\n",
    "What is the name of Thor’s hammer?\nA.Vanir\nB.Mjolnir\nC.Aesir\nD.Norn\n",
    "What type of doctor is Stephen Strange? \nA.Neurosurgeon \nB.Cardiothoracic Surgeon \nC.Trauma Surgeon \nD.Plastic Surgeon\n",
    "What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming? \nA.Washington Monument \nB.Statue of Liberty \nC.Mount Rushmore \nD.Golden Gate Bridge\n",
    "What does the Winter Soldier say after Steve recognizes him for the first time? \nA.Who the hell is Bucky? \nB.Do I know you? \nC.He’s gone. \nD.What did you say?\n",
    "About which city do Hawkeye and Black Widow often reminisce? \nA.Budapest \nB.Prague \nC.Istanbul \nD.Sokovia\n",
    "Who does not disappear from “The Snap?” \nA.Bucky Barnes \nB.Wanda Maximoff \nC.Vision \nD.Peter Parker\n",
    "Which Infinity Stone does Thanos get first? \nA.Reality \nB.Space \nC.Power \nD.Soul\n",
    "In which film do we first see Thanos? \nA.Guardians of the Galaxy \nB.The Avengers \nC.Thor: Ragnarok \nD.Avengers: Infinity War\n",
    "Which of these movies has the shortest run time? \nA.Thor: The Dark World \nB.Doctor Strange \nC.Captain Marvel \nD.Guardians of the Galaxy\n",
  ],
  answer: ["D", "B", "A", "D", "A", "A", "C", "C", "B", "A"],
};

function evaluator(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("You are right"));
    score = score + 10;
    console.log("Your current score is " + score + "\n");
  } else {
    console.log(chalk.red("You are wrong!"));
    score = score - 5;
    console.log("Your current score is " + score + "\n");
  }
}

console.log("<-----WELCOME TO MARVEL QUIZ----->");
var userName = readLineSync.question("Enter your name?\n");
console.log("Welcome " + chalk.cyanBright(userName));
console.log(
  "The Scoring is: \nYou get " +
    chalk.green("10") +
    " point for each correct answer and " +
    chalk.red("-5") +
    " for wrong \nType the option [a,b,c,d] for the answer"
);
console.log("Lets Start the Game:\n");

readLineSync.setDefaultOptions({ limit: ["a", "b", "c", "d"] });

for (var i = 0; i < 10; i++) {
  evaluator(questionAndAnswers.question[i], questionAndAnswers.answer[i]);
}
console.log("YAY! you finished the game");
console.log(userName + " your final score is: " + chalk.cyanBright(score));
