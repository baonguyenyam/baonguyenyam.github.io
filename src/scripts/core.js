const svgAnimation = () => {

    // var path = document.querySelectorAll('#home-madelayout svg path');
    // path.forEach(function (path, index) {
    //     if (index === 0) {
    //         console.log(path);
    //     }
        // var length = path.getTotalLength();
        // if (index === 0) {
        //     path.style.strokeDasharray = length;
        //     path.style.strokeDashoffset = length;
        //     path.style.stroke = '#fff';
        //     path.getBoundingClientRect();
        //     path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
        //     path.style.strokeDashoffset = '0';
        //     path.classList.add('animate');
        // }
    // });

    // var textSecondAnimation = () => {
    //     let words = document.querySelectorAll("#home-madelayout .madeinfo p");
    //     words.forEach(word => {
    //         word.classList.add("animate");
    //     });
    // }
    // var textAnimation = () => {
    //     let words = document.querySelectorAll("#home-madelayout .madeinfo .word");
    //     words.forEach(word => {
    //         let letters = word.textContent.split("");
    //         word.textContent = "";
    //         letters.forEach(letter => {
    //             let span = document.createElement("div");
    //             span.textContent = letter;
    //             span.className = "letter";
    //             word.append(span);
    //         });
    //     });
    //     let currentWordIndex = 0;
    //     let maxWordIndex = words.length - 1;
    //     words[currentWordIndex].style.opacity = "1";
    //     let rotateText = () => {
    //         let currentWord = words[currentWordIndex];
    //         let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    //         // rotate out letters of current word
    //         Array.from(currentWord.children).forEach((letter, i) => {
    //             setTimeout(() => {
    //                 letter.className = "letter out";
    //             }, i * 80);
    //         });
    //         // reveal and rotate in letters of next word
    //         nextWord.style.opacity = "1";
    //         Array.from(nextWord.children).forEach((letter, i) => {
    //             letter.className = "letter behind";
    //             setTimeout(() => {
    //                 letter.className = "letter in";
    //             }, 340 + i * 80);
    //         });
    //         currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    //     };
    //     rotateText();
    //     // setInterval(rotateText, 4000);
    // }

    // // var svg = document.querySelector('#home-madelayout svg');
    // var path = document.querySelectorAll('#home-madelayout svg path');
    // path.forEach(function (path, index) {
    //     var length = path.getTotalLength();
    //     if (index === 0) {
    //         path.style.strokeDasharray = length;
    //         path.style.strokeDashoffset = length;
    //         path.style.stroke = '#fff';
    //         path.getBoundingClientRect();
    //         path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    //         path.style.strokeDashoffset = '0';
    //         path.classList.add('animate');
    //     }
    // });
    // setTimeout(function () {
    //     path.forEach(function (path, index) {
    //         if (index !== 0) {
    //             path.classList.add('animate');
    //         }
    //     });
    // }, 1800);
    // // setInterval(() => {
    // //     path.forEach(function (path, index) {
    // //         if (index !== 0) {
    // //             path.classList.remove('animate');
    // //             setTimeout(function () {
    // //                 path.classList.add('animate');
    // //             }, 100);
    // //         }
    // //     });
    // // }, 10000);
    // setTimeout(function () {
    //     textAnimation();
    // }, 3000);
    // setTimeout(function () {
    //     textSecondAnimation();
    // }, 5000);
}
export default svgAnimation;