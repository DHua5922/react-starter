import { action } from "easy-peasy";

const statusActions = {
  setIsLoadingAction: action((state, isLoading) => {
    state.isLoading = isLoading;
  }),
  addAlertAction: action((state, alert) => {
    state.alerts = [...state.alerts, alert];
  }),
  removeAlertAction: action((state, alert) => {
    state.alerts = state.alerts.filter((a) => a.id !== alert.id);
  }),
};

export default statusActions;
