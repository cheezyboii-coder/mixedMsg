function mixedMessage() {
    sentence = ""
    msgBank = ['the', 'morning', 'good', 'dog', 'pizza', 'eats', 'cries', 'only', 'welcome'];
    for(let i = 0; i < 4; i++){
        randomNum = Math.floor(Math.random() * msgBank.length);
        sentence += (msgBank[randomNum] + " ")
    }
    console.log(sentence)
}

mixedMessage();