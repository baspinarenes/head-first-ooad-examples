import Guitar from "./Guitar.js";

class Inventory {
  #guitars;

  constructor() {
    this.#guitars = [];
  }

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
    for (let i = 0; i < this.#guitars.length; i++) {
      const guitar = this.#guitars[i];

      if (guitar.getSerialNumber() === serialNumber) {
        return guitar;
      }
    }

    return null;
  }

  search(searchGuitar) {
    const matchingGuitars = [];

    for (let i = 0; i < this.#guitars.length; i++) {
      const guitar = this.#guitars[i];

      if (searchGuitar.getBuilder() !== guitar.getBuilder()) {
        continue;
      }

      const model = searchGuitar.getModel().toLowerCase();

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
