import Airplane from "./Airplane";
import Jet from "./Jet";

const biplane: Airplane = new Airplane();
biplane.speed = 212;
console.log(biplane.speed);

const boeing: Jet = new Jet();
boeing.speed = 422;
console.log(boeing.speed);

let x: number = 0;

while (x < 4) {
  boeing.accelerate();
  console.log(boeing.speed);

  if (boeing.speed > 5000) {
    biplane.speed = biplane.speed * 2;
  } else {
    boeing.accelerate();
  }
  x++;
}

console.log(biplane.speed);
