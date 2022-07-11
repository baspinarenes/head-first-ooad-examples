class GuitarSpec {
  #builder;
  #model;
  #type;
  #backWood;
  #topWood;

  constructor(builder, model, type, backWood, topWood) {
    this.#builder = builder ?? Builder.UNSPECIFIED;
    this.#model = model;
    this.#type = type ?? Type.UNSPECIFIED;
    this.#backWood = backWood ?? Wood.UNSPECIFIED;
    this.#topWood = topWood ?? Wood.UNSPECIFIED;
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
