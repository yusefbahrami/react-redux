import { legacy_createStore } from "redux";
import { fruitReducer } from "./fruit/FruitReducer";

const store = legacy_createStore(fruitReducer);

export default store;
