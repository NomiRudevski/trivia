
var score = 0;

function check(id, cardID, correctCheck) {
    
    if (correctCheck == "right") {
        document.getElementById(id).style.backgroundColor = "rgb(208, 255, 191)";
        score++
    }
    else {
        document.getElementById(id).style.backgroundColor = "rgb(255, 191, 191)";
        
    }
    card = parseInt(cardID);
    function changecard() {
        document.getElementById(cardID).style.visibility = "hidden";
        document.getElementById(++card).style.visibility = "visible";
    }

    setTimeout(changecard, 500);
    console.log(score)
    document.getElementById("scoreDisplay").textContent = "Congratulations! Your score is: " + score;
}
