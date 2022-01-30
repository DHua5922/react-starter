import { createStore } from "easy-peasy";
import statusStore from "./status";

const store = createStore({
  ...statusStore,
});

export default store;
