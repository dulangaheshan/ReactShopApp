import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { reducer as formReducer } from "redux-form";
import ShopReducer from "./ShopReducer";
import FoodItemReducer from "./FoodItemReducer";
import LocationReducer from "./LocationReducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: AuthReducer,
  shop: ShopReducer,
  foodItems: FoodItemReducer,
  location: LocationReducer
});

export default rootReducer;
