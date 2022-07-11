import Type from "./Type";
import Wood from "./Wood";
import Builder from "./Builder";

class GuitarSpec {
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this.builder = builder ?? Builder.UNSPECIFIED;
    this.model = model;
    this.type = type ?? Type.UNSPECIFIED;
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

  public getBackWood(): Wood {
    return this.backWood;
  }

  public getTopWood(): Wood {
    return this.topWood;
  }
}

export default GuitarSpec;
