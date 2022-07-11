import Guitar from "./Guitar.js";

class Inventory {
  #guitars;

  constructor() {
    this.#guitars = [];
  }

  addGuitar(serialNumber, price, spec) {
    const guitar = new Guitar(serialNumber, price, spec);
    this.#guitars.push(guitar);
  }

  getGuitar(serialNumber) {
    for (const i = 0; i < this.#guitars.length; i++) {
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

      if (guitar.getSpec().matches(searchSpec)) {
        matchedGuitars.push(guitar);
      }
    }

    return matchedGuitars;
  }
}

export default Inventory;
