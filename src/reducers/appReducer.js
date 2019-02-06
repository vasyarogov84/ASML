import startTable from "./startTable";

export const appReducer = (state = startTable(), action) => {
  switch (action.type) {
    case "EDIT_SERVICE":
      return state;
    default:
      return state;
  }
};
