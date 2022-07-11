import Type from "./Type.js";
import Wood from "./Wood.js";
import Builder from "./Builder.js";

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
    this.#builder = builder ?? Builder.UNSPECIFIED;
    this.#model = model;
    this.#type = type ?? Type.UNSPECIFIED;
    this.#backWood = backWood ?? Wood.UNSPECIFIED;
    this.#topWood = topWood ?? Wood.UNSPECIFIED;
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
