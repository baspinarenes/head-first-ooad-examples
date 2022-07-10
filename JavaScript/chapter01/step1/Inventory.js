import Guitar from "./Guitar.js";

class Inventory {
  #guitars = [];

  constructor() {}

  addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
    const guitar = new Guitar(
      serialNumber,
      price,
      builder,
      model,
      type,
      backWood,
      topWood
    );

    this.#guitars.push(guitar);
  }

  getGuitar(serialNumber) {
    for (const i = 0; i < this.#guitars; i++) {
      const guitar = this.#guitars[i];

      if (guitar.getSerialNumber() === serialNumber) {
        return guitar;
      }
    }
  }

  search(searchGuitar) {
    for (let i = 0; i < this.#guitars.length; i++) {
      const guitar = this.#guitars[i];

      const builder = searchGuitar.getBuilder();

      if (builder && builder !== "" && builder !== guitar.getBuilder()) {
        continue;
      }

      const model = searchGuitar.getModel();

      if (model && model !== "" && model !== guitar.getModel()) {
        continue;
      }

      const type = searchGuitar.getType();

      if (type && type !== "" && type !== guitar.getType()) {
        continue;
      }

      const backWood = searchGuitar.getBackWood();

      if (backWood && backWood !== "" && backWood !== guitar.getBackWood()) {
        continue;
      }

      const topWood = searchGuitar.getTopWood();

      if (topWood && topWood !== "" && topWood !== guitar.getTopWood()) {
        continue;
      }

      return guitar;
    }

    return null;
  }
}

export default Inventory;
