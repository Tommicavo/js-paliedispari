console.log("js ok");

function isPalindrome(word){
    let start = 0;
    let end = word.length - 1;
    while (start < end){
        if (word[start] !== word[end]) return false;
        start++;
        end--;
    }
    return true;
}
console.log("Is palindrome: ", isPalindrome("aerea"));
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEven(num){
    if (num % 2) return "dispari";
    return "pari";
}

const minNum = 1;
const maxNum = 5;
let playerTeam;
let playerNum;

// Player turn
do{
    playerTeam = prompt(`Scrivi "pari" o "dispari"`, "pari").trim();
}
while (playerTeam !== "pari" && playerTeam !== "dispari");

do{
    playerNum = parseInt(prompt("Scrivi un numero da 1 a 5").trim());
}
while (isNaN(playerNum) || playerNum < minNum || playerNum > maxNum);

// Pc turn
const pcTeam = playerTeam === "pari" ? "dispari" : "pari";
const pcNum = randomNum(minNum, maxNum);
const sum = playerNum + pcNum;

console.log(`playerTeam: `, playerTeam);
console.log(`playerNum: `, playerNum);
console.log(`pcTeam: `, pcTeam);
console.log(`pcNum: `, pcNum);
console.log(`sum: `, sum);

if (playerTeam === isEven(sum)) console.log("Player won!")
else (console.log("Pc won!"))



