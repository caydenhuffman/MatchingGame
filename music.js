
let playing = false;
let myNote = ['E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'Bb3', 'Gb3', 'Bb3', 'A3', 'F3', 'A3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D4', 'B3', 'G3', 'B3', 'D4', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'Bb3', 'Gb3', 'Bb3', 'A3', 'F3', 'A3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'G3', 'B3', 'E4', 'D#4', 'B3', 'D#4', 'F#4', 'E4'];


let instrument = new Tone.FMSynth().toDestination();

instrument.set({
    "harmonicity": 3.01, "modulationIndex": 14, "oscillator": { "type": "triangle" }, "envelope": { "attack": 0.2, "decay": 0.3, "sustain": 0.1, "release": 1.2 }, "modulation": { "type": "square" }, "modulationEnvelope": { "attack": 0.01, "decay": 0.5, "sustain": 0.2, "release": 0.1 }
});

var effect1 = new Tone.Freeverb();
freeverb.set({
    "roomSize": 0.9,
    "dampening": 2000,
    "wet": 0.5
});
instrument.connect(freeverb);
freeverb.connect(Tone.Master);


let pattern;

function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");



    pattern = new Tone.Pattern(function (time, note) {
        instrument.triggerAttackRelease(note, "8n", time);
    }, myNote);

    Tone.Transport.bpm.value = 200;

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
  
}