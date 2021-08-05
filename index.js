//****challege #1 ****
// console.log("Vipul mahajan");

//****challege #2 ****
/* var readlineSync = require("readline-sync");
 var userName = readlineSync.question("May I Know Your name?");
 console.log("Hi " + userName + "!");
 */


//**** challege #3 and #4 ****
/*var welcomeMessage = "Welcome! " + userName;
console.log(welcomeMessage);
*/


//**** challege #5 and #6 ****
/*var readlineSync = require("readline-sync")
var userEnteredAge = readlineSync.question("Your Age is greater than 25? ");
var score = 10;
console.log("you Entered " + userEnteredAge)
if(userEnteredAge === "yes"){
	console.log("You  Are Right!")
  score = score + 1;
  console.log("Your score: " + score)

}
else{
  console.log("You Are Wrong!")
  score = score - 1;
  console.log("Your score: " + score)
}

console.log(userEnteredAge); */



//** home work ex#1 **
 
/*var readlineSync = require("readline-sync");
 var userGender = readlineSync.question("Are you Male? ");

var myScore = 5;

console.log("you Entered " + userGender);
if(userGender === "yes"){
  console.log("You Are Right! ")
  score = myScore + 1;
  console.log("your Score is: " + score);
}
else{
  console.log("You Are Wrong! ")
  score = myScore - 1;
  console.log(score);
} */


//** home work Ex#2 **

/*var readlineSync = require("readline-sync");
var question = "Do you Have completed your BE degree? ";
var answer = "yes";
var degree = readlineSync.question(question);
var level = 0;
console.log("You Enter " + degree);
if(degree === answer){
  console.log("Yes!  You have a BE Degree");
  level = level + 1;
  console.log( "Your level is " + level);
}else{
  console.log("No! You have not a BE Degree");
  level = level - 1;
  console.log("Your level is " + level);
} */


//**** challege #7 ****

/*function add(num1, num2){
	console.log("Number1: " , num1, "Number2: ", num2);
	var sum = num1 + num2;
	return sum;
}

var result = add(3,7);
console.log("The sum of 3 and 7 is: " + result);
console.log(add(2,7)); */


//**** challege #8 ****

/*var readlineSync = require("readline-sync");
var score = 0;
function play(question,answer){
	var userAnswer = readlineSync.question(question);
	if(userAnswer === answer){
		console.log("You are Right!.. ");
		score = score + 1;
	}
	else{
		console.log("You are Wrong!..")
		score = score - 1;
	}

}
play("where are you from? ", "surat");
play("what is your favorite subject? ", "maths");
console.log("Your score is: " + score)
*/



//**** challege #9 ****

// for(i=0; i < 5; i = i + 1){
// 	console.log("Vipul Mahajan")
// }


// homework
/*
var n = 5;
var string = ""
for(var i=1; i <= n; i++){
	for (var j=0; j<i; j++){
		string += "*";
	}
	string += "\n";

}
console.log(string)
*/

// homework
/*
var n = 6;
var string = ""
for(var i=1; i < n; i++){
	for (var j=0; j<n-i; j++){
		string += "*";
	}
	string += "\n";

}
console.log(string)
*/

//**** challege #10 ****

/*
var myList = ["tamato","onion","carrot","potato","brinjal"];
console.log(myList[0]);
console.log(myList[2]);
console.log(myList[4]);
console.log(myList.length)
console.log(myList[myList.length-1]);
*/


//**** challege #11 ****

/*
var myList = ["tamato","onion","carrot","potato","brinjal","tinda","methi","garlic"];
for(var i = 0; i < myList.length; i++){
	console.log(myList[i]);
}
*/


//**** challege #12 ****
/*
var superman = {
	name: "superman",
	power: "fight",
	costumeColor: "red",
	strength: 10000,
	stealth: 0,
	intelligence: 100,

}

var batman = {
	name: "batman",
	power: "martial arts",
	costumeColor: "black",
	strength: 100,
	stealth: 100,
	intelligence: 1000,

}
console.log(superman.strength);
console.log(batman.strength);
console.log(superman.strength > batman.strength);
console.log(superman.stealth);
console.log(batman.stealth);
console.log(superman.stealth == batman.stealth);
*/


// online challenge
/*
var superheroes = [superman,batman];
for(var i=0; i < superheroes.length; i++) {
	var currentHero = superheroes[i];
	console.log(currentHero.name);
	console.log(currentHero.costumeColor);
}
*/


//**** challege #13 #14 #15 ****
/*
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("what is your name? ");
console.log("welcome! " + userName + " to DO YOU KNOW tanay? " );

function play(question,answer){
	var userAnswer = readlineSync.question(question)
	if(userAnswer === answer){
		console.log("You are Right!")
		score = score + 1;
	}
	else{
		console.log("you are Wrong! ")
	}
	console.log("current score is : " , score);
  console.log("--------");
}

play("where do you I live? ", "surat");

play("what is your favorite food? ", "vadapav");
play("which language do you like? ","javascript");


var questions = [{
	question: "where do you I live? ",
	answer: "surat"
},{
	question:"who is your favorite hero? ",
	answer: "superman"
}];

for(var i=0; i<questions.length; i++){
	var currentQuestion = questions[i];
	play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAH! YOUR SCORED " + score);
*/



//quiz


const readlineSync = require('readline-sync')
let score = 0;
const questions = [
    {
      question: "Which is my Favorite indian cricketer? ",
      answer: "virat kohli"
    },
    {
      question: "which is my Favorite IPL team? ",
      answer: "rcb"
    },
    {
      question: "which is my favorite food?  ",
      answer: "vadapav"
    },
    {
      question: "which is my Favorite netfix series? ",
      answer: "mirzapur"
    },
    {
      question: "which is my favorite company? ",
      answer: "google"
    },
    {
      question: "which is my Favorite english cricketer? ",
      answer: "josh buttler"
    },
    {
      question: "which is my Favorite australian cricketer? ",
      answer: "glenn maxwell"
    },
    {
      question: "which is my Favorite game?  ",
      answer: "cricket"
  },
  {
      question: "which is my Favorite mobile? ",
      answer: "apple"
  }
  ,{
      question: "which is my Favorite laptop? ",
      answer: "lenovo"
  }
]

//this function ask questions, check answers and mark score.
function askQuestion(question, answer) {
  let getResponse = readlineSync.question(question);
  if (getResponse.toLowerCase() === answer.toLowerCase()) {
     score = score + 1;
  }
  console.log('Your current score is: ',score);
  console.log('---------------');
  console.log()
}

//high score logic
const highestScorers = [
  {
    name: "Vipul",
    score: 9
  },
  {
    name: "jay",
    score: 8
  }
]

function checkHighScore(score, name) {
  for (let i = 0; i < highestScorers.length; i++) {
    if(highestScorers[i].score < score) {
      console.log('congratulations you are on high score board')
      highestScorers.push({name: name, score: score})
      break;
    }
  }
}

// carrier program
const user = readlineSync.question('what is your name? ');
for (let i = 0; i < questions.length; i++) {
  const ask = questions[i];
  askQuestion(ask.question, ask.answer);
}
checkHighScore(score, user);
console.log("----------HIGH SCORE BOARD----------")
for (let i = 0; i < highestScorers.length; i++) {
  console.log('Name: ', highestScorers[i].name);
  console.log('Score: ', highestScorers[i].score);
  console.log("------------------");
}



// good commit messages
// update README with details of the project
// update URL of the REPL in Github