import Airplane from "./Airplane";
import Jet from "./Jet";

const biplane: Airplane = new Airplane();
biplane.setSpeed(212);
console.log(biplane.getSpeed());

const boeing: Jet = new Jet();
boeing.setSpeed(422);
console.log(boeing.getSpeed());

let x: number = 0;

while (x < 4) {
  boeing.accelerate();
  console.log(boeing.getSpeed());

  if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2);
  } else {
    boeing.accelerate();
  }
  x++;
}

console.log(biplane.getSpeed());
