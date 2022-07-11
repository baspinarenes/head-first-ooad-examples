class GuitarSpec {
  #type;
  #model;
  #builder;
  #topWood;
  #backWood;

  constructor(builder, model, type, backWood, topWood) {
    this.#type = type || Type.UNSPECIFIED;
    this.#model = model;
    this.#builder = builder || Builder.UNSPECIFIED;
    this.#topWood = topWood || Wood.UNSPECIFIED;
    this.#backWood = backWood || Wood.UNSPECIFIED;
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

export default GuitarSpec;
