import Type from "./Type";
import Wood from "./Wood";
import Builder from "./Builder";

class GuitarSpec {
  private _builder: Builder;
  private _model: string;
  private _type: Type;
  private _backWood: Wood;
  private _topWood: Wood;
  private _numStrings: number;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    numStrings: number,
    backWood: Wood,
    topWood: Wood
  ) {
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._numStrings = numStrings;
    this._backWood = backWood;
    this._topWood = topWood;
  }

  get builder(): Builder {
    return this._builder ?? Builder.UNSPECIFIED;
  }

  get model(): string {
    return this._model;
  }

  get type(): Type {
    return this._type ?? Type.UNSPECIFIED;
  }

  get numStrings(): number {
    return this._numStrings;
  }

  get backWood(): Wood {
    return this._backWood ?? Wood.UNSPECIFIED;
  }

  get topWood(): Wood {
    return this._topWood ?? Wood.UNSPECIFIED;
  }

  public matches(otherSpec: GuitarSpec) {
    if (this.builder != otherSpec.builder) {
      return false;
    }

    if (
      this.model &&
      this.model !== "" &&
      this.model.toLowerCase() !== otherSpec.model.toLowerCase()
    ) {
      return false;
    }

    if (this.type !== otherSpec.type) {
      return false;
    }

    if (this.numStrings !== otherSpec.numStrings) {
      return false;
    }

    if (this.backWood !== otherSpec.backWood) {
      return false;
    }

    if (this.topWood !== otherSpec.topWood) {
      return false;
    }

    return true;
  }
}

export default GuitarSpec;
