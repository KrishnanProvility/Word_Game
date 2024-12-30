const WORDS = [
  "AGENT",
  "WORLD",
  "ABOUT",
  "HEART",
  "WATER",
  "SIXTY",
  "BOARD",
  "MONTH",
  "MUSIC",
  "PARTY",
  "PIANO",
  "MOUTH",
  "WOMAN",
  "SUGAR",
  "AMBER",
  "DREAM",
  "LAUGH",
  "TIGER",
  "EARTH",
  "MONEY",
  "WORDS",
  "SMILE",
  "LEMON",
  "SOUTH",
  "AFTER",
  "STONE",
  "THING",
  "LIGHT",
  "STORY",
  "POWER",
  "TODAY",
  "RANGE",
  "PEARL",
  "VENOM",
  "PROXY",
  "ROUND",
  "HOVER",
  "CANDY",
  "ABOVE",
  "PHONE",
  "OTHER",
  "SMART",
  "BLACK",
  "MAGIC",
  "FRUIT",
  "RADIO",
  "ROYAL",
  "HONEY",
  "FLAKE",
  "SOUND",
];
let currentRow = 0;
let randomWord='';
function startGame() {
    randomWord = randomWordGen();
    console.log(randomWord);
    clearTable();
}
function wordGame() {
const inputWord = document.querySelector(".inputValue").value.toUpperCase();

checkWord(randomWord,inputWord)

  
}

function randomWordGen() {
  const charachters = WORDS;
    const randomNumber = Math.round(Math.random() * charachters.length);
    return randomWord =charachters[randomNumber] ;
}


function checkWord(randomword,inputWord){
if(randomword==inputWord){
    clearTable();
    return alert(`Word is ${randomword}.\nYou answered correctly. `)
}
else
{
addWord(inputWord);
}
}
function clearTable() {
    const rows = document.querySelectorAll('.table tr');
    rows.forEach(row => {
        row.querySelectorAll('td').forEach(cell => {
            cell.textContent = ''; 
        });
    });
    currentRow = 0;
}

function addWord(inputWord){
    const characters = inputWord.split("");
    const rows = document.querySelectorAll(".table tr");
    if (currentRow < rows.length) {
        const currentTableRow = rows[currentRow];
        characters.forEach((char, index) => {
          if (index < 5) {
            currentTableRow.querySelectorAll("td")[index].textContent = char;
          }
        });
        currentRow++;
      }
      if(currentRow>=6)
        alert(`Maximum number of rows reached!\nWord is ${randomWord}.\nYou answered correctly. `);
    
    const clearinput = document.querySelector(".inputValue");
    clearinput.value = '';
}
