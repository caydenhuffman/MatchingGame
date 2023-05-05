const cols = 3; //Needs to split it up that much. 
const colwth = 700 / cols;

const rows = 2;
const rowwth = 500 / rows;


function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");
    selections = [orange, redy, { color: "blue" }, { color: "purple" }];

    deck = [];
}

function draw() {
    background("pink");
    for (i = 0; i < deck.length; i++) {
        deck[i].draw();
    }
}

function clicked() {
    //This is where well set up everything; 
    console.log("HEY");
    setDeck();
    deck = shuffle(deck);
    setPos();

}

function setDeck() {
    let count = cols * rows / 2;
    deck = []; 
    console.log(count);
    for (i = 0; i < cols * rows / 2; i++) {
        deck.push(new Card(selections[i]));
        deck.push(new Card(selections[i]));
    }
    console.log(deck);

}

function setPos() {
    //well We should set it up that way. So 
    let c = 0;
    let r = 0;
    for (i = 0; i < deck.length; i++) {
        deck[i].x = 60 + (colwth * c);
        deck[i].y = 60 + (rowwth * r);
        r = (r + 1) % rows;
        if (r === 0) {
            c++;
        }
    }
}

orange = {
    color: "orange",
    draw: function () { 
        rect(this.x, this.y, )
    }
}
redy = {
    color: "red"
}

class Card {
    constructor(struct) {
        this.x = 0;
        this.y = 0;
        this.color = struct.color;
    }

    draw() {
        noStroke();
        fill(this.color);
        rect(this.x, this.y, colwth - 20, rowwth - 20);
        // rect(this.x, this.y, 50, 50);
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

