'use strict';

var resultConter = 0;
var name = prompt('Hi there stranger. What is your name?');
alert('Welcome ' + name + '. Let\'s play a guessing game! I\'m going to ask you questions about my self and you need to guess the answers. Let\'s start :) !');

var morningPerson = prompt('Do you think I\'m a morning person?');
if(morningPerson.toLowerCase() === 'yes' || morningPerson.toLowerCase() === 'y'){
  console.log('That is wrong. I\'m not a morning person.');
  alert('That is wrong. I\'m not a morning person.');
} else if(morningPerson.toLowerCase() === 'no' || morningPerson.toLowerCase() === 'n'){
  console.log('That is correct. I\'m not a morning person.');
  alert('That is correct. I\'m not a morning person.');
  resultConter++;
} else{
  console.log('Wrong input.');
  alert('Wrong input.');
}

var coffee = prompt('Do you think I\'m a coffee addict?');
if(coffee.toLowerCase() === 'yes' || coffee.toLowerCase() === 'y'){
  console.log('That is correct. I\'m a coffee addict.');
  alert('That is correct. I\'m a coffee addict.');
  resultConter++;
} else if(coffee.toLowerCase() === 'no' || coffee.toLowerCase() === 'n'){
  console.log('That is correct. I\'m a coffee addict');
  alert('That is correct. I\'m a coffee addict');
} else{
  console.log('Wrong input.');
  alert('Wrong input.');
}

var airplane = prompt('Do you think I\'ve ever been on an airplane?');
if(airplane.toLowerCase() === 'yes' || airplane.toLowerCase() === 'y'){
  console.log('That is wrong. I\'ve never been on an airplane.');
  alert('That is wrong. I\'ve never been on an airplane.');
} else if(airplane.toLowerCase() === 'no' || airplane.toLowerCase() === 'n'){
  console.log('That is correct. I\'ve never been on an airplane.');
  resultConter++;
  alert('That is correct. I\'ve never been on an airplane.');
} else{
  console.log('Wrong input.');
  alert('Wrong input.');
}

var license = prompt('Do you think I have a driving license?');
if(license.toLowerCase() === 'yes' || license.toLowerCase() === 'y'){
  console.log('That is wrong. I don\'t a driving license');
  alert('That is wrong. I don\'t a driving license');
} else if(license.toLowerCase() === 'no' || license.toLowerCase() === 'n'){
  console.log('That is correct. I don\'t a driving license');
  resultConter++;
  alert('That is correct. I don\'t a driving license');
} else{
  console.log('Wrong input.');
  alert('Wrong input.');
}

var tennis = prompt('Do you think I play tennis?');
if(tennis.toLowerCase() === 'yes' || tennis.toLowerCase() === 'y'){
  console.log('That is wrong. I don\'t a play tennis.');
  alert('That is wrong. I don\'t a play tennis.');
} else if(tennis.toLowerCase() === 'no' || tennis.toLowerCase() === 'n'){
  console.log('That is correct. I don\'t a play tennis.');
  alert('That is correct. I don\'t a play tennis.');
  resultConter++;
}else{
  console.log('Wrong input.');
  alert('Wrong input.');
}

var numberToGuess = 356;
alert('Ok ' + name + ', let\'s play another game! This game is called Guess The number. You have 4 tries to guess the number. Let\'s start!');
var guessGameScore = false;
for (var i = 0; i < 4; i++) {
  var guessTry = parseInt(prompt('Guess No.' + i + 1));
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

if(guessGameScore === true)
{
  alert('Congratulatins! You guessed the number correctly. The number is ' + numberToGuess);
} else {
  alert('Game over. You didn\'t guess the number :( . The number is ' + numberToGuess );
}

var favoriteFootballers = ['kaka', 'kroos', 'ronaldo', 'lampard', 'zidane', 'cristiano', 'ronaldinho'];
var footballerGuessBolean = false;
alert('Ok ' + name + '. Another game to play. Try to guess 1 of my favorite 7 footballers of all times. You have 6 guesses. Let\'s start!');

for(var j = 0; j < 7; j++){
  var footballerGuess = prompt('Guess No.' + (j + 1)).toLocaleLowerCase();
  for(var k=0; k < favoriteFootballers.length; k++){
    if(footballerGuess === favoriteFootballers[k]){
      alert('Correct! ' + footballerGuess + ' is one of my favorite footballers.');
      footballerGuessBolean = true;
      resultConter++;
      break;
    }
  }

  if(footballerGuessBolean === true){
    break;
  }
  else{
    alert('Wrong answer. Try again.');
  }
}

if(footballerGuessBolean === true)
{
  alert('Congratulatins! You guessed one of my favorite footballer correctly. Here is a list of my favortie 7 footballers. ' + favoriteFootballers);
} else {
  alert('Game over. You didn\'t guess any of my favorite footballers :( .  Here is a list of my favortie 7 footballers. ' + favoriteFootballers);
}


alert('Your result is: ' + resultConter + ' out of 7');
