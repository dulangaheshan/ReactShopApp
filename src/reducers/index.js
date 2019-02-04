import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { reducer as formReducer } from "redux-form";

import FoodItemReducer from "./FoodItemReducer";
import LocationReducer from "./LocationReducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: AuthReducer,

  foodItems: FoodItemReducer,
  location: LocationReducer
});

export default rootReducer;
