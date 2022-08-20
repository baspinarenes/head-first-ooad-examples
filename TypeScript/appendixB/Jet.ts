import Airplane from "./Airplane";

class Jet extends Airplane {
  private static readonly MULTIPLIER: number = 2;

  constructor() {
    super();
  }

  set speed(newSpeed: number) {
    super.speed = newSpeed * Jet.MULTIPLIER;
  }

  get speed(): number {
    return super.speed;
  }

  accelerate(): void {
    super.speed = super.speed * 2;
  }
}

export default Jet;
