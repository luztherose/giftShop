//spaceName
const app = {};
// array of questions
app.questionsArray = [
    {
        question: $('#question1'),
        answer: 'Nile River'
    },
    {
        question: $('#question2'),
        answer:  'Vatican City'
    },
    {
        question: $('#question3'),
        answer:'Chandra Bahadur'
    },
    {
        question: $('#question4'),
        answer:'Malala Yousafzai'
    },
    {
        question: $('#question5'),
        answer:'Ada Lovelace'
    }
];
//console.log(app.questionsArray[0].q1.removeClass('allQuestions'));

// generateRandomNumber
function generateRandomNumber() {
    return Math.floor(Math.random() * app.questionsArray.length);
}
// store random number
app.readRandomNumber = generateRandomNumber()

//Looping thr the array
let questionDisplayed;
app.displayRandomQuestion = function () {
    for (let i = 0; i < app.questionsArray.length; i++) {
        if (i === app.readRandomNumber) {
            questionDisplayed = app.questionsArray[i].question
            questionDisplayed.removeClass('allQuestions')
        }
    }
    console.log(app.readRandomNumber);
    console.log(questionDisplayed);
}
// Find the correct answer 
app.getCorrectAnswer = function() {
    for(let i = 0; i < app.questionsArray.length; i++) {
        let current = app.questionsArray[i];
        if (current.question === questionDisplayed) {
            console.log(current.question);
            console.log(questionDisplayed);
            return current.answer;
        } 
    }
}

// h1Heading
app.h1Heading = $('h1');
// intro button
app.playButton = $('.introScreenButton').on('click', function () {
    app.displayRandomQuestion();
    $('.submitForm').removeClass('button');
    app.playButton.addClass('button');
    app.h1Heading.text('Select One Answer!!');
});

//Add event Listener
$('form').on('submit', function (e) {
    e.preventDefault();
    //Get user's answer to the question
    
    const userAnwer = questionDisplayed.find('input[type=radio]:checked').val(); // UserAnwer
    // Get correct answer
    const correctAnswer = app.getCorrectAnswer();
    // Validating user's choice 
    if(userAnwer === correctAnswer) {
        console.log('you selected the right anwer');
    }else {
        alert('wrong answer');
        location.reload(); 
    }
    // If the user's anwer in correct :
    // then, I will print you selected the right anwer
    // else, I print your anwer was incorrect
});

