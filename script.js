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
let randomWord = "";
function startGame() {
  randomWord = randomWordGen();
  console.log(randomWord);
  clearTable();
}
function wordGame() {
  const inputWord = document.querySelector(".inputValue").value.toUpperCase();
  if (inputWord != "" && randomWord != "") {
    checkWord(randomWord, inputWord);
  } else {
    alert("Please press start button and give input to start ");
  }
}

function randomWordGen() {
  const charachters = WORDS;
  const randomNumber = Math.round(Math.random() * charachters.length);
  return (randomWord = charachters[randomNumber]);
}

function checkWord(randomword, inputWord) {
  if (randomword == inputWord) {
    addWord(randomword, inputWord);
    
     
     return 
  }
  addWord(randomword, inputWord);
  setTimeout(() => {
    maxReach(currentRow, randomword);
    
  }, 4000);
  
}

function addWord(randomword, inputWord) {
  const characters = inputWord.split("");
  const rows = document.querySelectorAll(".table tr");
  if (currentRow <= rows.length) {
    const currentTableRow = rows[currentRow];
    const color = matchColor(randomword, inputWord);
    characters.forEach((char, index) => {
      if (index < 5) {
        currentTableRow.querySelectorAll("td")[index].textContent = char;
        currentTableRow.querySelectorAll("td")[index].bgColor = color[index];
      }
    });
    currentRow++;
  }
  const clearinput = document.querySelector(".inputValue");
  clearinput.value = "";
}

function matchColor(randomWord, inputWord) {
  let colors = [];
  for (let char of inputWord) {
    const index = randomWord.indexOf(char);
    if (index !== -1) {
      colors.push(randomWord[index] === inputWord[index] ? "green" : "yellow");
    } else {
      colors.push("grey");
    }
  }
  return colors;
}

function clearTable() {
  const rows = document.querySelectorAll(".table tr");
  rows.forEach((row) => {
    row.querySelectorAll("td").forEach((cell) => {
      cell.textContent = "";
      cell.bgColor = "";
    });
  });
  currentRow = 0;
}
function maxReach(currentRow, randomword) {
  if (currentRow >= 5) {
    alert(`max table reached\nWord is ${randomword}.`);
    clearTable();
  }
}
