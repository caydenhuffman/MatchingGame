
let playing = false;
// let myNote = ['E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'Bb3', 'Gb3', 'Bb3', 'A3', 'F3', 'A3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D4', 'B3', 'G3', 'B3', 'D4', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'Bb3', 'Gb3', 'Bb3', 'A3', 'F3', 'A3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D#4', 'B3', 'D#4', 'F#4', 'E4'];
// myNote = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];

// let myDurs = ["8n", "8n", "8n", "8n", "8n", "8n", "4n", "8n", "8n", "4n", "8n", "8n", "4n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "2n", "8n", "8n", "8n", "8n", "8n", "8n", "4n", "8n", "8n", "4n", "8n", "8n", "4n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "2n"];

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,];

let quarterNotes = [null, null, null, null, null, null, 'B3', null, null, 'Bb3', null, null, 'A3', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'B3', null, null, 'Bb3', null, null, 'A3', null, null, null, null, null, null, null, null, null, null, null, null, null,];
let eightNotes = ['E3', 'F#3', 'G3', 'A3', 'B3', 'G3', null, 'Bb3', 'Gb3', null, 'A3', 'F3', null, 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D4', 'B3', 'G3', 'B3', null, 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', null, 'Bb3', 'Gb3', null, 'A3', 'F3', null, 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D#4', 'B3', 'D#4', 'F#4', null,];
// let doubleNotes = [['E3', null], ['F#3', null], ['G3', null], ['A3', null], ['B3', null], ['G3', null], [null, null] ['Bb3', null], ['Gb3', null], [null, null] ['A3', null], ['F3', null], [null, null] ['E3', null], ['F#3', null], ['G3', null], ['A3', null], ['B3', null], ['G3', null], ['B3', null], ['E4', null], ['D4', null], ['B3', null], ['G3', null], ['B3', null], [null, null] ['E3', null], ['F#3', null], ['G3', null], ['A3', null], ['B3', null], ['G3', null], [null, null] ['Bb3', null], ['Gb3', null], [null, null] ['A3', null], ['F3', null], [null, null] ['E3', null], ['F#3', null], ['G3', null], ['A3', null], ['B3', null], ['G3', null], ['B3', null], ['E4', null], ['D#4', null], ['B3', null], ['D#4', null], ['F#4', null], [null, null] ]; 

let doubleNotes = [[null, null, null, null, null, null, 'B3', null, null, 'Bb3', null, null, 'A3', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'B3', null, null, 'Bb3', null, null, 'A3', null, null, null, null, null, null, null, null, null, null, null, null, null,], ['E3', 'F#3', 'G3', 'A3', 'B3', 'G3', null, 'Bb3', 'Gb3', null, 'A3', 'F3', null, 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D4', 'B3', 'G3', 'B3', null, 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', null, 'Bb3', 'Gb3', null, 'A3', 'F3', null, 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D#4', 'B3', 'D#4', 'F#4', null,]];

// let myNote = ["E4", "D#4", "E4", "C#5", "A3", "E4", "D#4", "E4", "C#5", "A3"];
// let myNote = ["E4", null, null "E4", null, null, "E4", null, null, "E4"];

// let myNote = [["E4"], ["D#4", "E4", "C#4"], ["A3", "E4"], ["D#4", "E4", "C#4"], "A3"]; 

// let myNote = [['E3', 'F#3', 'G3'], ['A3', 'B3', 'G3'], 'B3', ['Bb3', 'Gb3'], 'Bb3', ['A3', 'F3'], 'A3', ['E3', 'F#3', 'G3'], ['A3', 'B3', 'G3'], 'B3', ['E4', 'D4', 'B3'], ['G3', 'B3'], 'D4', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'Bb3', 'Gb3', 'Bb3', 'A3', 'F3', 'A3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D#4', 'B3', 'D#4', 'F#4', 'E4'];

// let myNote = [['E3', 'E3', 'E3', 'E3'], "F#3", 'G3', ['A3', 'B3', 'G3'], 'B3', ['Bb3', 'Gb3'], 'Bb3', ['A3', 'F3'], 'A3', ['E3', 'F#3', 'G3'], ['A3', 'B3', 'G3'], 'B3', ['E4', 'D4', 'B3'], ['G3', 'B3'], 'D4', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'Bb3', 'Gb3', 'Bb3', 'A3', 'F3', 'A3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D#4', 'B3', 'D#4', 'F#4', 'E4'];
// let myNote = [
//     ['E3', null, 'F#3', null], ['G3', null, 'A3', null], ['B3', null, 'G3', null], ['B3', null], ['Bb3', null, 'Gb3', null], ["Bb3", null], ['A3', null, 'F3', null], ['A3', null],
//     ['E3', null, 'F#3', null], ['G3', null, 'A3', null], ['B3', null, 'G3', null], ['B3', null, 'E4', null], ['D4', null, 'B3', null], ['G3', null, 'B3', null], 'D4',
//     ['E3', null, 'F#3', null], ['G3', null, 'A3', null], ['B3', null, 'G3', null], ['B3', null], ['Bb3', null, 'Gb3', null], ["Bb3", null], ['A3', null, 'F3', null], ['A3', null],
//     ['E3', null, 'F#3', null], ['G3', null, 'A3', null], ['B3', null, 'G3', null], ['B3', null, 'E4', null],
//     ['D#4', null, 'B3', null], ['D#4', null, 'F#4', null], 'E4'];

myNote = [
    ['E3', null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null],
    [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], null, [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null], [null, null, null, null], [null, null, null]];

let instrument = new Tone.FMSynth().toDestination();

instrument.set({
    "harmonicity": 3.01, "modulationIndex": 14, "oscillator": { "type": "triangle" }, "envelope": { "attack": 0.2, "decay": 0.3, "sustain": 0.1, "release": 1.2 }, "modulation": { "type": "square" }, "modulationEnvelope": { "attack": 0.01, "decay": 0.5, "sustain": 0.2, "release": 0.1 }
});
instrument.volume.value = -10;

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
    // pattern = new Tone.Pattern(function (time, note) {
    //     instrument.triggerAttackRelease(note[1], "8n", time);;
    //     // duoSynth.triggerAttackRelease(note, "4n", time);
    // }, doubleNotes);
    console.log(myNote);
    pattern = new Tone.Sequence((time, note) => {
        instrument.triggerAttackRelease(note, "2n", time);
        console.log("Played " + note);
    }, myNote);


    // pattern2 = new Tone.Pattern(function (time, note){
    //     duoSynth.triggerAttackRelease(note, "2n", time); 
    // }, myhalfNotes);

    Tone.Transport.bpm.value = 50;

}

function draw() {
    background("pink");
}
// melody;
function clicked() {
    console.log("Clicked.");
    playing = !playing;



    if (playing) {
        Tone.Transport.start();
        pattern.start();
    } else {
        Tone.Transport.stop();
        pattern.stop();
    }
    // melody.start();

}


function keyPressed() {
    switch (keyCode) {
        case 49:
            console.log(1);
            addNotes(['E3', [[0, 0], [8, 0], [15, 0], [23, 0]]]);
            break;
        case 50:
            console.log(2);
            addNotes(['B3', [[2, 0], [3, 0], [10, 0], [11, 0], [12, 2], [13, 2], [17, 0], [18, 0], [25, 0], [26, 0], [27, 2]]]);
            break;
        case 51:
            console.log(3);
            addNotes(['Gb3', [[4, 2], [19, 2]]]);
            addNotes(['F#4', [[28, 2]]])
            break;
        case 52:
            console.log(4);
            myNote[29] = 'E4';
            addNotes(['E4', [[11, 2], [26, 2]]]);

            break;
        case 53:
            console.log(5);
            myNote[14] = 'D4';  
            addNotes(['D#4', [[27, 0], [28, 0]]]);
            addNotes(['D4', [[12, 0]]]);
            break;
        case 54:
            console.log(6);
            addNotes(['G3', [[1, 0], [2, 2], [9, 0], [10, 2], [13, 0], [16, 0], [17, 2], [24, 0], [25, 2]]]);
            break;
        case 55:
            console.log(7);
            addNotes(['F3', [[6, 2], [21, 2]]]);
            break;
        case 56:
            console.log(8);
            addNotes(['Bb3', [[4, 0], [5, 0], [19, 0], [20, 0]]]);
            break;
        case 57:
            console.log(9);
            addNotes(['A3', [[1, 2], [6, 0], [7, 0], [9, 2], [16, 2], [21, 0], [22, 0], [24, 2]]]);
            break;
        case 48:
            console.log(0);
            addNotes(['F#3', [[0, 2], [8, 2], [15, 2], [23, 2]]]);
            break;

        case RIGHT_ARROW:
            break;
        default:
            break;
    }
    // console.log(keyCode);
}

// function addNotes(array) {
//     pattern.stop();
//     for (i = 0; i < array[1].length; i++) {
//         myNote[array[1][i]] = array[0];
//     }
//     pattern.start();
// }
function addNotes(array) {
    pattern.stop();
    for (let i = 0; i < array[1].length; i++) {
        // for (let j = 0; j < array[1][i].length; j++) {
        // myNote[array[1][i][j]] = array[0];
        myNote[array[1][i][0]][array[1][i][1]] = array[0];
        // }
    }

    pattern = new Tone.Sequence((time, note) => {
        instrument.triggerAttackRelease(note, "2n", time);
        console.log("Played " + note);
    }, myNote);

    pattern.start();
    console.log(myNote);

}






[
    ['E3', [[0, 0], [8, 0], [15, 0], [23, 0]]],
    ['F#3', [[0, 2], [8, 2], [15, 2], [23, 2]]],
    ['G3', [[1, 0], [2, 2], [9, 0], [10, 2], [13, 0], [16, 0], [17, 2], [24, 0], [25, 2]]],
    ['A3', [[1, 2], [6, 0], [7, 0], [9, 2], [16, 2], [21, 0], [22, 0], [24, 2]]],
    ['F3', [[6, 2], [21, 2]]],
    ['Bb3', [[4, 0], [5, 0], [19, 0], [20, 0]]],
    ['B3', [[2, 0], [3, 0], [10, 0], [11, 0], [12, 2], [13, 2], [17, 0], [18, 0], [25, 0], [26, 0], [27, 2]]],
    ['D4', [[12, 0]]],
    ['D#4', [[27, 0], [28, 0]]],
    ['Gb3', [[4, 2], [19, 2]]],
    ['F#4', [[28, 2]]],
    ['E4', [[11, 2], [26, 2]]], //And then [29]
]
