function charFrequency(word, char){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() === char.toLowerCase()){
            count += 1;
        }
    }
    return count;
}

function randomWord(){
    let rand = Math.floor(Math.random() * 21);
    const words = ["Value", "Study", "Table", "Taken", 
                    "Times", "Known", "Court", "Young",
                    "Words", "White", "Light", "Least", 
                    "Level", "Child", "Death", "Press", 
                    "Cases","Going", "Party", "Using"]

    return words[rand];
}

const target = randomWord();
let numAttempts = 0;
const maxNumAttempts = 6;

function wordle(guess){

    if(guess.length != 5){
        document.getElementById("alert").innerHTML = guess + " is not a 5 letter word!";
        return;
    }

    let finalString = "";

    for(let i = 0; i < 5; i++){
        document.getElementById('guess-section').children[numAttempts].children[i].innerHTML = "<h1>" + guess[i] + "</h1>";
        if(target[i].toLowerCase() === guess[i].toLowerCase()){
            document.getElementById('guess-section').children[numAttempts].children[i].style.backgroundColor="green";
        }
        else{
            let targetCount = charFrequency(target, guess[i]);
            if(targetCount == 0){
                document.getElementById('guess-section').children[numAttempts].children[i].style.backgroundColor="red";
            } else {
                let guessCount = charFrequency(guess, guess[i]);
                if(targetCount != guessCount){
                    document.getElementById('guess-section').children[numAttempts].children[i].style.backgroundColor="blue";                    
                } else{
                    document.getElementById('guess-section').children[numAttempts].children[i].style.backgroundColor="orange";
                }
            }
        }
    }

    numAttempts += 1;
}