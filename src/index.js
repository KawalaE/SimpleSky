import { createFavicon, createSearchBar, crateUnitButtons } from "./modules/ui";
import { searchBarHandler, unitHandler, createLoader } from "./modules/logic";

createFavicon();
createSearchBar();
createLoader();
crateUnitButtons();
searchBarHandler("celsius", "kmh");
unitHandler();
