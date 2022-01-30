import statusActions from "./actions";
import statusState from "./state";
import statusThunks from "./thunks";

const statusStore = {
  ...statusState,
  ...statusActions,
  ...statusThunks,
};

export default statusStore;
