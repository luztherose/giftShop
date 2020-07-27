//spaceName
const giftApp = {};

// giftShop Buttons
giftApp.safeGift = [
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

giftApp.userName;

giftApp.supriseGift = [
    {
        source: 'Queen/YouTube',
        url: 'assets/weAreTheChampions.mp4'
    },
    {
        source: 'YouTube',
        url: 'assets/minionsFunny.mp4'
    },
    {
        source: 'YouTube',
        url: 'assets/minionsFunny.mp4'
    },
    {
        source: 'YouTube',
        url: 'assets/bulldogPuppy.mp4'
    },
    {
        source: 'YouTube',
        url: 'assets/funnyAnimalCollectionVideos.mp4'
    }
];

giftApp.setupSupriseGiftButton = function ($supriseGiftButton, $safeGiftButton) {
    $supriseGiftButton.on('click', () => {
        // diplay a random video
        for (let i = 0; i < giftApp.supriseGift.length; i++) {
            if (i === giftApp.readRandomNumber) {
                const videoUrl = giftApp.supriseGift[i].url;
                const videoSource = $('<p>').text(`Video from ${giftApp.supriseGift[i].source}`);
                const videoTag = $('<video controls>').attr('src', videoUrl);
                const videoContainer = $('<div>').append(videoTag, videoSource);
                const videoAppendContainer = $('.videoContainer');
                videoAppendContainer.removeClass('nonDisplay')
                videoAppendContainer.append(videoContainer);
                $safeGiftButton.off("click");
                $supriseGiftButton.off("click");
            }
        }
    });
}

giftApp.setupSafeGiftButton = function ($supriseGiftButton, $safeGiftButton) {
    $safeGiftButton.on('click', () => {
        // diplay one image randomly
        for (let i = 0; i < giftApp.safeGift.length; i++) {
            if (i === giftApp.readRandomNumber) {
                const imgSource = giftApp.safeGift[i].src;
                const artistName = $('<p>').text(`Photo by ${giftApp.safeGift[i].artist} on Unsplash`);
                const img = $('<img>').attr('src', imgSource);
                img.attr('alt', 'outdoor image');
                const imgContainer = $('<div>').append(img, artistName);
                const selectedGiftContainer = $('.selectedGift');
                selectedGiftContainer.removeClass('nonDisplay');
                selectedGiftContainer.append(imgContainer);
                $supriseGiftButton.off("click");
                $safeGiftButton.off("click");
            }
        }
    });
}

giftApp.showGiftShop = function () {
    giftApp.$screenTittle.text('Pick Your Gift 🎁');
    // hide current question
    giftApp.questionDisplayed.addClass('allQuestions');
    // hide submit button
    $('.submitForm').addClass('button');
    // display a message
    alert(`${giftApp.userName}, welcome to our 𝔾ift 𝕊hop! 🛍`);
    // Select giftShop Buttons
    const $supriseGiftButton = $('.supriseGift');
    const $safeGiftButton = $('.safeGift');
    // show giftShop buttons
    $supriseGiftButton.removeClass('button');
    $safeGiftButton.removeClass('button');
    // add an Event listener to the giftShop Buttons
    giftApp.setupSupriseGiftButton($supriseGiftButton, $safeGiftButton);
    giftApp.setupSafeGiftButton($supriseGiftButton, $safeGiftButton);
}

giftApp.setupWinGiftButton = function () {
    // Add event Listener to the form
    $('form').on('submit', function (e) {
        e.preventDefault();
        const userAnwer = giftApp.questionDisplayed.find('input[type=radio]:checked').val();
        const correctAnswer = giftApp.getCorrectAnswer();
        // Validating user's choice 
        if (userAnwer === correctAnswer) {
            giftApp.buzzerRightAnwer.play();
            giftApp.showGiftShop();
        } else {
            giftApp.buzzerWrongAnwer.play();
        }
    });
}

giftApp.generateRandomNumber = function () {
    return Math.floor(Math.random() * giftApp.questionsArray.length);
}

giftApp.setupPlayButton = function () {
    giftApp.$playButton = $('.introScreenButton').on('click', function () {
        giftApp.userName = prompt("What's your name?");
        $('.gameRules').addClass('button');
        giftApp.displayRandomQuestion();
        $('.submitForm').removeClass('button');
        giftApp.$playButton.addClass('button');
        giftApp.$screenTittle.text('Select One Answer!!');
    });
}

// Looping thr the questionsArray
giftApp.displayRandomQuestion = function () {
    for (let i = 0; i < giftApp.questionsArray.length; i++) {
        if (i === giftApp.readRandomNumber) {
            giftApp.questionDisplayed = giftApp.questionsArray[i].question
            giftApp.questionDisplayed.removeClass('allQuestions')
        }
    }
}

// Find the correct answer 
giftApp.getCorrectAnswer = function () {
    for (let i = 0; i < giftApp.questionsArray.length; i++) {
        let current = giftApp.questionsArray[i];
        if (current.question === giftApp.questionDisplayed) {
            return current.answer;
        }
    }
}

giftApp.init = function () {
    giftApp.questionsArray = [
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

    giftApp.readRandomNumber = giftApp.generateRandomNumber();
    giftApp.questionDisplayed;
    giftApp.$screenTittle = $('h1');

    giftApp.setupPlayButton()

    // Selecting elements with Vanilla JS to use the play method
    // https://stackoverflow.com/a/4647069/12465920
    giftApp.buzzerRightAnwer = document.getElementById('buzzerRightAnswer');
    giftApp.buzzerWrongAnwer = document.getElementById('buzzerWrongAnswer');

    // Add event Listener to the form
    giftApp.setupWinGiftButton()
}
// document ready
$(function () {
    giftApp.init();
});
