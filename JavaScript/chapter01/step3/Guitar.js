import GuitarSpec from "./GuitarSpec.js";

class Guitar {
  #serialNumber;
  #price;
  #spec;

  constructor(serialNumber, price, builder, model, type, backWood, topWood) {
    this.#serialNumber = serialNumber;
    this.#price = price;
    this.#spec = new GuitarSpec(builder, model, type, backWood, topWood);
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
