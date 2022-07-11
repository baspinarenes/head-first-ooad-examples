import Builder from "./Builder.js";
import Type from "./Type.js";
import Wood from "./Wood.js";

class GuitarSpec {
  #type;
  #model;
  #builder;
  #topWood;
  #backWood;
  #numStrings;

  constructor(builder, model, type, numStrings, backWood, topWood) {
    this.#type = type || Type.UNSPECIFIED;
    this.#model = model;
    this.#builder = builder || Builder.UNSPECIFIED;
    this.#topWood = topWood || Wood.UNSPECIFIED;
    this.#backWood = backWood || Wood.UNSPECIFIED;
    this.#numStrings = numStrings;
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

  getNumStrings() {
    return this.#numStrings;
  }

  getBackWood() {
    return this.#backWood;
  }

  getTopWood() {
    return this.#topWood;
  }

  matches(otherSpec) {
    if (this.#builder !== otherSpec.getBuilder()) {
      return false;
    }

    if (
      this.#model &&
      this.#model !== "" &&
      this.#model.toLowerCase() !== otherSpec.getModel().toLowerCase()
    ) {
      return false;
    }

    if (this.#type !== otherSpec.getType()) {
      return false;
    }

    if (this.#numStrings !== otherSpec.getNumStrings()) {
      return false;
    }

    if (this.#backWood !== otherSpec.getBackWood()) {
      return false;
    }

    if (this.#topWood !== otherSpec.getTopWood()) {
      return false;
    }

    return true;
  }
}

export default GuitarSpec;
