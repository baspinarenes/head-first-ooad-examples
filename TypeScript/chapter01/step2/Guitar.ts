import Type from "./Type";
import Wood from "./Wood";
import Builder from "./Builder";

class Guitar {
  private _serialNumber: string;
  private _price: number;
  private _builder: Builder;
  private _model: string;
  private _type: Type;
  private _backWood: Wood;
  private _topWood: Wood;

  constructor(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this._serialNumber = serialNumber;
    this._price = price;
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._backWood = backWood;
    this._topWood = topWood;
  }

  get serialNumber(): string {
    return this._serialNumber;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    this._price = newPrice;
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

  get backWood(): Wood {
    return this._backWood ?? Wood.UNSPECIFIED;
  }

  get topWood(): Wood {
    return this._topWood ?? Wood.UNSPECIFIED;
  }
}

export default Guitar;
