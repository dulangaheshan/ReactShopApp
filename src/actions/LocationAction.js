import { FETCH_Location, CHANGED_LOCATION } from "./Types";

export function getLocation(loc) {
  console.log(loc);
  return {
    type: FETCH_Location,
    payload: loc
  };
}

// console.log(cord, t, map);
//console.log(t.position);
