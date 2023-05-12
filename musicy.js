let switcher = true;

function clicked() {
    console.log("Clicked");
    // synth.triggerAttackRelease("A3", "2n");
    if (switcher) {
        switcher = false;
    } else {
        part.stop();
        part2.stop();
    }
    part.start();
    part2.start();
    Tone.Transport.start();
}

let falseSynth = new Tone.PolySynth(Tone.MonoSynth);

falseSynth.set({ "oscillator": { "type": "square" }, "filter": { "Q": 2, "type": "lowpass", "rolloff": -12 }, "envelope": { "attack": 0.005, "decay": 3, "sustain": 0, "release": 0.45 }, "filterEnvelope": { "attack": 0.001, "decay": 0.32, "sustain": 0.9, "release": 3, "baseFrequency": 700, "octaves": 2.3 } });

// let freeverb = new Tone.Freeverb();
// freeverb.set({
//     "roomSize": 0.9,
//     "dampening": 2000,
//     "wet": 0.5
// });
// synth.connect(freeverb);
// freeverb.connect(Tone.Master);

let snare = new Tone.PolySynth(Tone.MetalSynth);

snare.volume.value = '-20';

let musical = [
    { time: "0:0:2", note: 'E4', duration: '16n' },
    { time: "0:0:3", note: 'E4', duration: '16n' },
    { time: "0:1", note: 'E4', duration: '16n' },
    { time: "0:1:1", note: 'E4', duration: '16n' },
    { time: "0:1:2", note: 'E4', duration: '16n' },
    { time: "0:1:3", note: 'E4', duration: '16n' },
    { time: "0:3:1", note: 'E4', duration: '16n' },
    { time: "0:3:2", note: 'E4', duration: '16n' },
    { time: "0:3:3", note: 'E4', duration: '16n' },
    { time: "1:0", note: 'E4', duration: '16n' },
    { time: "1:0:1", note: 'E4', duration: '16n' },
    { time: "1:0:2", note: 'E4', duration: '16n' },
    { time: "1:0:3", note: 'E4', duration: '16n' },
    { time: "1:1", note: 'E4', duration: '16n' },
    { time: "1:1:1", note: 'E4', duration: '16n' },
    { time: "1:1:2", note: 'E4', duration: '16n' },
    { time: "1:1:3", note: 'E4', duration: '16n' },
    { time: "1:2", note: 'E4', duration: '16n' },
    { time: "1:2:1", note: 'E4', duration: '16n' },
    { time: "1:2:2", note: 'E4', duration: '16n' },
    { time: "1:2:3", note: 'E4', duration: '16n' },
    { time: "1:3", note: 'F#4', duration: '8n' },
    { time: "1:3:2", note: 'E4', duration: '16n' },
    { time: "1:3:3", note: 'D4', duration: '16n' },//Ties
    { time: "2:0", note: 'D4', duration: '4n' },
    { time: "4:0:2", note: 'E4', duration: '16n' },
    { time: "4:0:3", note: 'E4', duration: '16n' },
    { time: "4:1", note: 'E4', duration: '16n' },
    { time: "4:1:1", note: 'E4', duration: '16n' },
    { time: "4:1:2", note: 'E4', duration: '16n' },
    { time: "4:1:3", note: 'E4', duration: '16n' },
    { time: "4:3:2", note: 'E4', duration: '16n' },
    { time: "4:3:3", note: 'E4', duration: '16n' },
    { time: "5:0", note: 'E4', duration: '16n' },
    { time: "5:0:1", note: 'E4', duration: '16n' },
    { time: "5:0:2", note: 'E4', duration: '16n' },
    { time: "5:0:3", note: 'E4', duration: '16n' },
    { time: "5:1", note: 'E4', duration: '16n' },
    { time: "5:1:1", note: 'E4', duration: '16n' },
    { time: "5:1:2", note: 'E4', duration: '16n' },
    { time: "5:1:3", note: 'E4', duration: '16n' },
    { time: "5:2", note: 'E4', duration: '16n' },
    { time: "5:2:1", note: 'E4', duration: '16n' },
    { time: "5:2:2", note: 'E4', duration: '16n' },
    { time: "5:2:3", note: 'E4', duration: '16n' },
    { time: "5:3", note: 'F#4', duration: '8n' },
    { time: "5:3:2", note: 'E4', duration: '16n' },
    { time: "5:3:3", note: 'D4', duration: '16n' },//Ties
    { time: "6:0", note: 'D4', duration: '4n' },
    { time: "7:2:3", note: 'A3', duration: '16n' },
    { time: "7:3:0", note: 'A3', duration: '16n' },
    { time: "7:3:1", note: 'A3', duration: '8n' },
    { time: "7:3:3", note: ['A4', 'F#4', 'D4', 'B3'], duration: '16n' },

    { time: "8:0", note: ['A4', 'F#4', 'D4', 'B3'], duration: '16n' },
    { time: "8:0:1", note: 'B3', duration: '16n' },
    { time: "8:0:2", note: 'B3', duration: '16n' },
    { time: "8:0:3", note: 'B3', duration: '16n' },
    { time: "8:1:0", note: 'B3', duration: '16n' },
    { time: "8:1:1", note: 'B3', duration: '8n' },
    { time: "8:1:3", note: ['B3', 'G3'], duration: '16n' },
    { time: "8:2", note: ['B3', 'G3'], duration: '16n' },

    { time: "9:0", note: ['B3', 'G3'], duration: '16n' },
    { time: "9:0:1", note: 'B3', duration: '16n' },
    { time: "9:0:2", note: 'B3', duration: '16n' },
    { time: "9:0:3", note: 'B3', duration: '16n' },
    { time: "9:1", note: ['B3', 'G3'], duration: '16n' },
    { time: "9:1:1", note: 'B3', duration: '16n' },
    { time: "9:1:2", note: 'B3', duration: '16n' },
    { time: "9:1:3", note: 'B3', duration: '16n' },
    { time: "9:2", note: ['B3', 'G3'], duration: '16n' },
    { time: "9:2:1", note: 'B3', duration: '16n' },
    { time: "9:2:2", note: 'B3', duration: '16n' },
    { time: "9:2:3", note: 'B3', duration: '16n' },

    { time: "9:3", note: 'G3', duration: '8n' },
    { time: "9:3:3", note: ['F#4', 'A4', 'C#4'], duration: '16n' },

    { time: "10:0", note: ['F#4', 'A4', 'C#4'], duration: '16n' },
    { time: "10:0:1", note: 'C#4', duration: '16n' },
    { time: "10:0:2", note: 'C#4', duration: '8n' },
    { time: "10:1:0", note: 'C#4', duration: '16n' },
    { time: "10:1:1", note: ['C#4', 'A3'], duration: '8n' },
    { time: "10:3:1", note: "E4", duration: '16n' },
    { time: "10:3:2", note: "F#4", duration: '8n' },

    { time: "11:0", note: ['A3', 'E4'], duration: '16n' },
    { time: "11:0:1", note: 'D4', duration: '16n' },
    { time: "11:0:2", note: 'D4', duration: '16n' },
    { time: "11:0:3", note: 'D4', duration: '16n' },
    { time: "11:1", note: ['A3', 'D4'], duration: '4n' },
    { time: "11:3:0", note: 'A3', duration: '16n' },
    { time: "11:3:1", note: 'A3', duration: '8n' },
    { time: "11:3:3", note: ['A4', 'F#4', 'D4', 'B3'], duration: '16n' },

    { time: "12:0", note: ['A4', 'F#4', 'D4', 'B3'], duration: '16n' },
    { time: "12:0:1", note: 'B3', duration: '16n' },
    { time: "12:0:2", note: 'B3', duration: '16n' },
    { time: "12:0:3", note: 'B3', duration: '16n' },
    { time: "12:1:0", note: 'B3', duration: '16n' },
    { time: "12:1:1", note: 'B3', duration: '8n' },
    { time: "12:1:3", note: 'B3', duration: '16n' },
    { time: "12:3:1", note: 'G3', duration: '16n' },
    { time: "12:3:2", note: 'G3', duration: '16n' },
    { time: "12:3:3", note: 'G3', duration: '16n' },

    { time: "13:0", note: 'B3', duration: '16n' },
    { time: "13:0:1", note: ['B3', 'G3'], duration: '8n' },
    { time: "13:0:3", note: ['B3', 'G3'], duration: '16n' },
    { time: "13:1", note: ['B3', 'G3'], duration: '16n' },
    { time: "13:1:1", note: 'A3', duration: '16n' },
    { time: "13:1:2", note: 'B3', duration: '16n' },
    { time: "13:1:3", note: 'B3', duration: '16n' },
    { time: "13:2", note: ['B3', 'G3'], duration: '16n' },
    { time: "13:2:1", note: 'B3', duration: '8n' },
    { time: "13:2:3", note: 'A3', duration: '16n' },
    { time: "13:3", note: 'B3', duration: '8n' },
    { time: "13:3:2", note: 'B3', duration: '8n' },

    { time: "14:0", note: ['F#4', 'A4', "C#4"], duration: '4n' },
    { time: "14:1", note: 'E4', duration: '16n' },
    { time: "14:1:1", note: 'D4', duration: '16n' },
    { time: "14:1:2", note: 'B3', duration: '8n' },
    { time: "14:3", note: 'F#4', duration: '4n' },

    { time: "15:0", note: 'E4', duration: '16n' },
    { time: "15:0:1", note: 'D4', duration: '16n' },
    { time: "15:0:2", note: 'B3', duration: '8n' },
    { time: "15:3:1", note: 'B3', duration: '16n' },
    { time: "15:3:2", note: 'F#4', duration: '8n' },

    { time: "16:0", note: ['E4', 'B3'], duration: '4n' },
    { time: '16:1', note: ['D4', 'B3'], duration: '4n' },
    { time: "16:2", note: 'B3', duration: '8n' },
    { time: "16:2:2", note: 'B3', duration: '8n' },
    { time: "16:3", note: ['F#4', 'D4', 'B3'], duration: '8n' },
    { time: "16:3:2", note: 'F#4', duration: '8n' },

    { time: "17:0", note: ['E4', 'B3'], duration: '4n' },
    { time: '17:1', note: ['D4', 'B3'], duration: '4n' },
    { time: "17:2", note: 'B3', duration: '8n' },
    { time: "17:2:2", note: 'B3', duration: '8n' },
    { time: "17:3", note: ['F#4', 'D4', 'B3'], duration: '8n' },
    { time: "17:3:2", note: 'F#4', duration: '8n' },

    { time: "18:0", note: ['E4', 'A3', 'F#3'], duration: '4n' },
    { time: "18:1", note: ['D4', 'A3', 'F#3'], duration: '4n' },
    { time: "18:2", note: ['A3', 'F#3'], duration: '8n' },
    { time: "18:2:2", note: 'A3', duration: '8n' },
    { time: "18:3", note: ['A3', 'F#4', 'D4'], duration: '8n' },
    { time: "18:3:2", note: 'F#4', duration: '8n' },

    { time: "19:0", note: ['E3', 'C#4', 'A3'], duration: '4n' },
    { time: "19:1", note: ['D4', 'A3'], duration: '4n' },
    { time: "19:2:1", note: 'D4', duration: '16n' },
    { time: "19:2:2", note: 'F#4', duration: '8n' },
    { time: "19:3:0", note: ['A4', "E4", "C#4"], duration: '16n' },
    { time: "19:3:1", note: 'F#4', duration: '16n' },
    { time: "19:3:2", note: 'F#4', duration: '8n' },

    { time: "20:0", note: ['E4', 'B3'], duration: '4n' },
    { time: "20:1", note: ['D4', 'B3'], duration: '4n' },
    { time: "20:2", note: 'B3', duration: '8n' },
    { time: "20:2:2", note: 'B3', duration: '8n' },
    { time: "20:3", note: ['F#4', 'D4', 'B3'], duration: '8n' },
    { time: "20:3:2", note: 'F#4', duration: '8n' },
    { time: "21:0", note: ['E4', 'B3'], duration: '4n' },
    { time: '21:1', note: ['D4', 'B3'], duration: '4n' },
    { time: "21:2", note: 'B3', duration: '8n' },
    { time: "21:2:2", note: 'B3', duration: '8n' },
    { time: "21:3", note: ['F#4', 'D4', 'B3'], duration: '8n' },
    { time: "21:3:2", note: 'F#4', duration: '8n' },

    { time: "22:0", note: ['E4', 'A3', 'F#3'], duration: '4n' },
    { time: "22:1", note: ['D4', 'A3', 'F#3'], duration: '4n' },
    { time: "22:2", note: ['A3', 'F#3'], duration: '8n' },
    { time: "22:2:2", note: 'A3', duration: '8n' },
    { time: "22:3", note: ['A3', 'F#4', 'D4'], duration: '8n' },
    { time: "22:3:2", note: 'F#4', duration: '8n' },

    { time: "23:0", note: ['E3', 'C#4', 'A3'], duration: '4n' },
    { time: "23:1", note: ['D4', 'A3'], duration: '4n' },
    { time: "23:2:1", note: 'D4', duration: '16n' },
    { time: "23:2:2", note: 'F#4', duration: '8n' },
    { time: "23:3:0", note: ['A4', "E4", "C#4"], duration: '16n' },
    { time: "23:3:1", note: 'F#4', duration: '16n' },
    { time: "23:3:2", note: 'F#4', duration: '8n' },

    { time: "24:0", note: 'E4', duration: '4n' },
    { time: "24:2:1", note: 'D4', duration: '16n' },
    { time: "24:2:2", note: 'F#4', duration: '8n' },
    { time: "24:3:0", note: 'A4', duration: '16n' },
    { time: "24:3:1", note: 'F#4', duration: '16n' },
    { time: "24:3:2", note: 'E4', duration: '8n' },

    { time: "25:0", note: 'E4', duration: '4n' },
    { time: "25:2:1", note: 'D4', duration: '16n' },
    { time: "25:2:2", note: 'F#4', duration: '8n' },
    { time: "25:3:0", note: 'A4', duration: '16n' },
    { time: "25:3:1", note: 'F#4', duration: '16n' },
    { time: "25:3:2", note: 'E4', duration: '8n' },

    { time: "26:0", note: 'E4', duration: '16n' },
    { time: "26:0:1", note: 'F#4', duration: '16n' },
    { time: "26:0:2", note: 'E4', duration: '16n' },
    { time: "26:0:3", note: 'D4', duration: '16n' },
    { time: "26:1:0", note: 'B3', duration: '16n' },
];


