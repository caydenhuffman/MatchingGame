
let playing = false;
let myNote = ['E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'Bb3', 'Gb3', 'Bb3', 'A3', 'F3', 'A3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D4', 'B3', 'G3', 'B3', 'D4', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'Bb3', 'Gb3', 'Bb3', 'A3', 'F3', 'A3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D#4', 'B3', 'D#4', 'F#4', 'E4'];
// myNote = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];

let myDurs = ["8n", "8n", "8n", "8n", "8n", "8n", "4n", "8n", "8n", "4n", "8n", "8n", "4n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "2n", "8n", "8n", "8n", "8n", "8n", "8n", "4n", "8n", "8n", "4n", "8n", "8n", "4n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "8n", "2n"];


let instrument = new Tone.FMSynth().toDestination();

instrument.set({
    "harmonicity": 3.01, "modulationIndex": 14, "oscillator": { "type": "triangle" }, "envelope": { "attack": 0.2, "decay": 0.3, "sustain": 0.1, "release": 1.2 }, "modulation": { "type": "square" }, "modulationEnvelope": { "attack": 0.01, "decay": 0.5, "sustain": 0.2, "release": 0.1 }
});

let freeverb = new Tone.Freeverb();
freeverb.set({
    "roomSize": 0.9,
    "dampening": 2000,
    "wet": 0.5
});
instrument.connect(freeverb);
freeverb.connect(Tone.Master);



let duoSynth = new Tone.DuoSynth();
duoSynth.set({ "vibratoAmount": 0.5, "vibratoRate": 5, "harmonicity": 1.5, "voice0": { "volume": -10, "portamento": 0, "oscillator": { "type": "sine" }, "filterEnvelope": { "attack": 0.01, "decay": 0, "sustain": 1, "release": 0.5 }, "envelope": { "attack": 0.01, "decay": 0, "sustain": 1, "release": 0.5 } }, "voice1": { "volume": -20, "portamento": 0, "oscillator": { "type": "sine" }, "filterEnvelope": { "attack": 0.01, "decay": 0, "sustain": 1, "release": 0.5 }, "envelope": { "attack": 0.01, "decay": 0, "sustain": 1, "release": 0.5 } } });

let smallerFreverb = new Tone.Freeverb();
smallerFreverb.set({ "roomSize": 0.7, "dampening": 4300, "wet": 0.4 });
duoSynth.connect(smallerFreverb);
smallerFreverb.connect(Tone.Master);


myhalfNotes = [, , , ,];

let synth = new Tone.Synth().toDestination();

let pattern;

function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");
    pattern = new Tone.Pattern(function (time, note) {
        instrument.triggerAttackRelease(note, "8n", time);
    }, myNote);

    pattern2 = new Tone.Pattern(function (time, note){
        duoSynth.triggerAttackRelease(note, "2n", time); 
    }, myhalfNotes);

    // Tone.Transport.bpm.value = 200;

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
            addNotes(['E3', [0, 13, 26, 39]]);
            break;
        case 50:
            console.log(2);
            addNotes(['B3', [4, 6, 17, 19, 22, 24, 30, 32, 43, 45, 48]]);
            break;
        case 51:
            console.log(3);
            addNotes(['Gb3', [8, 34]]);
            addNotes(['F#4', [50]])
            break;
        case 52:
            console.log(4);
            addNotes(['E4', [20, 46, 51]]);
            break;
        case 53:
            console.log(5);
            addNotes(['D#4', [47, 49]]);
            addNotes(['D4', [21, 25]]);
            break;
        case 54:
            console.log(6);
            addNotes(['G3', [2, 5, 15, 18, 23, 28, 31, 41, 44]]);
            break;
        case 55:
            console.log(7);
            addNotes(['F3', [11, 37]]);
            break;
        case 56:
            console.log(8);
            addNotes(['Bb3', [7, 9, 33, 35]]);
            break;
        case 57:
            console.log(9);
            addNotes(['A3', [3, 10, 12, 16, 29, 36, 38, 42]]);
            break;
        case 48:
            console.log(0);
            addNotes(['F#3', [1, 14, 27, 40]]);
            break;

        case RIGHT_ARROW:
            break;
        default:
            break;
    }
    // console.log(keyCode);
}

function addNotes(array) {
    pattern.stop();
    for (i = 0; i < array[1].length; i++) {
        myNote[array[1][i]] = array[0];
    }
    pattern.start();
}











