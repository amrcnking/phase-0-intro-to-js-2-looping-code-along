// Code your solutions in this file
const card = [];
function writeCards(name, adj) {
    for (let i = 0; i < name.length; i++) {
    
    card[i] = `Thank you, ${name[i]}, for the wonderful ${adj} gift!`
    debugger;
    }
    return card;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
        
    }
}