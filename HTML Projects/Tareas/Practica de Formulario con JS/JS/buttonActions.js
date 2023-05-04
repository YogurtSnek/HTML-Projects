const questions = document.getElementsByClassName("question");
let currentQ = 0;

for (let i = 1; i < questions.length; i++) {
    questions[i].setAttribute("style", "animation-name: slideRight;"
    +"animation-duration: 2s;"
    +"animation-direction: normal;"
    +"animation-timing-function: cubic-bezier(.32,.88,.49,1.39);"
    +"animation-iteration-count: 1;"
    +"animation-fill-mode: forwards;"
    +"left: 150%");

}

function questionMoves(direction) {
    //left is 0, right is 1
    if (direction == 1) {
        questions[currentQ].setAttribute("style", "left: 50%")
        questions[currentQ-1].setAttribute("style", "left: -25%")
    } else {
        questions[currentQ].setAttribute("style", "left: 50%")
        questions[currentQ+1].setAttribute("style", "left: 125%")
    }

}


function OnClickPrev() {
    if (currentQ != 0) {
        
        console.log("Current Questions: " + currentQ)

        questions[currentQ].setAttribute("style", "animation-name: slideRight;"
        +"animation-duration: 2s;"
        +"animation-direction: normal;"
        +"animation-timing-function: cubic-bezier(.32,.88,.49,1.39);"
        +"animation-iteration-count: 1;"
        +"animation-fill-mode: forwards;");

        currentQ -= 1
        
        questions[currentQ].setAttribute("style", "animation-name: slideRight;"
        +"animation-duration: 2s;"
        +"animation-direction: normal;"
        +"animation-timing-function: cubic-bezier(.32,.88,.49,1.39);"
        +"animation-iteration-count: 1;"
        +"animation-fill-mode: forwards;");
        
        setTimeout(() => {
            questionMoves(0)
        }, 2000);

    }
}

function OnClickNext() {
    if (currentQ != questions.length - 1) {

        console.log("Current Questions: " + currentQ)

        questions[currentQ].setAttribute("style", "animation-name: slideLeft;"
        +"animation-duration: 2s;"
        +"animation-direction: normal;"
        +"animation-timing-function: cubic-bezier(.32,.88,.49,1.39);"
        +"animation-iteration-count: 1;"
        +"animation-fill-mode: forwards;");

        currentQ += 1
        
        questions[currentQ].setAttribute("style", "animation-name: slideLeft;"
        +"animation-duration: 2s;"
        +"animation-direction: normal;"
        +"animation-timing-function: cubic-bezier(.32,.88,.49,1.39);"
        +"animation-iteration-count: 1;"
        +"animation-fill-mode: forwards;");

        setTimeout(() => {
            questionMoves(1)
          }, 2000);

    } else {
        console.log("End of Questions.")
    }
}