let snaresMusical = [
    { time: "0:0", note: ['B3', 'G3', "G2"], duration: '1m' + '2n' },
    { time: "1:3", note: ['F2', 'G2', "G3"], duration: '4n' },
    { time: "2:0", note: ['F#3', "D3", 'B2'], duration: '1m + 2n + 4n' },
    { time: "4:0", note: ['B3', 'G3', "G2"], duration: '1m' + '2n' },
    { time: "5:3", note: ['F2', 'G2', "G3"], duration: '4n' },
    { time: "6:0", note: ['F#3', "D3", 'B2'], duration: '1m + 2n' },
    { time: "8:0", note: 'G2', duration: '2m' },
    { time: "10:0", note: 'G2', duration: '2m' },
    { time: "12:0", note: 'G2', duration: '1m + 2n' },
    // { time: "1:3", note: [], duration: '2n' },
]
//{time: "", note: '', duration: ''},

falseSynth.toDestination();

snare.toDestination();

const part = new Tone.Part(((time, note) => {
    // the notes given as the second element in the array
    // will be passed in as the second argument
    falseSynth.triggerAttackRelease(note.note, note.duration, time);
    console.log(note);
}), musical);

const part2 = new Tone.Part(((time, note) => {
    // the notes given as the second element in the array
    // will be passed in as the second argument
    snare.triggerAttackRelease(note.note, note.duration, time);
    console.log(note);
}), snaresMusical);

Tone.Transport.bpm.value = 80;

// part.start(); 



/*

*/