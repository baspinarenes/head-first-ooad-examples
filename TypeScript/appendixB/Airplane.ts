class Airplane {
  private speed: number;

  public setSpeed(newSpeed: number): void {
    this.speed = newSpeed;
  }

  public getSpeed(): number {
    return this.speed;
  }
}

export default Airplane;
