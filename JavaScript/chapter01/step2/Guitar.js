import Builder from "./Builder.js";
import Type from "./Type.js";
import Wood from "./Wood.js";

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
    return this.#builder || Builder.UNSPECIFIED;
  }

  getModel() {
    return this.#model;
  }

  getType() {
    return this.#type || Type.UNSPECIFIED;
  }

  getBackWood() {
    return this.#backWood || Wood.UNSPECIFIED;
  }

  getTopWood() {
    return this.#topWood || Wood.UNSPECIFIED;
  }
}

export default Guitar;
