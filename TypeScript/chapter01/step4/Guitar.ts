import Type from "./Type";
import Wood from "./Wood";
import Builder from "./Builder";
import GuitarSpec from "./GuitarSpec";

class Guitar {
  private serialNumber: string;
  private price: number;
  private spec: GuitarSpec;

  constructor(serialNumber: string, price: number, spec: GuitarSpec) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.spec = spec;
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

  public getSpec(): GuitarSpec {
    return this.spec;
  }
}

export default Guitar;
