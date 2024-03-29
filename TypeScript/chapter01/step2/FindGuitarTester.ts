import Type from "./Type";
import Wood from "./Wood";
import Guitar from "./Guitar";
import Builder from "./Builder";
import Inventory from "./Inventory";

const inventory: Inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes = new Guitar(
  null,
  null,
  Builder.FENDER,
  "Stratocastor",
  Type.ELECTRIC,
  Wood.ALDER,
  Wood.ALDER
);
const matchingGuitars: Guitar[] = inventory.search(whatErinLikes);

if (matchingGuitars.length > 0) {
  console.log("Erin, you might like these guitars:");

  for (let i = 0; i < matchingGuitars.length; i++) {
    const guitar = matchingGuitars[i];

    console.log(`  We have a ${guitar.builder} ${guitar.model} ${guitar.type} guitar:
     ${guitar.backWood} back and sides,
     ${guitar.topWood} top.
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
    Builder.COLLINGS,
    "CJ",
    Type.ACOUSTIC,
    Wood.INDIAN_ROSEWOOD,
    Wood.SITKA
  );
  inventory.addGuitar(
    "V95693",
    1499.95,
    Builder.FENDER,
    "Stratocastor",
    Type.ELECTRIC,
    Wood.ALDER,
    Wood.ALDER
  );
  inventory.addGuitar(
    "V9512",
    1549.95,
    Builder.FENDER,
    "Stratocastor",
    Type.ELECTRIC,
    Wood.ALDER,
    Wood.ALDER
  );
  inventory.addGuitar(
    "122784",
    5495.95,
    Builder.MARTIN,
    "D-18",
    Type.ACOUSTIC,
    Wood.MAHOGANY,
    Wood.ADIRONDACK
  );
  inventory.addGuitar(
    "76531",
    6295.95,
    Builder.MARTIN,
    "OM-28",
    Type.ACOUSTIC,
    Wood.BRAZILIAN_ROSEWOOD,
    Wood.ADIRONDACK
  );
  inventory.addGuitar(
    "70108276",
    2295.95,
    Builder.GIBSON,
    "Les Paul",
    Type.ELECTRIC,
    Wood.MAHOGANY,
    Wood.MAPLE
  );
  inventory.addGuitar(
    "82765501",
    1890.95,
    Builder.GIBSON,
    "SG '61 Reissue",
    Type.ELECTRIC,
    Wood.MAHOGANY,
    Wood.MAHOGANY
  );
  inventory.addGuitar(
    "77023",
    6275.95,
    Builder.MARTIN,
    "D-28",
    Type.ACOUSTIC,
    Wood.BRAZILIAN_ROSEWOOD,
    Wood.ADIRONDACK
  );
  inventory.addGuitar(
    "1092",
    12995.95,
    Builder.OLSON,
    "SJ",
    Type.ACOUSTIC,
    Wood.INDIAN_ROSEWOOD,
    Wood.CEDAR
  );
  inventory.addGuitar(
    "566-62",
    8999.95,
    Builder.RYAN,
    "Cathedral",
    Type.ACOUSTIC,
    Wood.COCOBOLO,
    Wood.CEDAR
  );
  inventory.addGuitar(
    "6 29584",
    2100.95,
    Builder.PRS,
    "Dave Navarro Signature",
    Type.ELECTRIC,
    Wood.MAHOGANY,
    Wood.MAPLE
  );
}
