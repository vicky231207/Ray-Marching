class Boundry {
    constructor(x, y, r){
      this.x = x;
      this.y = y;
      this.r = r;
    }
    show(){
      noFill();
      stroke(255, 100);
      strokeWeight(2);
      ellipse(this.x, this.y, this.r*2);
    }
  }