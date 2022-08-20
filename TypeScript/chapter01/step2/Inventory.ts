import Type from "./Type";
import Wood from "./Wood";
import Guitar from "./Guitar";
import Builder from "./Builder";

class Inventory {
  private _guitars: Guitar[];

  constructor() {
    this._guitars = [];
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
    this._guitars.push(guitar);
  }

  public getGuitar(serialNumber: string): Guitar {
    for (let i = 0; i < this._guitars.length; i++) {
      const guitar = this._guitars[i];

      if (guitar.serialNumber === serialNumber) {
        return guitar;
      }
    }

    return null;
  }

  public search(searchGuitar: Guitar): Guitar[] {
    const matchingGuitars: Guitar[] = [];

    for (let i = 0; i < this._guitars.length; i++) {
      const guitar = this._guitars[i];

      if (searchGuitar.builder !== guitar.builder) {
        continue;
      }

      const model: string = searchGuitar.model.toLowerCase();

      if (model && model !== "" && model !== guitar.model.toLowerCase()) {
        continue;
      }

      if (searchGuitar.type !== guitar.type) {
        continue;
      }

      if (searchGuitar.backWood !== guitar.backWood) {
        continue;
      }

      if (searchGuitar.topWood !== guitar.topWood) {
        continue;
      }

      matchingGuitars.push(guitar);
    }

    return matchingGuitars;
  }
}

export default Inventory;
