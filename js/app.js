'use strict';

var name = prompt('Hi there stranger. What is your name?');
alert('Welcome ' + name + '. Let\'s play a guessing game! I\'m going to ask you questions about my self and you need to guess the answers. Let\'s start :) !');

var morningPerson = prompt('Do you think I\'m a morning person?');
if(morningPerson.toLowerCase() === 'yes' || morningPerson.toLowerCase() === 'y'){
  console.log('That is wrong. I\'m not a morning person.');
  alert('That is wrong. I\'m not a morning person.');
} else if(morningPerson.toLowerCase() === 'no' || morningPerson.toLowerCase() === 'n'){
  console.log('That is correct. I\'m not a morning person.');
  alert('That is correct. I\'m not a morning person.');
} else{
  console.log('Wrong input.');
  alert('Wrong input.');
}

var coffee = prompt('Do you think I\'m a coffee addict?');
if(coffee.toLowerCase() === 'yes' || coffee.toLowerCase() === 'y'){
  console.log('That is correct. I\'m a coffee addict.');
  alert('That is correct. I\'m a coffee addict.');
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
}else{
  console.log('Wrong input.');
  alert('Wrong input.');
}
