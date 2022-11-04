
let homeScoreResult = document.getElementById("home-score-r")
let guestScoreResult = document.getElementById("guest-score-r")

let homeScore = 0
let guestScore = 0

function scoreIncrementByOne(){
    homeScore += 1
    homeScoreResult.textContent = homeScore
}
function scoreIncrementByTwo(){
    homeScore += 2
    homeScoreResult.textContent = homeScore
}
function scoreIncrementByThree(){
    homeScore += 3
    homeScoreResult.textContent = homeScore
}

function guetScoreIncrementByOne(){
    guestScore += 1
    guestScoreResult.textContent = guestScore
}
function guetScoreIncrementByTwo(){
    guestScore += 2
    guestScoreResult.textContent = guestScore
}
function guetScoreIncrementByThree(){
    guestScore += 3
    guestScoreResult.textContent = guestScore
}