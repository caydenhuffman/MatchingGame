cols = 3;
colwth = 700 / cols;

rows = 2;
rowwth = 500 / rows;

colorArray = ["orange", "red", "purple"];

function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");
    createArray();
    // array[i][j].setLocation(60 + (colwth * i), 60 + (rowwth * j));
}

function draw() {
    background("pink");
    
}

function clicked() {
    console.log("CLICKED");

}

function createArray() {
    c00 = new Card(); 
    c00.setLocation(60, 60); 


    // array = [c00]; 
}


class Card {
    constructor(xpos, ypos) {
        this.xpos = 0;
        this.ypos = 0;
    }
    setLocation(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }

    drawn() {
        rect(this.xpos, this.ypos, colwth - 20, rowwth - 20);
    }
}



