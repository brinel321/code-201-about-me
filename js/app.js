'use strict';
console.log('js is linked');
alert('Hello! Let\'s play a guessing game to get to know me better. Click OK and let\'s get started!');

//Question 1, my siblings
var questionQ1 = 'First question: Am I an only child? [Yes or No]';
var responseQ1 = prompt(questionQ1).toLowerCase();
var aboutQ1 = 'I have a younger brother Eric.  He and I grew up battling each other on the N64, trading blows on Golden Eye and Mario Kart.  Click OK to go to the next question!'
console.log('User\'s response to Q1: ' + responseQ1);
if (responseQ1 == 'yes' || responseQ1 == 'y'){
    alert('Great guess! ' + aboutQ1);
}else{
    alert('Actually ' + aboutQ1);
}

//Question 2, my age
var questionQ2 = 'Next up: Am I in my 60\'s? [Yes or No]';
var responseQ2 = prompt(questionQ2).toLowerCase();
var aboutQ2 = 'I still have two and a half decades before I hit my golden years! During that time I hope to run a full marathon, have kids, and learn how to code! '
console.log('User\'s response to Q2: ' + responseQ2);
if (responseQ2 == 'no' || responseQ2 == 'n'){
    alert('Good answer, ' + aboutQ2);
}else{
    alert('Dang I better start breaking out that Botox! ' + aboutQ2);
}

//Question 3, basketball
var questionQ3 = 'Ok let\'s talk sports! Do I play basketball [Yes or No]';
var responseQ3 = prompt(questionQ3).toLowerCase();
var aboutQ3 = 'I still play but these legs have lost some bounce and half a step since I hit my thirties.  Most of my buddies have traded their basketball shoes for beers, maybe they\'re onto something! Click OK to go to the next question!'
console.log('User\'s response to Q3: ' + responseQ3);
alert(aboutQ3);

//Question 4, Army
var questionQ4 = 'Have I ever served in the Armed Forces? [Yes or No]';
var responseQ4 = prompt(questionQ4).toLowerCase();
var aboutQ4 = 'I\'ve been a Combat Engineer in the U.S. Army Reserves for the last 15 years.  Had the opportunity to serve as a junior enlisted Soldier, a NCO, and an Officer both stateside and oversees. Click OK to go to the last question!'
console.log('User\'s response to Q4: ' + responseQ4);
if (responseQ4 == 'no' || responseQ4 == 'n'){
    alert('Actually I have. ' + aboutQ4);
}else{
    alert('Good guess! ' + aboutQ4);
}

//Question 5, dog
var questionQ5 = 'Here we go, last one: Is my dog\'s name Otis? [Yes or No]';
var responseQ5 = prompt(questionQ5).toLowerCase();
var aboutQ5 = 'Trick question! I don\'t have a dog but my family had two dogs growing up and I would love to adopt a golden retriever! Thanks for playing my guessing game, click OK to go to checkout my about me page!'
console.log('User\'s response to Q5: ' + responseQ4);
alert(aboutQ5);
