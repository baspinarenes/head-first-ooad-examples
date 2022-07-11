import Airplane from "./Airplane";

class Jet extends Airplane {
  private static MULTIPLIER: number = 2;

  constructor() {
    super();
  }

  setSpeed(newSpeed: number): void {
    super.setSpeed(newSpeed * Jet.MULTIPLIER);
  }

  accelerate(): void {
    super.setSpeed(super.getSpeed() * 2);
  }
}

export default Jet;
