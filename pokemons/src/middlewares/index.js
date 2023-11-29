export const logger = (store) => (next) => (action) => {
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{name: "eddi"}, ...actionInfo.action.payload];
  const updateAcctionInfo = {
    ...actionInfo,
    action: {...actionInfo.action, payload: featured},
  };
  next(updateAcctionInfo);
};
