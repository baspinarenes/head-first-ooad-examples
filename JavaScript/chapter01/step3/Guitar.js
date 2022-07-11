import GuitarSpec from "./GuitarSpec.js";

class Guitar {
  #spec;
  #price;
  #serialNumber;

  constructor(serialNumber, price, builder, model, type, backWood, topWood) {
    this.#spec = new GuitarSpec(builder, model, type, backWood, topWood);
    this.#price = price;
    this.#serialNumber = serialNumber;
  }

  getSerialNumber() {
    return this.#serialNumber;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(newPrice) {
    this.#price = newPrice;
  }

  getSpec() {
    return this.#spec;
  }
}

export default Guitar;
