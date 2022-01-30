import { thunk } from "easy-peasy";
import { v4 } from "uuid";

const statusThunks = {
  setAlertThunk: thunk((actions, alert) => {
    alert.id = v4();
    actions.addAlertAction(alert);
    setTimeout(() => {
      actions.removeAlertAction(alert);
      actions.setIsLoadingAction(false);
    }, 5000);
  }),
};

export default statusThunks;
