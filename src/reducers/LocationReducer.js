import { FETCH_Location, CHANGED_LOCATION } from "../actions/Types";

const INITIAL_STATE = {
  coords: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_Location:
      //console.log(action.type, "0jkhkj", action.payload);
      return { ...state, ...INITIAL_STATE, coords: action.payload };
  }

  return state;
};
