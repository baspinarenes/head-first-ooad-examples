import Guitar from "./Guitar";

class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
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
    this.guitars.push(newGuitar);
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

  public search(searchGuitar: Guitar): Guitar {
    for (let i = 0; i < this.guitars.length; i++) {
      const guitar = this.guitars[i];
      const builder: string = searchGuitar.getBuilder();

      if (builder && builder !== "" && builder !== guitar.getBuilder()) {
        continue;
      }

      const model: string = searchGuitar.getModel();

      if (model && model !== "" && model !== guitar.getModel()) {
        continue;
      }

      const type: string = searchGuitar.getType();

      if (type && type !== "" && type !== guitar.getType()) {
        continue;
      }

      const backWood: string = searchGuitar.getBackWood();

      if (backWood && backWood !== "" && type !== guitar.getBackWood()) {
        continue;
      }

      const topWood: string = searchGuitar.getTopWood();

      if (topWood && topWood !== "" && topWood !== guitar.getTopWood()) {
        continue;
      }

      return guitar;
    }

    return null;
  }
}

export default Inventory;
