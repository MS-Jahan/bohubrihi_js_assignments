let low = 1;
let high = 10;
let correct_answer = get_random_number(low, high);
let score = 0;
let chances = 3;

console.log("correct_answer: ", correct_answer);

function get_random_number(low, high){
    return parseInt(Math.floor(Math.random() * (high - low + 1) + low));
}

function check_answer(){
    let guess = parseInt(document.getElementById("guess-input").value);
    
    console.log("guess: ", guess);
    console.log("correct_answer: ", correct_answer);

    if (guess === correct_answer){
        alert("You Win!");
        score += 1;
        document.getElementById("score").innerHTML = score;
        correct_answer = get_random_number(low, high);
        chances = 3;
        document.getElementById("chances").innerHTML = chances;

        document.getElementById("guess-input").disabled = true;
        document.getElementById("guess-btn").disabled = true;
        document.getElementById("play-again").classList.remove("hidden");
    } else if (guess > correct_answer){
        alert("Correct answer is smaller!");
        chances -= 1;
        document.getElementById("chances").innerHTML = chances;
    } else if (guess < correct_answer){
        alert("Correct answer is greater!");
        chances -= 1;
        document.getElementById("chances").innerHTML = chances;
    } else {
        alert("Something went wrong!");
    }

    if(chances === 0){
        alert("You lose!");

        document.getElementById("guess-input").disabled = true;
        document.getElementById("guess-btn").disabled = true;
        document.getElementById("play-again").classList.remove("hidden");
    }
}

function reset(){
    chances = 3;
    document.getElementById("chances").innerHTML = chances;
    correct_answer = get_random_number(low, high);
    document.getElementById("guess-input").disabled = false;
    document.getElementById("guess-btn").disabled = false;
    console.log("correct_answer: ", correct_answer);
    document.getElementById("play-again").classList.add("hidden");
}