const cols = 4; //Needs to split it up that much. 
const colwth = 700 / cols;

const rows = 5;
const rowwth = 500 / rows;

let curPos = 0;

let pick1, pick2;




function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");
    selections = [
        { color: "red" },
        { color: "#fc4444" },
        { color: "#fc6404" },
        { color: "#fcd444" },
        { color: "#8cc43c" },
        { color: "#029658" },
        { color: "#1abc9c" },
        { color: "#5bc0de" },
        { color: "#6454ac" },
        { color: "#fc8c84" },
    ];
    deck = [];
    clicked();
}

function draw() {
    background("pink");
    for (i = 0; i < deck.length; i++) {
        deck[i].draw();
    }
}

function clicked() {
    //This is where well set up everything; 
    setDeck();
    deck = shuffle(deck);
    setPos();
    curPos = 0;
    deck[curPos].hover = true;
    pick1 = -1;
    pick2 = -1;
}

function setDeck() {
    let count = cols * rows / 2;
    deck = [];
    for (i = 0; i < cols * rows / 2; i++) {
        deck.push(new Card(selections[i]));
        deck.push(new Card(selections[i]));
    }

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


class Card {
    constructor(struct) {
        this.x = 0;
        this.y = 0;
        this.color = struct.color;
        this.hover = false;
        this.picked = false;
        this.matched = false;
    }

    draw() {
        noStroke();
        if (this.picked || this.matched) {
            fill(this.color);
        } else {
            fill("black");
        }
        rect(this.x, this.y, colwth - 20, rowwth - 20);
        if (this.hover) {
            fill("white");
            circle(this.x + (colwth - 20) / 2, this.y + (rowwth - 20) / 2, 50);
        }
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function keyPressed() {
    switch (keyCode) {
        case RIGHT_ARROW:
            // console.log("→");
            deck[curPos].hover = false;
            curPos = (curPos + cols + 1) % deck.length;
            break;
        case LEFT_ARROW:
            // console.log("←");
            deck[curPos].hover = false;
            if (curPos <= cols) {
            } else {
                curPos = (curPos - cols - 1) % deck.length;
            }
            break;
        case DOWN_ARROW:
            // console.log("↓");
            deck[curPos].hover = false;
            curPos = (curPos + 1) % deck.length;
            break;
        case UP_ARROW:
            // console.log("↑");
            deck[curPos].hover = false;
            if (curPos === 0) {
                curPos = deck.length - 1;
            } else {
                curPos--;
            }
            break;
        case 32:
            if (pick1 !== -1 && pick2 === -1) {
                pick2 = curPos;
                deck[pick2].picked = true;


                if (deck[pick1].color === deck[pick2].color && pick1 !== pick2) {
                    console.log("We found a match");
                    deck[pick1].matched = true;
                    deck[pick2].matched = true;
                    pick1 = -1;
                    pick2 = -1;
                } else {
                    let prev1 = pick1;
                    let prev2 = pick2;
                    console.log("picked1: " + pick1 + "\npicked2: " + pick2);
                    pick1 = -1;
                    pick2 = -1;
                    setTimeout(() => {
                        deck[prev2].picked = false;
                        deck[prev1].picked = false;
                    }, 1000);

                }
            } else if (pick1 === -1) {
                pick1 = curPos;
                deck[curPos].picked = true;
            }


            break;
        default:
            console.log("picked1: " + pick1 + "\npicked2: " + pick2);
            break;
    }
    deck[curPos].hover = true;
}