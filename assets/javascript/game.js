//var randomCrystal;
//var targetNumber;
// var randomNumber;
// var blueCrystal;
// var purpleCrystal;
// var greenCrystal;
// var orangeCrystal;

// $(document).ready(function(){
   // initGame();

//crystals
var crystal = {
    blue:
    {
        name: "blue",
        value: 0
    },

    purple:
    {
        name: "purple",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    orange:
    {
        name: "orange",
        value:0
    }
};

//variables
var currentScore = 0;
var targetScore = 0;

var lose = 0;
var win = 0;

//random number function
var getRandom = function(min, max){
    return Math.floor((Math.random() * max-min +1) + min);
};

//the initialize game function
var initGame = function(){
    //initialize current score to 0
        currentScore = 0;
        //get random number for the target score
        targetNumber = getRandom(19, 120);
        //get random number for the target number
       // targetNumber = Math.floor(Math.random() * 121) + 19;
        console.log(targetNumber);
        $(".targetScore").html(targetNumber);
        $(".userScore").html(currentScore);
};

//get random number for each crystal
    crystal.blue.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.orange.value = getRandom(1,12);

    console.log("blue:" + crystal.blue.value);
    console.log("purple:" + crystal.purple.value);
    console.log("green:" + crystal.green.value);
    console.log("orange:" + crystal.orange.value);

    //function to add the value of the crystals to the current score
    var crystalValue = function(crystal){
        currentScore = currentScore + crystal.value;
        //currentScore = targetNumber + crystal.value;
        $("#userScore").html(currentScore);

        checkWins();
    }

//check to see if you have matched the target score thereby winning ...else losing
var checkWins = function(){
   // var lose = 0;
    if(currentScore > targetNumber){
        alert("you lost");
        console.log("you lost");
        lose++;
        $("#losses").html(lose);
        //restart game
        initGame();
    }
else if(currentScore === targetNumber){
   // var win = 0;
    alert("you won");
    console.log("you won");
    win++;
    $("#win").html(win);
    //restart game
    initGame();
}
};

//reinitialize game
initGame();

//on-click for the crystal images
    $("#blue").on("click", function(){
        crystalValue(crystal.blue);
    console.log(crystalValue);
   // crystalValue();
   // alert("you clicked a blue crystal");
   // var bCrystal = blueCrystal + targetNumber;
   // console.log(bCrystal);
});

$("#green").on("click", function(){
    crystalValue(crystal.green);
    console.log(crystalValue);
   // console.log($(this));
   // alert("you clicked a green crystal");
   //var gCrystal = greenCrystal + targetNumber;
   //console.log(gCrystal);
});

$("#purple").on("click", function(){
    crystalValue(crystal.purple);
    console.log(crystalValue);
   // console.log($(this));
   // alert("you clicked a purple crystal");
   //var pCrystal = purpleCrystal + targetNumber;
   //console.log(pCrystal);
});

$("#orange").on("click", function(){
    crystalValue(crystal.orange);
    console.log(crystalValue);
    //console.log($(this));
   // alert("you clicked a orange crystal");
   //var oCrystal = orangeCrystal + targetNumber;
  // console.log(oCrystal);
});

// });

// var currentScore = 0;
// var targetScore = 0;

// var winScore = 0;
// var loseScore = 0;

// var startGame = function(){
//     var currentScore = 0;
// };



//  var counter = 0;
//  $(".crystal-image").on("click", function(){
//      counter++;
//      alert("you clicked this crystal " + counter + " times!");
//  });

 //This is the number-to-guess header to match the target number.
//$("#number-to-guess").text(targetNumber);

//NEED CODE HERE TO FOR WHEN CLICKING A CRYSTAL ADD THE PREVIOUS RESULT.
//NEED TO ADD THE CRYSTAL CLICKS UNTIL IT EQUALS THE TOTAL SCORE (THE TARGET RANDOM NUMBER)
//WHEN IT IS GREATER THAN THE RANDOM TARGET NUMBER WE DECREMENT THE LOSE COUNTER
//IF IT IS EQUAL WE INCREMENT THE WIN COUNTER


//when a crystal is clicked then add the target number to it.
// $(".crystal-image").on("click", function(){
    
    // var blue = (blueCrystal + targetNumber);
    // var purple = (purpleCrystal + targetNumber);
    // var orange = (orangeCrystal + targetNumber);
    // var green = (greenCrystal + targetNumber);
    // document.write(blue);
    // document.write(purple);
    // document.write(orange);
    // document.write(green);

   // alert("Your new score is: " +);
// })

// $(".crystal-image").on("click", function(){

// });


    





    //updating the index page
   // $("#targetScore").html(targetNumber);
    
    //need one for other score and wins etc


// var targetArray = [];
// for(var i=0; i<4; i++){
    //get random number for each crystal
    // randomNumber = Math.floor(Math.random() * 13) + 1;
    // console.log(randomNumber);
    // targetArray.push(randomNumber);
    // var blueCrystal = targetArray[0];
    // var purpleCrystal = targetArray[1];
    // var orangeCrystal = targetArray[2];
    // var greenCrystal = targetArray[3];
    // document.write(blueCrystal);
    // document.write(purpleCrystal);
    // document.write(orangeCrystal);
    // document.write(greenCrystal);
    //console.log(targetArray);
   // document.write(targetArray[0], targetArray[1], targetArray[2], targetArray[3]);
// };
    //get random number for the target number
    // targetNumber = Math.floor(Math.random() * 121) + 19;
    // console.log(targetNumber);
    // document.write(targetNumber);


    // var blue = (blueCrystal + targetNumber);
    // document.write(blue);
    
   // document.getElementById("randomNumber").innerHTML = randomNumber;
    
//     for(var i=0; i<randomNumber.length; i++){
//         //if();
//     };

//initialize the start of the game