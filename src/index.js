import { createFavicon, createSearchBar, crateUnitButtons } from "./modules/ui";
import { searchBarHandler, unitHandler } from "./modules/logic";

createFavicon();
createSearchBar();
crateUnitButtons();
searchBarHandler("celsius");
unitHandler();
