'use strict'; //highlights any mistakes made with variables
console.log('js is linked');

alert('Hello! Let\'s play a guessing game to get to know me better. Click OK and let\'s get started!');

//Question 1, my siblings
var questionQ1 = 'First question: Am I an only child? [Yes or No]';
var detailsQ1 = 'I have a younger brother Eric.  He and I grew up battling each other on the N64, trading blows on Golden Eye and Mario Kart.  Click OK to go to the next question!';
var yesQ1 =  'Actually, ' + detailsQ1;
var noQ1 =  'Great guess! ' + detailsQ1;
var response1 = [yesQ1, noQ1];
var validUserResponsesQ1 = ['yes', 'y', 'no', 'n'];
var correctAnswerQ1 = 1; //no

//Question 2, my age
var questionQ2 = 'Next up: Am I in my 60\'s? [Yes or No]';
var detailsQ2 = 'I still have two and a half decades before I hit my golden years! During that time I hope to run a full marathon, have kids, and learn how to code! Click OK to go to the next question!';
var yesQ2 = 'Dang I better start breaking out that Botox! ' + detailsQ2;
var noQ2 =  'Good answer, ' + detailsQ2;
var response2 = [yesQ2, noQ2];
var validUserResponsesQ2 = ['yes', 'y', 'no', 'n'];
var correctAnswerQ2 = 1; //no

//Question 3, basketball
var questionQ3 = 'Ok let\'s talk sports! Do I play basketball [Yes or No]';
var detailsQ3 = 'I still play but these legs have lost some bounce and half a step since I hit my thirties.  Most of my buddies have traded their basketball shoes for beers, maybe they\'re onto something! Click OK to go to the next question!';
var yesQ3 = detailsQ3;
var noQ3 = detailsQ3;
var response3 = [yesQ3, noQ3];
var validUserResponsesQ3 = ['yes', 'y', 'no', 'n'];
var correctAnswerQ3 = 0; //yes

//Question 4, Army
var questionQ4 = 'Have I ever served in the Armed Forces? [Yes or No]';
var detailsQ4 = 'I\'ve been a Combat Engineer in the U.S. Army Reserves for the last 15 years.  Had the opportunity to serve as a junior enlisted Soldier, a NCO, and an Officer both stateside and oversees. Click OK to go to the next question!';
var yesQ4 =  'Good guess! ' + detailsQ4;
var noQ4 = 'Actually I have. ' + detailsQ4;
var response4 = [yesQ4, noQ4];
var validUserResponsesQ4 = ['yes', 'y', 'no', 'n'];
var correctAnswerQ4 = 0; //yes

//Question 5, dog
var questionQ5 = 'Here we go, now a tough one: Is my dog\'s name Otis? [Yes or No]';
var detailsQ5 = 'Trick question! I don\'t have a dog but my family had two dogs growing up and I would love to adopt a golden retriever! Click OK to go to the next question!';
var yesQ5 = detailsQ5;
var noQ5 = detailsQ5;
var response5 = [yesQ5, noQ5];
var validUserResponsesQ5 = ['yes', 'y', 'no', 'n'];
var correctAnswerQ5 = 3; //trick question, they'll get a point either way

//Question 6, favorite #
var questionQ6 = 'Ok, let\'s see if you can guess my favorite number! Don\'t worry if you can\'t get it on the first try, you\'ll have four chances :).';
var detailsQ6 = 'That was my playing number throughout my AAU and high school basketball days. Click OK to go to the last question!';
var yesQ6 = 'Nice Job! ' + detailsQ6;
var noQ6 = 'Oh well this was a tough one, the answer is 33! ' + detailsQ6;
var response6 = [yesQ6, noQ6];
var correctAnswerQ6 = 33;

//Question 7, cities lived in
var questionQ7 = 'Last one! I\'ve lived in four cities outside the PNW, can you name one of them? I\'ll give you six guesses this time!';
var detailsQ7 = 'I\'ve called St. Roberts, Baghdad, Devil\'s Lake, and Ramadi home but none of them have the same feel to me as Seattle.';
var yesQ7 = 'Nailed it, I\'m impressed! ' + detailsQ7;
var noQ7 = 'No worries, they\'re some pretty obscure places! ' + detailsQ7;
var response7 = [yesQ7, noQ7];
var correctAnswerQ7 = ['st. roberts', 'baghdad', 'devil\'s lake', 'ramadi'];

