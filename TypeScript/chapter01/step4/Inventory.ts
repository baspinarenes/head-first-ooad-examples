import Type from "./Type";
import Wood from "./Wood";
import Guitar from "./Guitar";
import Builder from "./Builder";
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

      if (guitar.getSerialNumber() === serialNumber) {
        return guitar;
      }
    }

    return null;
  }

  public search(searchSpec: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = [];

    for (let i = 0; i < this.guitars.length; i++) {
      const guitar = this.guitars[i];

      if (guitar.getSpec().matches(searchSpec)) {
        matchingGuitars.push(guitar);
      }
    }

    return matchingGuitars;
  }
}

export default Inventory;
