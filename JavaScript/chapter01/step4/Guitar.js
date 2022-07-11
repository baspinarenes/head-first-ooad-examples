class Guitar {
  #spec;
  #price;
  #serialNumber;

  constructor(serialNumber, price, spec) {
    this.#price = price;
    this.#serialNumber = serialNumber;
    this.#spec = spec;
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
