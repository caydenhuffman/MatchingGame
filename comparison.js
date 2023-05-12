const cols = 4; //Needs to split it up that much. 
const colwth = 700 / cols;

const rows = 5;
const rowwth = 500 / rows;

let curPos = 0;

let pick1, pick2;


let playing = false;


// let myNote = [
//     ['E3', null, 'F#3', null], ['G3', null, 'A3', null], ['B3', null, 'G3', null], ['B3', null], ['Bb3', null, 'Gb3', null], ["Bb3", null], ['A3', null, 'F3', null], ['A3', null],
//     ['E3', null, 'F#3', null], ['G3', null, 'A3', null], ['B3', null, 'E4', null], ['D4', null, 'B3', null], ['G3', null, 'B3', null], 'D4',
//     ['E3', null, 'F#3', null], ['G3', null, 'A3', null], ['B3', null, 'G3', null], ['B3', null], ['Bb3', null, 'Gb3', null], ["Bb3", null], ['A3', null, 'F3', null], ['A3', null],
//     ['E3', null, 'F#3', null], ['G3', null, 'A3', null], ['B3', null, 'G3', null], ['B3', null, 'E4', null],
//     ['D#4', null, 'B3', null], ['D#4', null, 'F#4', null], 'E4'];

let myNote = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], null, [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null, null]];
let instrument = new Tone.FMSynth().toDestination();

instrument.set({
    "harmonicity": 3.01, "modulationIndex": 14, "oscillator": { "type": "triangle" }, "envelope": { "attack": 0.2, "decay": 0.3, "sustain": 0.1, "release": 1.2 }, "modulation": { "type": "square" }, "modulationEnvelope": { "attack": 0.01, "decay": 0.5, "sustain": 0.2, "release": 0.1 }
});
instrument.volume.value = -6;

let freeverb = new Tone.Freeverb();
freeverb.set({
    "roomSize": 0.9,
    "dampening": 2000,
    "wet": 0.5
});
instrument.connect(freeverb);
freeverb.connect(Tone.Master);



let duoSynth = new Tone.DuoSynth();
duoSynth.set({ "vibratoAmount": 0.5, "vibratoRate": 5, "harmonicity": 1.5, "voice0": { "volume": -6, "portamento": 0, "oscillator": { "type": "sine" }, "filterEnvelope": { "attack": 0.01, "decay": 0, "sustain": 1, "release": 0.5 }, "envelope": { "attack": 0.01, "decay": 0, "sustain": 1, "release": 0.5 } }, "voice1": { "volume": -20, "portamento": 0, "oscillator": { "type": "sine" }, "filterEnvelope": { "attack": 0.01, "decay": 0, "sustain": 1, "release": 0.5 }, "envelope": { "attack": 0.01, "decay": 0, "sustain": 1, "release": 0.5 } } });

let smallerFreverb = new Tone.Freeverb();
smallerFreverb.set({ "roomSize": 0.7, "dampening": 4300, "wet": 0.4 });
// duoSynth.connect(smallerFreverb);
// smallerFreverb.connect(Tone.Master);
duoSynth.toDestination();//Delete if using previous.


let synth = new Tone.Synth().toDestination();

let pattern;


function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");
    i = 0;
    console.log(myNote);
    pattern = new Tone.Sequence((time, note) => {
        instrument.triggerAttackRelease(note, "2n", time);
        duoSynth.triggerAttackRelease(note, "2n", time);
        console.log("Played " + note);
    }, myNote);

    Tone.Transport.bpm.value = 40;

    selections = [
        { color: "#b1f4a3", noteGroup: 0 },
        { color: "#efc88c", noteGroup: 1 },
        { color: "#824983", noteGroup: 2 },
        { color: "#bf3543", noteGroup: 3 },
        { color: "#83d9ff", noteGroup: 4 },
        { color: "#303030", noteGroup: 5 },
        { color: "#ec84ae", noteGroup: 6 },
        { color: "#b7b7b7", noteGroup: 7 },
        { color: "#9e4b2d", noteGroup: 8 },
        { color: "#375a97", noteGroup: 9 },
    ];
    deck = [];
}

