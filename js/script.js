
const questionsArray = [
    $('.question1'), 
    $('.question2'),
    $('.question3'),
    $('.question4'),
    $('.question5'),
];

// console.log(allQuestions);

// generateRandomNumber

function generateRandomNumber() {
    return Math.floor(Math.random() * questionsArray.length);
}
const readRandomNumber = generateRandomNumber();
console.log(readRandomNumber);

// Looping thr the array

for(let i = 0; i < questionsArray.length; i++) {
    if(i === readRandomNumber ) {
        console.log(questionsArray[i]);
        questionsArray[i].removeClass('allQuestions')
        }
    }
    
