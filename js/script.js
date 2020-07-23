//spaceName
const app = {};
// array of questions
app.questionsArray = [
    $('.question1'),
    $('.question2'),
    $('.question3'),
    $('.question4'),
    $('.question5'),
];
// generateRandomNumber
function generateRandomNumber() {
    return Math.floor(Math.random() * app.questionsArray.length);
}
// store random number
app.readRandomNumber = generateRandomNumber();
// Looping thr the array
app.displayRandomQuestion = function () {
    for (let i = 0; i < app.questionsArray.length; i++) {
        if (i === app.readRandomNumber) {
            app.questionsArray[i].removeClass('allQuestions')
        }
    }
}
// h1Heading
app.h1Heading = $('h1');
// intro button
app.playButton = $('.introScreenButton').on('click', function() {
    app.displayRandomQuestion();
    $('.submitForm').removeClass('button');
    app.playButton.addClass('button');
    app.h1Heading.text('Select One Answer!!');
});

//Add event Listener
$('form').on('submit', function (e) {
    e.preventDefault();
    // user's answer
    const river = $('input[name=nature]:checked').val();
    //console.log( $('input[name=nature]:checked').val());
    console.log(river );
    const country = $('input[name=geography]:checked').val();
    console.log(country);
    const smallPerson = $('input[name=smallestPerson]:checked').val();
    console.log(smallPerson);
    const nobelPrize = $('input[name=nobelPrize]:checked').val();
    console.log(nobelPrize );
    const computer = $('input[name=computerAlgorithm]:checked').val();
    console.log(computer);
    console.log('working');
    
});

