import createUI from "./modules/ui";
import { searchBarHandler, getWMO } from "./modules/logic";

createUI();
searchBarHandler();
console.log(getWMO(2));

