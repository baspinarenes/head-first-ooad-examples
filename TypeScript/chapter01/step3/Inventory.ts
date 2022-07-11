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
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ): void {
    const guitar = new Guitar(
      serialNumber,
      price,
      builder,
      model,
      type,
      backWood,
      topWood
    );
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
      const guitar: Guitar = this.guitars[i];
      const guitarSpec: GuitarSpec = guitar.getSpec();

      if (searchSpec.getBuilder() !== guitarSpec.getBuilder()) {
        continue;
      }

      const model: string = searchSpec.getModel().toLowerCase();

      if (
        model &&
        model !== "" &&
        model !== guitarSpec.getModel().toLowerCase()
      ) {
        continue;
      }

      if (searchSpec.getType() !== guitarSpec.getType()) {
        continue;
      }

      if (searchSpec.getBackWood() !== guitarSpec.getBackWood()) {
        continue;
      }

      if (searchSpec.getTopWood() !== guitarSpec.getTopWood()) {
        continue;
      }

      matchingGuitars.push(guitar);
    }

    return matchingGuitars;
  }
}

export default Inventory;
