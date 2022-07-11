import Type from "./Type";
import Wood from "./Wood";
import Builder from "./Builder";

class GuitarSpec {
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;
  private numStrings: number;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    numStrings: number,
    backWood: Wood,
    topWood: Wood
  ) {
    this.builder = builder ?? Builder.UNSPECIFIED;
    this.model = model;
    this.type = type ?? Type.UNSPECIFIED;
    this.numStrings = numStrings;
    this.backWood = backWood ?? Wood.UNSPECIFIED;
    this.topWood = topWood ?? Wood.UNSPECIFIED;
  }

  public getBuilder(): Builder {
    return this.builder;
  }

  public getModel(): string {
    return this.model;
  }

  public getType(): Type {
    return this.type;
  }

  public getNumStrings() {
    return this.numStrings;
  }

  public getBackWood(): Wood {
    return this.backWood;
  }

  public getTopWood(): Wood {
    return this.topWood;
  }

  public matches(otherSpec: GuitarSpec) {
    if (this.builder != otherSpec.builder) {
      return false;
    }

    if (
      this.model &&
      this.model !== "" &&
      this.model.toLowerCase() !== otherSpec.getModel().toLowerCase()
    ) {
      return false;
    }

    if (this.type !== otherSpec.getType()) {
      return false;
    }

    if (this.numStrings !== otherSpec.getNumStrings()) {
      return false;
    }

    if (this.backWood !== otherSpec.getBackWood()) {
      return false;
    }

    if (this.topWood !== otherSpec.getTopWood()) {
      return false;
    }

    return true;
  }
}

export default GuitarSpec;
