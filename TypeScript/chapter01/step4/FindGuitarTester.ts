import Type from "./Type";
import Wood from "./Wood";
import Guitar from "./Guitar";
import Builder from "./Builder";
import Inventory from "./Inventory";
import GuitarSpec from "./GuitarSpec";

const inventory: Inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes: GuitarSpec = new GuitarSpec(
  Builder.FENDER,
  "Stratocastor",
  Type.ELECTRIC,
  6,
  Wood.ALDER,
  Wood.ALDER
);
const matchingGuitars: Guitar[] = inventory.search(whatErinLikes);

if (matchingGuitars.length > 0) {
  console.log("Erin, you might like these guitars:");

  for (let i = 0; i < matchingGuitars.length; i++) {
    const guitar = matchingGuitars[i];
    const spec = guitar.spec;

    console.log(`  We have a ${spec.builder} ${spec.model} ${spec.type} guitar:
     ${spec.backWood} back and sides,
     ${spec.topWood} top.
  You can have it for only $${guitar.price}!
  ----`);
  }
} else {
  console.log("Sorry, Erin, we have nothing for you.");
}

function initializeInventory(inventory: Inventory): void {
  inventory.addGuitar(
    "11277",
    3999.95,
    new GuitarSpec(
      Builder.COLLINGS,
      "CJ",
      Type.ACOUSTIC,
      6,
      Wood.INDIAN_ROSEWOOD,
      Wood.SITKA
    )
  );
  inventory.addGuitar(
    "V95693",
    1499.95,
    new GuitarSpec(
      Builder.FENDER,
      "Stratocastor",
      Type.ELECTRIC,
      6,
      Wood.ALDER,
      Wood.ALDER
    )
  );
  inventory.addGuitar(
    "V9512",
    1549.95,
    new GuitarSpec(
      Builder.FENDER,
      "Stratocastor",
      Type.ELECTRIC,
      6,
      Wood.ALDER,
      Wood.ALDER
    )
  );
  inventory.addGuitar(
    "122784",
    5495.95,
    new GuitarSpec(
      Builder.MARTIN,
      "D-18",
      Type.ACOUSTIC,
      6,
      Wood.MAHOGANY,
      Wood.ADIRONDACK
    )
  );
  inventory.addGuitar(
    "76531",
    6295.95,
    new GuitarSpec(
      Builder.MARTIN,
      "OM-28",
      Type.ACOUSTIC,
      6,
      Wood.BRAZILIAN_ROSEWOOD,
      Wood.ADIRONDACK
    )
  );
  inventory.addGuitar(
    "70108276",
    2295.95,
    new GuitarSpec(
      Builder.GIBSON,
      "Les Paul",
      Type.ELECTRIC,
      6,
      Wood.MAHOGANY,
      Wood.MAPLE
    )
  );
  inventory.addGuitar(
    "82765501",
    1890.95,
    new GuitarSpec(
      Builder.GIBSON,
      "SG '61 Reissue",
      Type.ELECTRIC,
      6,
      Wood.MAHOGANY,
      Wood.MAHOGANY
    )
  );
  inventory.addGuitar(
    "77023",
    6275.95,
    new GuitarSpec(
      Builder.MARTIN,
      "D-28",
      Type.ACOUSTIC,
      6,
      Wood.BRAZILIAN_ROSEWOOD,
      Wood.ADIRONDACK
    )
  );
  inventory.addGuitar(
    "1092",
    12995.95,
    new GuitarSpec(
      Builder.OLSON,
      "SJ",
      Type.ACOUSTIC,
      12,
      Wood.INDIAN_ROSEWOOD,
      Wood.CEDAR
    )
  );
  inventory.addGuitar(
    "566-62",
    8999.95,
    new GuitarSpec(
      Builder.RYAN,
      "Cathedral",
      Type.ACOUSTIC,
      12,
      Wood.COCOBOLO,
      Wood.CEDAR
    )
  );
  inventory.addGuitar(
    "6 29584",
    2100.95,
    new GuitarSpec(
      Builder.PRS,
      "Dave Navarro Signature",
      Type.ELECTRIC,
      6,
      Wood.MAHOGANY,
      Wood.MAPLE
    )
  );
}
