import { ACTIONS } from "../script/constant";

export function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];
    case ACTIONS.DELETE:
      return state.filter((task) => task.id !== action.payload);
    case ACTIONS.EDIT:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task
      );
    default:
      return state;
  }
}
