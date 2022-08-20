import Guitar from "./Guitar";
import GuitarSpec from "./GuitarSpec";

class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  public addGuitar(
    serialNumber: string,
    price: number,
    spec: GuitarSpec
  ): void {
    const guitar = new Guitar(serialNumber, price, spec);
    this.guitars.push(guitar);
  }

  public getGuitar(serialNumber: string): Guitar {
    for (let i = 0; i < this.guitars.length; i++) {
      const guitar = this.guitars[i];

      if (guitar.serialNumber === serialNumber) {
        return guitar;
      }
    }

    return null;
  }

  public search(searchSpec: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = [];

    for (let i = 0; i < this.guitars.length; i++) {
      const guitar = this.guitars[i];

      if (guitar.spec.matches(searchSpec)) {
        matchingGuitars.push(guitar);
      }
    }

    return matchingGuitars;
  }
}

export default Inventory;
