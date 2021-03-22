let ray;
let boundries = [];
let c;
let amount = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = createGraphics(width, height);
  ray = new Ray(width / 2, height / 2, -PI / 2);
  for (let i = 0; i < amount; i++) {
    boundries.push(new Boundry(random(width), random(height), random(20, 50)));
  }
}

function draw() {
  background(0);
  ray.march(boundries, c);
  // ray.show();
  ray.rotate(0.01);
  // if (ray.a >= PI + PI / 2) {
  //   resetSketch();
  // }
  for (const boundry of boundries) {
    boundry.show();
  }
  // image(c, 0, 0);
}

function signedDist(x1, y1, x2, y2, r) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const d = sqrt((dx * dx) + (dy * dy));
  return d - r;
}

// function resetSketch() {
//   c = createGraphics(width, height);
//   let boundries = [];
//   for (let i = 0; i < amount; i++) {
//     boundries.push(new Boundry(random(width), random(height), random(10, 25)));
//   }
// }
