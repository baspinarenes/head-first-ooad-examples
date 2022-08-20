import Guitar from "./Guitar";

class Inventory {
  private _guitars: Guitar[];

  constructor() {
    this._guitars = [];
  }

  public addGuitar(
    serialNumber: string,
    price: number,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string
  ): void {
    const newGuitar = new Guitar(
      serialNumber,
      price,
      builder,
      model,
      type,
      backWood,
      topWood
    );
    this._guitars.push(newGuitar);
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

  public search(searchGuitar: Guitar): Guitar {
    for (let i = 0; i < this._guitars.length; i++) {
      const guitar = this._guitars[i];
      const builder: string = searchGuitar.builder;

      if (builder && builder !== "" && builder !== guitar.builder) {
        continue;
      }

      const model: string = searchGuitar.model;

      if (model && model !== "" && model !== guitar.model) {
        continue;
      }

      const type: string = searchGuitar.type;

      if (type && type !== "" && type !== guitar.type) {
        continue;
      }

      const backWood: string = searchGuitar.backWood;

      if (backWood && backWood !== "" && type !== guitar.backWood) {
        continue;
      }

      const topWood: string = searchGuitar.topWood;

      if (topWood && topWood !== "" && topWood !== guitar.topWood) {
        continue;
      }

      return guitar;
    }

    return null;
  }
}

export default Inventory;
