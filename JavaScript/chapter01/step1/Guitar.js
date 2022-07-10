class Guitar {
  #type;
  #model;
  #price;
  #builder;
  #topWood;
  #backWood;
  #serialNumber;

  constructor(serialNumber, price, builder, model, type, backWood, topWood) {
    this.#type = type;
    this.#model = model;
    this.#price = price;
    this.#builder = builder;
    this.#topWood = topWood;
    this.#backWood = backWood;
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

  getBuilder() {
    return this.#builder;
  }

  getModel() {
    return this.#model;
  }

  getType() {
    return this.#type;
  }

  getBackWood() {
    return this.#backWood;
  }

  getTopWood() {
    return this.#topWood;
  }
}

export default Guitar;
