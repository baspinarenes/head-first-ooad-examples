class Guitar {
  #type;
  #model;
  #price;
  #builder;
  #topWood;
  #backWood;
  #serialNumber;

  constructor(serialNumber, price, builder, model, type, backWood, topWood) {
    this.#type = type || Type.UNSPECIFIED;
    this.#model = model;
    this.#price = price;
    this.#builder = builder || Builder.UNSPECIFIED;
    this.#topWood = topWood || Wood.UNSPECIFIED;
    this.#backWood = backWood || Wood.UNSPECIFIED;
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
