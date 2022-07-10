class Airplane {
  #speed;

  constructor(speed) {
    this.#speed = speed;
  }

  setSpeed(newSpeed) {
    this.#speed = newSpeed;
  }

  getSpeed() {
    return this.#speed;
  }
}

export default Airplane;
