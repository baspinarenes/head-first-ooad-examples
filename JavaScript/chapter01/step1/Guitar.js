class Guitar {
  #serialNumber;
  #price;
  #builder;
  #model;
  #type;
  #backWood;
  #topWood;

  constructor(serialNumber, price, builder, model, type, backWood, topWood) {
    this.#serialNumber = serialNumber;
    this.#price = price;
    this.#builder = builder;
    this.#model = model;
    this.#type = type;
    this.#backWood = backWood;
    this.#topWood = topWood;
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
