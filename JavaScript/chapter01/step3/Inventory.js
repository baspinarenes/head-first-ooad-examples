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

  search(searchSpec) {
    const matchedGuitars = [];

    for (let i = 0; i < this.#guitars.length; i++) {
      const guitar = this.#guitars[i];
      const guitarSpec = guitar.getSpec();

      if (searchSpec.getBuilder() !== guitarSpec.getBuilder()) {
        continue;
      }

      const model = searchSpec.getModel().toLowerCase();

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

      matchedGuitars.push(guitar);
    }

    return matchedGuitars;
  }
}

export default Inventory;
