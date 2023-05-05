cols = 5; //Needs to split it up that much. 
colwth = 700 / cols;

rows = 4;
rowwth = 500 / rows;


function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");
    sc = new Card("green");
    c1 = new Card("yellow", 120);

}

function draw() {
    background("pink");
    // createGrid();

    push();
    noStroke();
    fill("yellow");
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            // rect(60 + (colwth * i), 60 + (rowwth * j), colwth - 20, rowwth - 20);
            createBoxes(60 + (colwth * i), 60 + (rowwth * j)); 
        }
    }
    pop();



    //Rect(X, Y, Width, Height)
    //Want to do a 5 x 4



}

function clicked() {
    console.log(sc.color);
}

function createBoxes(xpos, ypos) {
    rect(xpos, ypos, colwth - 20, rowwth - 20);
}


function createGrid() {
    //Oh Goodness, The Outside Rows, need double the padding. 
    push();
    noFill();
    strokeWeight(5);
    rect(50, 50, 700, 500);
    stroke("teal");



    for (i = 0; i <= cols; i++) {
        line(50 + (colwth * i), 50, 50 + (colwth * i), 550);
    }

    stroke("orange");
    for (i = 0; i <= rows; i++) {
        line(50, 50 + (rowwth * i), 750, 50 + (rowwth * i));
    }

    pop();
}

class Card {

    constructor(color, x, y) {
        this.color = color;
        if (x !== undefined) {
            this.x = x;
        } else {
            this.x = 60;
        }
        this.y = 90;
    }

    setThings() {

    }

    drawRect() {
        push();
        fill(this.color);
        rect(this.x, this.y, 55, 55, 20);
        pop();
    }

}

//Well that would be nice, But IDK How to do all that.

cols = 3;
colwth = 700 / cols;

rows = 2;
rowwth = 500 / rows;

colorArray = ["orange", "red", "purple"];

function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");
    array = [new Card(60 + colwth, 60 + rowwth)];
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            array.push(new Card(60 + (colwth * i), 60 + (rowwth * j)));
        }
    }
}

function draw() {
    background("pink");
    for(i = 0; i < array.length; i++){
        array[i].drawn();
    }
}

function clicked() {
    console.log("CLICKED");
    // array[0] = new Card(60 + (colwth), 60 + (rowwth)); 
}

class Card {
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }

    drawn() {
        rect(this.xpos, this.ypos, colwth - 20, rowwth - 20);
    }
}



