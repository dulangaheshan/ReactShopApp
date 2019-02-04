import _ from "lodash";
import {
  FETCH_FOODS,
  ADD_FOOD_ITEM_SUCESS,
  ADD_FOOD_ITEMS,
  ADD_FOOD_ITEM_FAILED
} from "../actions/Types";

const INITIAL_STATE = {
  error: "",
  loading: false,
  fooditem: "",
  fooditems: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FOODS:
      //const post = action.payload.data;
      //const newState = { ...state };
      //newState[post.id] = post;
      //return newState;
      //   console.log([action.payload.data.id]);
      console.log(action.payload.data, "reducerrrrr");
      //   console.log(state);

      return _.mapKeys(action.payload.data.value, "FoodItemId");

    case ADD_FOOD_ITEMS:
      return { ...state, loading: true, error: "" };
    case ADD_FOOD_ITEM_SUCESS:
      return { ...state, ...INITIAL_STATE, fooditem: action.payload };
    case ADD_FOOD_ITEM_FAILED:
      return { ...state, error: "Add Food Item Failed", loading: false };
  }
  return state;
};
