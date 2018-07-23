$(document).ready(function() {   
    //create variables 
    var StartGame = false;
    var EndGame = false;
    var targetScore = Math.floor(Math.random() * 101) + 19;  //Random for 19-120
    $("#targetScore").text(targetScore);
    var score = 0;
    var wins = 0;
    var loss = 0;
    $("#score").text(score);
    $("#wins").text(wins);
    $("#loss").text(loss);

    //Random for gems 1-12
    var gem1 = Math.floor(Math.random() * 12) + 1;
    // console.log(gem1);
    var gem2 = Math.floor(Math.random() * 12) + 1;
    // console.log(gem2);
    var gem3 = Math.floor(Math.random() * 12) + 1;
    // console.log(gem3);
    var gem4 = Math.floor(Math.random() * 12) + 1;
    // console.log(gem4);

    //Crystal clicks
    //when player clicks on crystal, that amount will be added to the score
    $("#crystal1").click(function() {
        score = score + gem1;
        $("#score").text(score);
        console.log("You got " + score);
        if (score === targetScore) {
            Win();
        }
        else if (score > targetScore) {
            Lose();
        }
    });
    $("#crystal2").click(function() {
        score = score + gem2;
        $("#score").text(score);
        console.log("Your score is " + score);
        if (score === targetScore) {
            Win();
        }
        else if (score > targetScore) {
            Lose();
        }
    });
    $("#crystal3").click(function() {
        score = score + gem3;
        $("#score").text(score);
        console.log("You got " + score);
        if (score === targetScore) {
            Win();
        }
        else if (score > targetScore) {
            Lose();
        }
    });
    $("#crystal4").click(function() {
        score = score + gem4;
        $("#score").text(score);
        console.log("Your score is " + score);
        if (score === targetScore) {
            Win();
        }
        else if (score > targetScore) {
            Lose();
        }
    });

     //if total score matches the random number, they win    
     //if score goes above the number, they lose
    function resetGame() {
        targetScore = Math.floor(Math.random() * 101) + 19;
        $("#targetScore").text(targetScore);
        score = 0;
        // wins = 0;
        // loss = 0;
        gem1 = Math.floor(Math.random() * 12) + 1;
        // console.log(gem1);
        gem2 = Math.floor(Math.random() * 12) + 1;
        // console.log(gem2);
        gem3 = Math.floor(Math.random() * 12) + 1;
        // console.log(gem3);
        gem4 = Math.floor(Math.random() * 12) + 1;
        // console.log(gem4);
    
    }
    //  function WinorLose(event) {
    //      if (score === targetScore) {
    //         alert("You win!");
    //         wins++;
    //         $("#wins").text(wins);
    //         resetGame();
    //     }
    //     else if (score > targetScore) {
    //         alert("You lose!");
    //         loss++;
    //         $("#loss").text(loss);
    //     }
    // }
    function Win() {
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        resetGame();
    }
    function Lose() {
        alert("Sorry! You lose!")
        loss++;
        $("#loss").text(loss);
        resetGame();

    }
 
});