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
        answer: 'Vatican City'
    },
    {
        question: $('#question3'),
        answer: 'Chandra Bahadur'
    },
    {
        question: $('#question4'),
        answer: 'Malala Yousafzai'
    },
    {
        question: $('#question5'),
        answer: 'Ada Lovelace'
    }
];
app.safeGift = [
    {
        artist: 'Farshad Rezvanian',
        src: 'assets/farshadRezvanian.jpg'
    },
    {
        artist: 'Tim Mossholder',
        src: 'assets/timMossholder.jpg'
    },
    {
        artist: 'Mick Haupt',
        src: 'assets/MickHaupt.jpg'
    },
    {
        artist: 'Sebastian Coman',
        src: 'assets/sebastianComan.jpg'
    },
    {
        artist: 'Wilhelm Gunkel',
        src: 'assets/wilhelmGunkel.jpg'
    }
];
app.supriseGift = [
    {
        source:'Queen/YouTube video',
        url:'assets/weAreTheChampions.mp4'
    },
    {
        source:'YouTube video',
        url:'assets/minionsFunny.mp4'
    },
    {
        source:'YouTube video',
        url:'assets/BabiesPerformed.mp4'
    },
    {
        source:'YouTube video',
        url:'assets/bulldogPuppy.mp4'
    },
    {
        source:'YouTube video',
        url:'assets/funnyAnimalCollectionVideos.mp4'
    }
];
// generateRandomNumber
function generateRandomNumber() {
    return Math.floor(Math.random() * app.questionsArray.length);
}
// store random number
app.readRandomNumber = generateRandomNumber()
//Looping thr the array
app.questionDisplayed;
app.displayRandomQuestion = function () {
    for (let i = 0; i < app.questionsArray.length; i++) {
        if (i === app.readRandomNumber) {
            app.questionDisplayed = app.questionsArray[i].question
            app.questionDisplayed.removeClass('allQuestions')
        }
    }
}
// Find the correct answer 
app.getCorrectAnswer = function () {
    for (let i = 0; i < app.questionsArray.length; i++) {
        let current = app.questionsArray[i];
        if (current.question === app.questionDisplayed) {
            return current.answer;
        }
    }
}
// h1Heading
app.h1Heading = $('h1');
// intro button
app.playButton = $('.introScreenButton').on('click', function () {
    $('.gameRules').addClass('button');
    app.displayRandomQuestion();
    $('.submitForm').removeClass('button');
    app.playButton.addClass('button');
    app.h1Heading.text('Select One Answer!!');
});
//Selecting elements with Vanilla JS
app.buzzerRightAnwer = document.getElementById('buzzerRightAnswer');
app.buzzerWrongAnwer = document.getElementById('buzzerWrongAnswer');
//Add event Listener to the form
$('form').on('submit', function (e) {
    e.preventDefault();
    //Get user's answer to the question
    const userAnwer = app.questionDisplayed.find('input[type=radio]:checked').val(); // UserAnwer
    // Get correct answer
    const correctAnswer = app.getCorrectAnswer();
    // Validating user's choice 
    if (userAnwer === correctAnswer) {
        app.buzzerRightAnwer.play();
        //add backgroungColor to the user answer
        app.h1Heading.text('Pick Your Gift 🎁');
        // hide current question
        app.questionDisplayed.addClass('allQuestions');
        // hide submit button
        $('.submitForm').addClass('button');
        // display a message
        alert('Welcome to Our GiftShop')
        // Select giftShop Buttons
        const supriseGift = $('.supriseGift');
        const safeGift = $('.safeGift');
        // show giftShop buttons
        supriseGift.removeClass('button');
        safeGift.removeClass('button');
        // add an Event listener to the giftShop Buttons
        supriseGift.on('click', () => {
            // diplay a random video
            for (let i = 0; i < app.supriseGift.length; i++) {
                if (i === app.readRandomNumber) {
                    const videoUrl = app.supriseGift[i].url;
                    const videoSource = $('<p>').text(`Video from ${app.supriseGift[i].source}`);
                    const videoTag = $('<video controls>').attr('src', videoUrl);
                    const videoContainer = $('<div>').append(videoTag, videoSource);
                    $('.videoContainer').append(videoContainer);
                    safeGift.off("click");
                    supriseGift.off("click");
                }
            }
        });
        safeGift.on('click', () => {
            // look through the object
            // diplay one image randomly
            for (let i = 0; i < app.safeGift.length; i++) {
                if (i === app.readRandomNumber) {
                    const imgSource = app.safeGift[i].src;
                    const artistName = $('<p>').text(`Photo by ${app.safeGift[i].artist} on Unsplash`);
                    const img = $('<img>').attr('src', imgSource);
                    img.attr('alt', 'outdoor image');
                    const imgContainer = $('<div>').append(img, artistName);
                    const selectedGiftContainer = $('.selectedGift');
                    selectedGiftContainer.append(imgContainer);
                    supriseGift.off("click");
                    safeGift.off("click");
                }
            }
        });
    } else {
        app.buzzerWrongAnwer.play();
        //location.reload();
    }
});