//Final Score
var points = 0;
var score0to2 = 'Better luck next time!';
var score3to5 = 'Wait a second, are you sure we\'re not already friends?';
var score6to7 = 'OK, you\'re officially entering stalker status!!';
var responseScore = [score0to2, score0to2, score0to2, score3to5, score3to5, score3to5, score6to7, score6to7];

//Global Arrays
var questions = [questionQ1, questionQ2, questionQ3, questionQ4, questionQ5, questionQ6, questionQ7];
var responses = [response1, response2, response3, response4, response5, response6, response7, responseScore];
var correctAnswers = [correctAnswerQ1, correctAnswerQ2, correctAnswerQ3, correctAnswerQ4, correctAnswerQ5, correctAnswerQ6, correctAnswerQ7];
var validUserResponses = [validUserResponsesQ1, validUserResponsesQ2, validUserResponsesQ3, validUserResponsesQ4, validUserResponsesQ5];
var answers = [];

//Function: Valid Responses
function isUserResponseValid(userResponse){
if (validUserResponses[i].includes(userResponse)){
        return isValid = true;
    }else{
        alert('Whoops! Please enter \'Yes\', \'No\', \'Y\', or \'N\'');
        i = i - 1;
        return isValid = false;
        }
    }

//Process: Questions 1-5
var isValid = false;

for(var i = 0; i < 5; i++){
    answers[i] = prompt(questions[i]).toLowerCase();
    isUserResponseValid(answers[i]);

    if (isValid){ //using just isValid is the same as using isValid == true, thanks Carlos!
        console.log('User\'s response to Q' + (i + 1) + ': ' + answers[i]);
        if (answers[i] === 'yes' || answers[i] === 'y'){
            alert(responses[i][0]);
            answers[i] = 0;
        }else{
            alert(responses[i][1]);
            answers[i] = 1;
        }
            if (answers[i] === correctAnswers[i]){
            points = points + 1;
        //Console.log('Current points earned: ' + points);
            }
        }
}

//Process: Question 6
var j = 0;
var attemptsAllowedQ6 = 4;
var messageQ6 = questions[5];

do{
    answers[5] = parseInt(prompt(messageQ6));
    j++;
    console.log('User\'s response to Q6, attempt ' + (j) + ': ' + answers[5]);

    if (answers[5] === correctAnswers[5]){
        alert(responses[5][0]);
        points = points + 1;
        break;
    }
    if (answers[5] < correctAnswers[5]){
        messageQ6 = 'Give it another shot, this time try something higher! Remaining attempts: ' + (attemptsAllowedQ6-j);
    }
    if (answers[5] > correctAnswers[5]){
        messageQ6 = 'Too high, try something a little lower! Remaining attempts: ' + (attemptsAllowedQ6-j);
    }
    if (j === attemptsAllowedQ6){
        alert(responses[5][1]);
    }
}while (answers[5] !== correctAnswers[5] && j < attemptsAllowedQ6);

//Process: Question 7
var k = 0;
var attemptsAllowedQ7 = 6;
var messageQ7 = questions[6];

do{
    answers[6] = prompt(messageQ7).toLowerCase();
    k++;
    console.log('User\'s response to Q7, attempt ' + (k) + ': ' + answers[6]);

    if (correctAnswers[6].includes(answers[6])){
        alert(responses[6][0]);
        points = points + 1;
        break;
    }else{
        messageQ7 = 'Nope, keep trying! Remaining attempts: ' + (attemptsAllowedQ7-k);
        }
    if (k === attemptsAllowedQ7){
            alert(responses[6][1]);
    }
}while (!correctAnswers[6].includes(answers[6]) && k < attemptsAllowedQ7);

//Process: Final Score
points = points + 1; //gives the user a point for Q5, the trick question
var messageScore;
messageScore = 'You scored: ' + points + ' out of 7! ' + responses[7][points] + 'Thanks for playing my guessing game, click OK to go to checkout my about me page!';
alert(messageScore);