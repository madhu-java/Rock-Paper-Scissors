const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'scissors' ||userInput === 'paper' || userInput === 'bomb') {
      return userInput;
    }
    else
    {
      console.log('Invalid choice');
    }
  };
  
  function getComputerChoice() {
    let option = Math.floor(Math.random() * 3);
  
    switch(option) {
      case 0:
         return 'rock';
         break;
       case 1:
          return 'scissors';
          break;
        case 2:
          return 'paper';
          break; 
    }
  }
  
  function determineWinner(userChoice , computerChoice) {
      
      //if userchoice is bomb
    if(userChoice === 'bomb') {
      return 'YOU WON!!!';
    } 
    //checking if it's a tie
    if(userChoice === computerChoice) {
      return `oh!!! it's a tie`;
    }
  //If the user choice is rock
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return `COMPUTER WON!!!!
         you are ${userChoice} and computer is ${computerChoice}. `;
      }
      else{
      return `YOU WON!!!!
       you are ${userChoice} and computer is ${computerChoice}.`;
         }
     }
  
  //if the user choice is paper
  if(userChoice === 'paper') {
    if(computerChoice === 'rock') {
      return `YOU WON!!!!
       you are ${userChoice} and computer is ${computerChoice}.`;
    }
    else {
      return `COMPUTER WON!!!!
        you are ${userChoice} and computer is ${computerChoice}. `;
    }
  }
  //if the user choice is scissors
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return `COMPUTER WON!!!
       you are ${userChoice} and computer is ${computerChoice}. `;
    }
    else {
      return `YOU WON!!!
       you are ${userChoice} and computer is ${computerChoice}.`;
     }
   }
  }
  
  //Play game
  
  function playGame() {
    const userChoice  = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`Your choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    const winner = determineWinner(userChoice,computerChoice);
    console.log(winner);
  }
  playGame();
  
  
  
  