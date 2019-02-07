import startTable from "./startTable";

export const appReducer = (state = startTable(), action) => {
  switch (action.type) {
    case "EDIT_SERVICE":
      const {
        eLabel,
        engineers,
        machine,
        start,
        id,
        duration,
        service
      } = action.payload;
      eLabel.label = `E ${engineers} (${service})`;

      eLabel.x = (start + (start + duration / 24)) / 2;
      eLabel.y = machine;
      let newObj = { ...action.payload, ...eLabel };

      return state.map(service => {
        if (service.id === id) {
          service = { ...service, ...newObj };
        }
        return service;
      });

    default:
      return state;
  }
};
