import Type from "./Type";
import Wood from "./Wood";
import Guitar from "./Guitar";
import Builder from "./Builder";
import GuitarSpec from "./GuitarSpec";

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

  public search(searchSpec: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = [];

    for (let i = 0; i < this._guitars.length; i++) {
      const guitar: Guitar = this._guitars[i];
      const guitarSpec: GuitarSpec = guitar.spec;

      if (searchSpec.builder !== guitarSpec.builder) {
        continue;
      }

      const model: string = searchSpec.model.toLowerCase();

      if (model && model !== "" && model !== guitarSpec.model.toLowerCase()) {
        continue;
      }

      if (searchSpec.type !== guitarSpec.type) {
        continue;
      }

      if (searchSpec.backWood !== guitarSpec.backWood) {
        continue;
      }

      if (searchSpec.topWood !== guitarSpec.topWood) {
        continue;
      }

      matchingGuitars.push(guitar);
    }

    return matchingGuitars;
  }
}

export default Inventory;
