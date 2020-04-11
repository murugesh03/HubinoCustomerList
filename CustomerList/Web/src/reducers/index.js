import customerForm from "./customerForm";
import { combineReducers } from "redux";

export const allreducers = combineReducers({
  customerform: customerForm,
});
