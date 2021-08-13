import { combineReducers, createStore } from "redux";
import { DatVePhimReducer } from "./reducers/DatVePhimReducer";
const rootReducer = combineReducers({
  DatVePhimReducer,
});
export const store = createStore(rootReducer);
