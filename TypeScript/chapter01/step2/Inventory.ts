import Type from "./Type";
import Wood from "./Wood";
import Guitar from "./Guitar";
import Builder from "./Builder";

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

  public search(searchGuitar: Guitar): Guitar[] {
    const matchingGuitars: Guitar[] = [];

    for (let i = 0; i < this.guitars.length; i++) {
      const guitar = this.guitars[i];

      if (searchGuitar.getBuilder() !== guitar.getBuilder()) {
        continue;
      }

      const model: string = searchGuitar.getModel().toLowerCase();

      if (model && model !== "" && model !== guitar.getModel().toLowerCase()) {
        continue;
      }

      if (searchGuitar.getType() !== guitar.getType()) {
        continue;
      }

      if (searchGuitar.getBackWood() !== guitar.getBackWood()) {
        continue;
      }

      if (searchGuitar.getTopWood() !== guitar.getTopWood()) {
        continue;
      }

      matchingGuitars.push(guitar);
    }

    return matchingGuitars;
  }
}

export default Inventory;
