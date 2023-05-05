
function setup() {
    canv = createCanvas(800, 600).parent("sketchHolder");
    s = new shape(struct);
    s.x = 200; 
    // console.log("Structure x: " + struct.x + "\nClass x: " + s.x); 
    s2 = new shape({color: "green", x: 450});
}

function draw() {
    background("pink");
    s.draw();
    s2.draw();
}

struct = {
    color: "blue",
    x: 0, 
    draw: function () {
        fill(this.color); 
        rect(this.x, 200, 100, 100); 
    }
}


class shape {
    constructor(struct) {
        this.color = struct.color;
        // this.draw = struct.draw; 
        if(struct.draw != undefined){
            this.draw = struct.draw; 
        }
        this.x = struct.x; 
    }

    draw() {
        fill(this.color); 
        circle(this.x, 250, 100);
    }
}