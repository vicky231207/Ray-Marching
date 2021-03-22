class Ray {
    constructor(x, y, a, r = 100) {
      this.r = r;
      this.a = a;
      this.x1 = x;
      this.y1 = y;
      this.x2 = this.r * cos(this.a);
      this.y2 = this.r * sin(this.a);
    }
    rotate(angle) {
      this.a += angle;
    }
    march(boundries, c) {
      this.x2 = this.r * cos(this.a);
      this.y2 = this.r * sin(this.a);
      let cx = this.x1;
      let cy = this.y1;
      let counter = 0;
      while (true) {
        let record = Infinity;
        for (const boundry of boundries) {
          const d = signedDist(cx, cy, boundry.x, boundry.y, boundry.r);
          if (d < record) {
            record = d;
          }
  
        }
        this.r = record;
        if (record < 1) break;
        if (cx < 0 || cx > width || cy < 0 || cy > height) break;
  
        //       push();
        //       translate(cx, cy);
        //       stroke(255, 0, 0);
        //       strokeWeight(2);
        noFill();
        //       line(0, 0, this.x2, this.y2);
        stroke(255, 255, 0);
        ellipse(cx, cy, this.r * 2)
        //       pop();
        //       stroke(255, 0, 0);
        //       line(0, 0, this.x2, this.y2);
        const vx = record * cos(this.a);
        const vy = record * sin(this.a);
        cx += vx;
        cy += vy;
        counter++;
      }
      // console.log(cx)
  
      // push();
      // translate(this.x1,this.y1);
      stroke(255, 0, 0);
      strokeWeight(2);
      line(this.x1, this.y1, cx, cy);
      noStroke();
      fill(0, 255, 255);
      ellipse(cx, cy, 10);
      if (!(cx < 0 || cx > width || cy < 0 || cy > height)) {
        c.fill(255);
        c.noStroke();
        c.ellipse(cx, cy, 10);
      }
      // pop()
      // noLoop();
  
      // console.log(record);
    }
    // show() {
    // }
  }