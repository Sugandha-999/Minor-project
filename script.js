const time = 1;
let total_time = time * 60;

const countdown = document.getElementById("countdown");

function score_board() {
    window.location = "/score-board.html";
}

setInterval(updatetimer, 1000);

function updatetimer() {
    const minutes = Math.floor(total_time / 60);
    let seconds = total_time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;


    if (minutes < 0) {
        // document.write("Thank-you for giving this aptitude test. We wish you all the best for your future. You will be redirected to the score-scree.");
        setTimeout("score_board()", 10);
        clearInterval();
        return;
    }
    countdown.innerHTML = minutes + ':' +
        seconds;
    total_time--;
}