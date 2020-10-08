'use strict';

var resultConter = 0;

var name = prompt('Hi there stranger. What is your name?');

alert('Welcome ' + name + '. Let\'s play a guessing game! I\'m going to ask you questions about my self and you need to guess the answers. Let\'s start :) !');

// Questions from 1 to 5 body
var questionsArray = ['Do you think I\'m a morning person?', 'Do you think I\'m a coffee addict?', 'Do you think I\'ve ever been on an airplane?', 'Do you think I have a driving license?', 'Do you think I play tennis?'];

var correctAnswers = ['no', 'yes', 'no', 'no', 'no'];
var wrongAnswers = ['yes', 'no', 'yes', 'yes', 'yes'];


function yesNoQuestion(num,question){
  return prompt('Question ' + num + ': ' + question).toLowerCase();
}




for(var i=0; i<5; i++){
  var ans = yesNoQuestion((i+1), questionsArray[i]);
  if(ans === correctAnswers[i] || ans === correctAnswers[i].charAt(0) || ans === wrongAnswers[i] || ans === wrongAnswers[i].charAt(0)){
    if(ans === correctAnswers[i] || ans === correctAnswers[i].charAt(0)){
      alert('That is correct! :)');
      resultConter++;
    }else{
      alert('That is wrong :(');
    }

  }else{
    alert('Wrong input.');
  }
}


// Question 6

function question6() {
  var numberToGuess = 8;
  alert('Ok ' + name + ', let\'s play another game! This game is called Guess The number. You have 4 tries to guess the number. Let\'s start!');
  var guessGameScore = false;
  for (var i = 0; i < 4; i++) {
    var guessTry = parseInt(prompt('Guess No.' + (i + 1)));
    if (guessTry === numberToGuess) {
      alert('Correct guess. Congratulations!');
      resultConter++;
      guessGameScore = true;
      break;
    } else if (guessTry > numberToGuess) {
      alert('Too high');
    } else if (guessTry < numberToGuess) {
      alert('Too low');
    } else {
      alert('Wrong input');
    }
  }

  if (guessGameScore === true) {
    alert('Congratulatins! You guessed the number correctly. The number is ' + numberToGuess);
  } else {
    alert('Game over. You didn\'t guess the number :( . The number is ' + numberToGuess);
  }
}
question6();



// Question 7
function question7() {
  var favoriteFootballers = ['kaka', 'kroos', 'ronaldo', 'lampard', 'zidane', 'cristiano', 'ronaldinho'];
  var footballerGuessBolean = false;
  alert('Ok ' + name + '. Another game to play. Try to guess 1 of my favorite 7 footballers of all times. You have 6 guesses. Let\'s start!');

  for (var j = 0; j < 6; j++) {
    var footballerGuess = prompt('Guess No.' + (j + 1)).toLocaleLowerCase();
    for (var k = 0; k < favoriteFootballers.length; k++) {
      if (footballerGuess === favoriteFootballers[k]) {
        alert('Correct! ' + footballerGuess + ' is one of my favorite footballers.');
        footballerGuessBolean = true;
        resultConter++;
        break;
      }
    }

    if (footballerGuessBolean === true) {
      break;
    }
    else {
      alert('Wrong answer. Try again.');
    }
  }

  if (footballerGuessBolean === true) {
    alert('Congratulatins! You guessed one of my favorite footballer correctly. Here is a list of my favortie 7 footballers. ' + favoriteFootballers);
  } else {
    alert('Game over. You didn\'t guess any of my favorite footballers :( .  Here is a list of my favortie 7 footballers. ' + favoriteFootballers);
  }
}
question7();


// Result
alert('Your result is: ' + resultConter + ' out of 7');
