import Guitar from "./Guitar";
import Inventory from "./Inventory";

const inventory: Inventory = new Inventory();
initializeInventory(inventory);

const whatErinLikes = new Guitar(
  null,
  null,
  "fender",
  "Stratocastor",
  "electric",
  "Alder",
  "Alder"
);
const guitar = inventory.search(whatErinLikes);

if (guitar) {
  console.log(`Erin, you might like this ${guitar.builder} ${guitar.model} ${guitar.type} guitar:
 ${guitar.backWood} back and sides, ${guitar.topWood} top.
 You can have it for only $${guitar.price}!`);
} else {
  console.log("Sorry, Erin, we have nothing for you.");
}

function initializeInventory(inventory: Inventory): void {
  inventory.addGuitar(
    "11277",
    3999.95,
    "Collings",
    "CJ",
    "acoustic",
    "Indian Rosewood",
    "Sitka"
  );
  inventory.addGuitar(
    "V95693",
    1499.95,
    "Fender",
    "Stratocastor",
    "electric",
    "Alder",
    "Alder"
  );
  inventory.addGuitar(
    "V9512",
    1549.95,
    "Fender",
    "Stratocastor",
    "electric",
    "Alder",
    "Alder"
  );
  inventory.addGuitar(
    "122784",
    5495.95,
    "Martin",
    "D-18",
    "acoustic",
    "Mahogany",
    "Adirondack"
  );
  inventory.addGuitar(
    "76531",
    6295.95,
    "Martin",
    "OM-28",
    "acoustic",
    "Brazilian Rosewood",
    "Adriondack"
  );
  inventory.addGuitar(
    "70108276",
    2295.95,
    "Gibson",
    "Les Paul",
    "electric",
    "Mahogany",
    "Maple"
  );
  inventory.addGuitar(
    "82765501",
    1890.95,
    "Gibson",
    "SG '61 Reissue",
    "electric",
    "Mahogany",
    "Mahogany"
  );
  inventory.addGuitar(
    "77023",
    6275.95,
    "Martin",
    "D-28",
    "acoustic",
    "Brazilian Rosewood",
    "Adirondack"
  );
  inventory.addGuitar(
    "1092",
    12995.95,
    "Olson",
    "SJ",
    "acoustic",
    "Indian Rosewood",
    "Cedar"
  );
  inventory.addGuitar(
    "566-62",
    8999.95,
    "Ryan",
    "Cathedral",
    "acoustic",
    "Cocobolo",
    "Cedar"
  );
  inventory.addGuitar(
    "6 29584",
    2100.95,
    "PRS",
    "Dave Navarro Signature",
    "electric",
    "Mahogany",
    "Maple"
  );
}
