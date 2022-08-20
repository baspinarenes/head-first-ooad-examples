class Airplane {
  private _speed: number;

  set speed(newSpeed: number) {
    this._speed = newSpeed;
  }

  get speed(): number {
    return this._speed;
  }
}

export default Airplane;
