// variables for the game

var userTotal= 0; 
var wins= 0;
var losses = 0;


// Selects a random number to be shown at the start of the game
// Number is set to be randomly selected from a range of (19-120)

$(document).ready(function() {
    var random = Math.floor(Math.random()*101+19)


    // Appending random number to the #randomNumber 
    
    $("#randomNumber").text(random);
    

    // Setting up random numbers for each of the four crystals
    // Random number set to be between a range of (1-12)
    
    var num1 = Math.floor(Math.random()*11+1)
    var num2 = Math.floor(Math.random()*11+1)
    var num3 = Math.floor(Math.random()*11+1)
    var num4 = Math.floor(Math.random()*11+1)


    
  $("#wins").text(wins);
  $("#losses").text(losses);



  function reset(){
        random = Math.floor(Math.random()*101+19);
        console.log(random)
        $("#randomNumber").text(random);
        num1 = Math.floor(Math.random()*11+1);
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
        userTotal= 0;
        $("#totalScore").text(userTotal);
        } 


  function winsTotal() {
  alert("You won!");
    wins++; 
    $("#wins").text(wins);
    reset();
  }



  function lossesTotal() {
  alert ("You lose!");
    losses++;
    $("#losses").text(losses);
    reset()
  }

  //sets up .onclick for each crystal; wins/losses conditions


    $("#one").on ("click", function() {
      userTotal = userTotal + num1;
      console.log("New userTotal = " + userTotal);
      $("#totalScore").text(userTotal); 
      
          if (userTotal == random) {
            winsTotal();
          }
          else if ( userTotal > random) {
            lossesTotal();
          }   
    })  

    $("#two").on ("click", function() {
      userTotal = userTotal + num2;
      console.log("New userTotal = " + userTotal);
      $("#totalScore").text(userTotal); 

          if (userTotal == random) {
            winsTotal();
          }
          else if ( userTotal > random) {
            lossesTotal();
          } 
    })  

    $("#three").on ("click", function() {
      userTotal = userTotal + num3;
      console.log("New userTotal = " + userTotal);
      $("#totalScore").text(userTotal);

            if (userTotal == random) {
            winsTotal();
          }
          else if ( userTotal > random) {
            lossesTotal();
          } 
    })  
    
    $("#four").on ("click", function() {
      userTotal = userTotal + num4;
      console.log("New userTotal = " + userTotal);
      $("#totalScore").text(userTotal); 

            if (userTotal == random) {
            winsTotal();
          }
          else if (userTotal > random) {
            lossesTotal();
          }
    });   
  }); 