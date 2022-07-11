class Airplane {
  #speed;

  setSpeed(newSpeed) {
    this.#speed = newSpeed;
  }

  getSpeed() {
    return this.#speed;
  }
}

export default Airplane;
