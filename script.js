const WORDS = [
  "AGENT", "WORLD", "ABOUT", "HEART", "WATER", "SIXTY", "BOARD", "MONTH", 
  "MUSIC", "PARTY", "PIANO", "MOUTH", "WOMAN", "SUGAR", "AMBER", "DREAM",
  "LAUGH", "TIGER", "EARTH", "MONEY", "WORDS", "SMILE", "LEMON", "SOUTH",
  "AFTER", "STONE", "THING", "LIGHT", "STORY", "POWER", "TODAY", "RANGE",
  "PEARL", "VENOM", "PROXY", "ROUND", "HOVER", "CANDY", "ABOVE", "PHONE",
  "OTHER", "SMART", "BLACK", "MAGIC", "FRUIT", "RADIO", "ROYAL", "HONEY",
  "FLAKE", "SOUND"
];

let currentRow = 0;
let randomWord = "";

function startGame() {
  randomWord = randomWordGen();
  console.log("Word to guess:", randomWord);
  clearTable();
}

function wordGame() {
  const inputElement = document.querySelector(".inputValue");
  const inputWord = inputElement.value.toUpperCase();
  
  if (inputWord.length !== 5) {
    alert("Please enter a 5-letter word.");
    return;
  }
  
  if (randomWord === "") {
    alert("Press Start to begin the game!");
    return;
  }

  checkWord(randomWord, inputWord);
  inputElement.value = "";
}

function randomWordGen() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function checkWord(randomword, inputWord) {
  addWord(randomword, inputWord);
  
  if (randomword === inputWord) {
    setTimeout(() => alert("Congratulations! You guessed it!"), 500);
    return;
  }

  if (currentRow >= 5) {
    setTimeout(() => {
      alert(`Game Over! The word was: ${randomword}`);
      clearTable();
    }, 1000);
  }
}

function addWord(randomword, inputWord) {
  const characters = inputWord.split("");
  const rows = document.querySelectorAll(".table tr");

  if (currentRow < rows.length) {
    const currentTableRow = rows[currentRow];
    const colors = matchColor(randomword, inputWord);
    
    characters.forEach((char, index) => {
      const cell = currentTableRow.querySelectorAll("td")[index];
      cell.textContent = char;
      cell.style.backgroundColor = colors[index]; // FIXED: Correct way to set colors
    });

    currentRow++;
  }
}

function matchColor(randomWord, inputWord) {
  let colors = new Array(5).fill("grey");
  let usedLetters = new Array(5).fill(false);

  // First pass: Mark correct positions (green)
  for (let i = 0; i < 5; i++) {
    if (inputWord[i] === randomWord[i]) {
      colors[i] = "green";
      usedLetters[i] = true;
    }
  }

  // Second pass: Mark misplaced letters (yellow)
  for (let i = 0; i < 5; i++) {
    if (colors[i] === "green") continue;
    
    let foundIndex = randomWord.indexOf(inputWord[i]);
    
    while (foundIndex !== -1) {
      if (!usedLetters[foundIndex]) {
        colors[i] = "yellow";
        usedLetters[foundIndex] = true;
        break;
      }
      foundIndex = randomWord.indexOf(inputWord[i], foundIndex + 1);
    }
  }

  return colors;
}

function clearTable() {
  const rows = document.querySelectorAll(".table tr");
  rows.forEach(row => {
    row.querySelectorAll("td").forEach(cell => {
      cell.textContent = "";
      cell.style.backgroundColor = "";
    });
  });
  currentRow = 0;
}
