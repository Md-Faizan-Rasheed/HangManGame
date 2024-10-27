// import { document } from 'postcss';
import { arrays } from './array.js'; 
// document.addEventListener("DOMContentLoaded",run());
function run(){
    const { word, hint } = arrays[Math.floor(Math.random() * arrays.length)]; // Randomly select a word and its hint
const cord = word.toUpperCase().split(""); // Convert word to uppercase and split into an array

console.log(word);
console.log(hint);
console.log(cord);
let wlength = cord.length;
let buttons = document.getElementsByTagName("button");
// console.log(buttons);
let shown = document.querySelectorAll('.first');
let count=0;
let gcount=0;
let incorrectUpdate = document.querySelector(".incorrect");
// let upimg = document.querySelector(".img img");
let upimg = document.getElementById("human");
// console.log(upimg);
let gameover= document.querySelector(".gameover");
let gamewin = document.querySelector(".gamewin");
console.log(gameover);
let hinti = document.querySelector(".hint");
hinti.innerText=hint;

shown.forEach(element => {
    if (count < wlength) {
        element.style.visibility = 'visible';
        count++;
        console.log('making visible');
    } else {
        element.style.visibility = 'hidden';
        console.log('hiding');
    }
});

count =0;
console.log(upimg);

    Array.from(buttons).forEach(element => {
        element.addEventListener("click", () => {
            // Check if the button has already been clicked or if it's not a letter
            if (element.disabled || !element.innerText.match(/[A-Z]/)) {
                return;
            }
    
            element.disabled = true; // Disable the button to prevent further clicks
    
            let foundMatch = false;
            const clickedLetter = element.innerText.toUpperCase();
            let fwin = document.querySelector(".fwin");
            cord.forEach((cordValue, i) => {
                if (clickedLetter === cordValue) {
                    foundMatch = true;
                    shown[i].innerText = cordValue;
                    shown[i].style.border = "none";
                    element.style.backgroundColor = "lightblue";
                    count++; // Increment the count of correctly guessed letters
                    console.log(count)
                    console.log(wlength);
                    if (count === wlength) {
                        console.log("Game Win!");
                        let fwin = document.querySelector(".fwin");
                        fwin.innerText=`${word}`
                        gamewin.style.visibility = "visible";
                        fwin.innerText= word;
                    }
                }
            });
    let fcorrect=document.querySelector(".fcorrect");
    // let fwin = document.querySelector(".fwin");
            if (!foundMatch) {
                gcount++;
                incorrectUpdate.innerText = gcount;
                console.log(upimg);
                upimg.src = `hangman-${gcount}.svg`;
                console.log(upimg.src);
                // hangman-0.svg
                element.style.backgroundColor = "lightblue";
                if (gcount >= 6) {
                    console.log("Game is over");
                    gameover.style.visibility = "visible";
                    console.log(word);
                    console.log(fcorrect);
                    fcorrect.innerText=word;
                    // Disable all buttons if game over
                    Array.from(buttons).forEach(btn => btn.disabled = true);
                }
            }
        });
    });
}
run();
const playagain = document.querySelector(".playagain");
let gameover= document.querySelector(".gameover");

// console.log(playagain);
playagain.addEventListener("click",()=>{
location.reload();
})

const playwin= document.querySelector(".playwin");
playwin.addEventListener("click",()=>{
    location.reload();
})

// Array.from(buttons).forEach(element => {
//     element.addEventListener("click", () => {
//         // Check if the button has already been clicked or if it's not a letter
//         if (element.disabled || !element.innerText.match(/[A-Z]/)) {
//             return;
//         }

//         element.disabled = true; // Disable the button to prevent further clicks

//         let foundMatch = false;
//         const clickedLetter = element.innerText.toUpperCase();

//         cord.forEach((cordValue, i) => {
//             if (clickedLetter === cordValue) {
//                 foundMatch = true;
//                 shown[i].innerText = cordValue;
//                 shown[i].style.border = "none";
//                 element.style.backgroundColor = "lightblue";
//                 count++; // Increment the count of correctly guessed letters
//                 console.log(count)
//                 console.log(wlength);
//                 if (count === wlength) {
//                     console.log("Game Win!");
//                     let fwin = document.querySelector(".fwin");
//                     fwin.innerText=`${word}`
//                     gamewin.style.visibility = "visible";
//                 }
//             }
//         });

//         if (!foundMatch) {
//             gcount++;
//             incorrectUpdate.innerText = gcount;
//             upimg.src = `hangman-${gcount}.svg`;
//             element.style.backgroundColor = "lightblue";
//             if (gcount >= 6) {
//                 console.log("Game is over");
//                 gameover.style.visibility = "visible";
//                 // Disable all buttons if game over
//                 Array.from(buttons).forEach(btn => btn.disabled = true);
//             }
//         }
//     });
// });

document.getElementById('callRow').addEventListener('click', function() {
    window.location.href = 'tel:7033384974';
});