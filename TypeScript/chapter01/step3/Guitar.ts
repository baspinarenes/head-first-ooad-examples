import Type from "./Type";
import Wood from "./Wood";
import Builder from "./Builder";
import GuitarSpec from "./GuitarSpec";

class Guitar {
  private _serialNumber: string;
  private _price: number;
  private _spec: GuitarSpec;

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
    this._spec = new GuitarSpec(builder, model, type, backWood, topWood);
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

  get spec(): GuitarSpec {
    return this._spec;
  }
}

export default Guitar;
