import {
  REGISTER_SHOP,
  REGISTER_SHOP_SUCESS,
  REGISTER_OWNER_FAILED
} from "../actions/Types";

const INITIAL_STATE = {
  user: "",
  error: "",
  loading: false,
  shop: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SHOP:
      return { ...state, loading: true, error: "" };

    case REGISTER_SHOP_SUCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case REGISTER_OWNER_FAILED:
      return { ...state, error: "Connection Failed", loading: false };
  }
  return state;
};
