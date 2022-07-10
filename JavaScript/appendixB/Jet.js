import Airplane from "./Airplane.js";

class Jet extends Airplane {
  #MULTIPLIER = 2;

  constructor() {
    super();
  }

  static get MULTIPLIER() {
    return this.#MULTIPLIER;
  }

  setSpeed(newSpeed) {
    super.setSpeed(newSpeed * this.#MULTIPLIER);
  }

  accelerate() {
    super.setSpeed(super.getSpeed() * 2);
  }
}

export default Jet;
