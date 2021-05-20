var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

// for (var i = 0; i < enemyNames.length; i++) {
//     fight(enemyNames[i]);

// }

var fight = function(enemyName) {

    while(enemyHealth > 0) {
    // Alert players that they are starting the round
    if (playerHealth > 0) { 
    window.alert("Welcome to Tobot Gladiators!" + (i + 1));

    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;
    fight(pickedEnemyName);
    }

    //Alert visitor if they want the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    }
    
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choses to skip
    while(playerHealth > 0 && enemyHealth > 0) {
        fight(enemyName);
    }    
    

    } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confrim player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes, leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbay!");
        // penalty
        playerMoney = playerMoney - 10;
        console.log("playerMongy", playerMoney);
        break;
    }  
    // if no, repeat question
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
  }
   else {
    window.alert("You need to choose a valid option. Try again!");
  }
}
}

// run the fight function
//fight()

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName); 
}

fight()