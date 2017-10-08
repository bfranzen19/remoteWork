/* this application allows the user to select from rock, paper, or scissors and, upon hitting the play button, it compares a random choice from the computer of rock, paper, or scissors and announces a winner via an alert */

// sets the computer selection
  function randoNumbo() {
    let compSel = Math.floor(Math.random() * 3 + 1);
      switch(compSel){
        case 1:
          return "rock";
          break;
        case 2:
          return "paper";
          break;
        case 3:
          return "scissors";
          break;
      }
  }

/* sets the computer selection to the compSel variable and sets the
 user selection to undefined */
  let compSel = randoNumbo();
  let userSel;

// sets the user selection
  function setUserSel(option) {
    userSel = option;
    return userSel; //new code starts after this line
  }

// compares the user and computer selection to determine a winner
  function compareChoices(userSel, compSel) {
    if(userSel == undefined) {
      return "must select the rock, paper, or scissors";
    }

    if(userSel == compSel) {
      return "tie";
    }

    if(userSel == "rock") {
      if(compSel == "paper") {
        return "lose";
      } else {
        return "win";
      }
    }

    if(userSel == "rock") {
      if(compSel == "scissors") {
        return "win";
      } else {
        return "lose";
      }
    }

    if(userSel == "paper") {
      if(compSel == "scissors") {
        return "lose";
      } else {
        return "win";
      }
    }

    if(userSel == "paper") {
      if(compSel == "rock") {
        return "win";
      } else {
        return "lose";
      }
    }

    if(userSel == "scissors") {
      if(compSel == "rock") {
        return "lose";
      } else {
        return "win";
      }
    }

    if(userSel == "scissors") {
      if(compSel == "paper") {
        return "win";
      } else {
        return "lose";
      }
    } else {
      return "error";
    }
  }

/* takes the user selection, compares it to the computer selection,
and names a winner */
  function letsPlay(userSel, compSel) {
    finalResult = compareChoices(userSel, compSel);
    // print user selection, computer selection, and winner to page
    document.getElementById("result").innerHTML="<p><em><b>RECAP:</b></em><br/>you selected- " + userSel + "<br/> the computer selected- " + compSel +"</p><p><b>you "+ finalResult + "!</b></p>";
    //alert("you " + finalResult + "!");
  }
