document.addEventListener("DOMContentLoaded", function(){

    // Getting elements from the HTML file
    var h2 = document.getElementById('status');
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var boundary = document.getElementsByClassName('boundary');
    var example = document.getElementsByClassName('example');
    var game = document.getElementById('game');

    // For when boundaries are red
    var red_bounds = false; 

    // A state to keep track if the user has lost
    var lost_state = false;

    // Initializing the score
    var score = 0; 
    
    // On startup code + Events
    h2.innerText += "\nClick on the Score to reset the score to 0."
    start.onclick = reset;
    end.onmouseover = winning;
    example[0].style.textAlign = "center";
    example[0].onclick = restart;
    game.onmouseleave = losing;

    // If the mouse is hovered over the boundaries
    for (var i = 0; i < boundary.length - 1; i++){
        boundary[i].onmouseover = losing;
    }

    // Function for if the mouse got over or inside the boundaries
    function losing(){
        if (red_bounds === false && lost_state === false){
            for (var i = 0; i < boundary.length; i++){
                boundary[i].style.backgroundColor = 'red';
            }
            h2.innerText = 'You Lost! Click on "S" to try again';
            h2.innerText += "\nClick on the Score to reset the score to 0."
            red_bounds = true;
            lost_state = true;
            score_call();
        }
    }

    // Function to reset the game but keep the score
    function reset(){
        for (var i = 0; i < boundary.length; i++){
            boundary[i].style.backgroundColor = '#eeeeee';
        }
        h2.innerText = 'Begin by moving your mouse over the "S".';
        h2.innerText += "\nClick on the Score to reset the score to 0."
        red_bounds = false;
        lost_state = false;
    }

    // Function for when the mouse is hovered over the end
    function winning(){
        if (red_bounds === false && lost_state === false) {
            h2.innerText = "You won! Click on 'S' to start again.";
            h2.innerText += "\nClick on the Score to reset the score to 0."
            score_call()
        }
    }

    // Calls the score variable to increase or decrease
    function score_call(){
        if (red_bounds === true && lost_state === true){
            score -= 10;
            lost_state = false;
            console.log(score);
            updateScore();
            return score;
        } else if (red_bounds === false && lost_state === false){
            score += 5;
            lost_state = true;
            console.log(score);
            updateScore();
            return score;
        }
    }

    // Function for when the user clicks on score it resets the score to 0
    function restart(){
        score = 0;
        updateScore();
        reset();
    }

    // Function to update the displayed score everytime an event occurs
    function updateScore(){
        example[0].innerHTML = `Score = ${score}`;
    }
    
    updateScore()
});