let game = { maxTime: 10, elapsedTime: 0 }

function draw() {
    background("white");
    for (i = 0; i < deck.length; i++) {
        deck[i].draw();
    }

    // let currentTime = game.maxTime - game.elapsedTime;
    // console.log("currentTime: " + ceil(currentTime));
    // game.elapsedTime += deltaTime / 1000;

    if (currentTime < 0) {
        // console.log("Its Over"); 
    }
}

function clicked() {
    pattern.stop();
    myNote = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], null, [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null, null]];

    pattern = new Tone.Sequence((time, note) => {
        instrument.triggerAttackRelease(note, "2n", time);
        duoSynth.triggerAttackRelease(note, "2n", time);
        console.log("Played " + note);
    }, myNote);

    console.log("Clicked.");
    Tone.Transport.start();
    pattern.start();

    setDeck();
    deck = shuffle(deck);
    setPos();
    curPos = 0;
    deck[curPos].hover = true;
    pick1 = -1;
    pick2 = -1;
}

function setDeck() {
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
                    console.log("We found a match" + deck[pick1].noteGroup);
                    deck[pick1].matched = true;
                    deck[pick2].matched = true;
                    noteGroupOn(deck[pick1].noteGroup);
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
            break;
    }
    deck[curPos].hover = true;
}

function addNotes(array) {
    pattern.stop();
    for (let i = 0; i < array[1].length; i++) {
        myNote[array[1][i][0]][array[1][i][1]] = array[0];
    }

    pattern = new Tone.Sequence((time, note) => {
        instrument.triggerAttackRelease(note, "2n", time);
        duoSynth.triggerAttackRelease(note, '2n', time);
        console.log("Played " + note);
    }, myNote);

    pattern.start();
    console.log(myNote);

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


function noteGroupOn(noteGroupNum) {
    switch (noteGroupNum) {
        case 1:
            console.log(1);
            addNotes(['E3', [[0, 0], [8, 0], [15, 0], [23, 0]]]);
            break;
        case 2:
            console.log(2);
            addNotes(['B3', [[2, 0], [3, 0], [10, 0], [11, 0], [12, 2], [13, 2], [17, 0], [18, 0], [25, 0], [26, 0], [27, 2]]]);
            break;
        case 3:
            console.log(3);
            addNotes(['Gb3', [[4, 2], [19, 2]]]);
            addNotes(['F#4', [[28, 2]]])
            break;
        case 4:
            console.log(4);
            myNote[29] = 'E4';
            addNotes(['E4', [[11, 2], [26, 2]]]);
            break;
        case 5:
            console.log(5);
            myNote[14] = 'D4';
            addNotes(['D#4', [[27, 0], [28, 0]]]);
            addNotes(['D4', [[12, 0]]]);
            break;
        case 6:
            console.log(6);
            addNotes(['G3', [[1, 0], [2, 2], [9, 0], [10, 2], [13, 0], [16, 0], [17, 2], [24, 0], [25, 2]]]);
            break;
        case 7:
            console.log(7);
            addNotes(['F3', [[6, 2], [21, 2]]]);
            break;
        case 8:
            console.log(8);
            addNotes(['Bb3', [[4, 0], [5, 0], [19, 0], [20, 0]]]);
            break;
        case 9:
            console.log(9);
            addNotes(['A3', [[1, 2], [6, 0], [7, 0], [9, 2], [16, 2], [21, 0], [22, 0], [24, 2]]]);
            break;
        case 0:
            console.log(0);
            addNotes(['F#3', [[0, 2], [8, 2], [15, 2], [23, 2]]]);
            break;
        default:
            break;
    }
}




class Card {
    constructor(struct) {
        this.x = 0;
        this.y = 0;
        this.color = struct.color;
        this.noteGroup = struct.noteGroup;
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



class Board {
    constructor(){
        
    }
}