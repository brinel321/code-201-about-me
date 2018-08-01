'use strict'; //highlights any mistakes made with variables
console.log('js is linked');

alert('Hello! Let\'s play a guessing game to get to know me better. Click OK and let\'s get started!');

//Question 1, my siblings
var questionQ1 = 'First question: Am I an only child? [Yes or No]';
var detailsQ1 = 'I have a younger brother Eric.  He and I grew up battling each other on the N64, trading blows on Golden Eye and Mario Kart.  Click OK to go to the next question!';
var yesQ1 = 'Great guess! ' + detailsQ1;
var noQ1 = 'Actually, ' + detailsQ1;
var response1 = [yesQ1, noQ1];

//Question 2, my age
var questionQ2 = 'Next up: Am I in my 60\'s? [Yes or No]';
var detailsQ2 = 'I still have two and a half decades before I hit my golden years! During that time I hope to run a full marathon, have kids, and learn how to code! ';
var yesQ2 = 'Dang I better start breaking out that Botox! ' + detailsQ2;
var noQ2 =  'Good answer, ' + detailsQ2;
var response2 = [yesQ2, noQ2];

//Question 3, basketball
var questionQ3 = 'Ok let\'s talk sports! Do I play basketball [Yes or No]';
var detailsQ3 = 'I still play but these legs have lost some bounce and half a step since I hit my thirties.  Most of my buddies have traded their basketball shoes for beers, maybe they\'re onto something! Click OK to go to the next question!';
var yesQ3 = detailsQ3;
var noQ3 = detailsQ3;
var response3 = [yesQ3, noQ3];

//Question 4, Army
var questionQ4 = 'Have I ever served in the Armed Forces? [Yes or No]';
var detailsQ4 = 'I\'ve been a Combat Engineer in the U.S. Army Reserves for the last 15 years.  Had the opportunity to serve as a junior enlisted Soldier, a NCO, and an Officer both stateside and oversees. Click OK to go to the last question!';
var yesQ4 =  'Good guess! ' + detailsQ4;
var noQ4 = 'Actually I have. ' + detailsQ4;
var response4 = [yesQ4, noQ4];

//Question 5, dog
var questionQ5 = 'Here we go, last one: Is my dog\'s name Otis? [Yes or No]';
var detailsQ5 = 'Trick question! I don\'t have a dog but my family had two dogs growing up and I would love to adopt a golden retriever! Thanks for playing my guessing game, click OK to go to checkout my about me page!';
var yesQ5 = detailsQ5;
var noQ5 = detailsQ5;
var response5 = [yesQ5, noQ5];

var questions = [questionQ1, questionQ2, questionQ3, questionQ4, questionQ5];
var responses = [response1, response2, response3, response4, response5];
var answers = [];

for(var i = 0; i < questions.length; i++){
    answers[i] = prompt(questions[i]).toLowerCase();
    console.log('User\'s response to Q' + (i + 1) + ': ' + answers[i]);
    if (answers[i] == 'yes' || answers[i] == 'y'){
        alert(responses[i][0]);
    }else{
        alert(responses[i][1]);
    }
    
}