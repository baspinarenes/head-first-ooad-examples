import Type from "./Type";
import Wood from "./Wood";
import Builder from "./Builder";

class Guitar {
  private serialNumber: string;
  private price: number;
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;

  constructor(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.builder = builder ?? Builder.UNSPECIFIED;
    this.model = model;
    this.type = type ?? Type.UNSPECIFIED;
    this.backWood = backWood ?? Wood.UNSPECIFIED;
    this.topWood = topWood ?? Wood.UNSPECIFIED;
  }

  public getSerialNumber(): string {
    return this.serialNumber;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(newPrice: number): void {
    this.price = newPrice;
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

export default Guitar;
