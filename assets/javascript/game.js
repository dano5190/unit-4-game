

var goalNum = 0;
var userNum = 0;
var Wins = 0;
var Losses = 0;

var redCrystal = {
    value: 0,
    addToNum: function(){
        userNum = userNum + this.value;
    }
};

var greenCrystal = {
    value: 0,
    addToNum: function(){
        userNum = userNum + this.value;
    }
};

var blueCrystal = {
    value: 0,
    addToNum: function(){
        userNum = userNum + this.value;
    }
};

var yellowCrystal = {
    value: 0,
    addToNum: function(){
        userNum = userNum + this.value;
    }
};

var startGame = function(){
    goalNum = 0;
    userNum = 0;
    $("#user-number").html(userNum);
    goal();
    redCrystal.value = crystalNum();
    greenCrystal.value = crystalNum();
    blueCrystal.value = crystalNum();
    yellowCrystal.value = crystalNum();
  //  setCrystals();
};

var crystalNum = function(){
    var rand = Math.floor(Math.random()*11)+1;

    return rand;
};

var goal = function(){
    var randGoal = Math.floor(Math.random()*101) + 19;

    goalNum = randGoal;
    $("#number-to-guess").html(goalNum);

};

$("#red").on("click", function() {

    console.log("this was clicked");
    userNum += redCrystal.value;
    console.log(userNum);
    $("#user-number").html(userNum);
    if (userNum === goalNum) {
    userWon();
    }

    else if (userNum >= goalNum) {
     userLost();
    }

  });
  $("#green").on("click", function() {
    console.log("this was clicked");
     userNum += greenCrystal.value;
    console.log(userNum);
    $("#user-number").html(userNum);

    if (userNum === goalNum) {
    userWon();
    }

    else if (userNum >= goalNum) {
     userLost();
    }

  });
  
  $("#blue").on("click", function() {

    console.log("this was clicked");
    userNum += blueCrystal.value;
    console.log(userNum);
    $("#user-number").html(userNum);

    if (userNum === goalNum) {
    userWon();
    }

    else if (userNum >= goalNum) {
     userLost();
    }

  });

  $("#yellow").on("click", function() {
    console.log("this was clicked");
    userNum += yellowCrystal.value;
    console.log(userNum);
    $("#user-number").html(userNum);

    if (userNum === goalNum) {
    userWon();
    }

    else if (userNum >= goalNum) {
     userLost();
    }

  });

  var userWon = function(){
    $("#win-or-lose").html("YOU WIN!!!");
    Wins++;
      setTimeout(function() {$("#win-or-lose").html(" ");}, 5000);
      
      $("#wins").html(Wins);
      startGame();
  };

  var userLost = function(){
    $("#win-or-lose").html("YOU LOST!!!");
    Losses++;
    setTimeout(function() {$("#win-or-lose").html(" ");}, 5000);
   
    $("#losses").html(Losses);
    startGame();
};
startGame();