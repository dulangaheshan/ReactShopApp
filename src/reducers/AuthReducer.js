import {
  LOGIN_ADMIN,
  LOGIN_ADMIN_SUCESS,
  LOGIN_ADMIN_FAIL,
  REGISTER_OWNER,
  REGISTER_OWNER_SUCESS,
  REGISTER_OWNER_FAILED,
  ADD_SHOP
} from "../actions/Types";

const INITIAL_STATE = {
  user: "",
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action.payload);
  switch (action.type) {
    case LOGIN_ADMIN: {
      console.log(action.type + action.payload);
      return { ...state, loading: true, error: "" };
    }
    case LOGIN_ADMIN_SUCESS:
      console.log(action.payload.data);
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_ADMIN_FAIL:
      return { ...state, error: "INCORRECT EMAIL OR PASSWORD", loading: false };
    case REGISTER_OWNER: {
      console.log(action.type + action.payload);
      return { ...state, loading: true, error: "" };
    }
    case REGISTER_OWNER_SUCESS:
      console.log(action.payload.data);
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case REGISTER_OWNER_FAILED:
      return { ...state, error: "User Already Registered", loading: false };
    case ADD_SHOP:
      return { ...state, error: "Add Your Shop to Continue", loading: false };
  }
  return state;
};
