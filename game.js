document.addEventListener("DOMContentLoaded", function(){
    var h2 = document.getElementById('status');
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var boundary = document.getElementsByClassName('boundary');
    var example = document.getElementsByClassName('example');
    var game = document.getElementById('game');
    var red_bounds = false;
    var lost_state = false
    var score = 0;
    
    h2.innerText += "\nClick on the Score to reset the score to 0."
    start.onclick = reset;
    end.onmouseover = winning;
    example[0].style.textAlign = "center";
    example[0].onclick = restart;
    game.onmouseleave = losing;

    for (var i = 0; i < boundary.length - 1; i++){
        boundary[i].onmouseover = losing;
    }

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

    function reset(){
        for (var i = 0; i < boundary.length; i++){
            boundary[i].style.backgroundColor = '#eeeeee';
        }
        h2.innerText = 'Begin by moving your mouse over the "S".';
        h2.innerText += "\nClick on the Score to reset the score to 0."
        red_bounds = false;
        lost_state = false;
    }

    function winning(){
        if (red_bounds === false && lost_state === false) {
            h2.innerText = "You won! Click on 'S' to start again.";
            h2.innerText += "\nClick on the Score to reset the score to 0."
            score_call()
        }
    }

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

    function restart(){
        score = 0;
        updateScore();
        reset();
    }

    function updateScore(){
        example[0].innerHTML = `Score = ${score}`;
    }
    
    updateScore()
});