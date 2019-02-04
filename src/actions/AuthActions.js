import axios from "axios";
import {
  LOGIN_ADMIN,
  LOGIN_ADMIN_FAIL,
  LOGIN_ADMIN_SUCESS,
  REGISTER_OWNER,
  REGISTER_OWNER_SUCESS,
  REGISTER_OWNER_FAILED,
  ADD_SHOP,
  LOGOUT_USER
} from "./Types"; //https://localhost:44371/api/

const ROOT_URL = "https://handallo.azurewebsites.net/api/"; //https://handallo.azurewebsites.net/api/Shop/register
//const ROOT_URL = "https://localhost:44371/api/";
export function LoginAction(values, callback) {
  console.log(values);

  const body = {
    email: values.email,
    pass_word: values.password
  };
  console.log(body);
  var headers = {
    "Content-Type": "application/json"
  };

  return dispatch => {
    dispatch({ type: LOGIN_ADMIN });
    axios
      .post(`${ROOT_URL}ShopOwner/Login`, body, { headers: headers })
      .then(response => {
        if (response.status === 204) {
          addShop(dispatch);
        }
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          const data = response.data;

          loginSucess(dispatch, data);
        } else {
          loginFailed(dispatch);
        }
      })
      .then(() => callback())
      .catch(() => loginFailed(dispatch));
  };
}

export function RegisterOwnerAction(values) {
  console.log(values);
  const body = {
    firstname: values.firstname,
    lastname: values.lastname,
    mobileno: values.contactnumber,
    email: values.email,
    pass_word: values.pass_word
  };
  console.log(body);
  var headers = {
    "Content-Type": "application/json"
  };
  //https://localhost:44371
  return dispatch => {
    dispatch({ type: REGISTER_OWNER }); //https://handallo.azurewebsites.net/api/ShopOwner/register
    axios
      .post(`https://handallo.azurewebsites.net/api/ShopOwner/register`, body, {
        //.post(`https://localhost:44371/api/ShopOwner/register`, body, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          console.log(response);
          const data = response.data;

          regesterSucess(dispatch, data);
        } else {
          registerFailed(dispatch);
        }
      })
      //.then(() => callback())
      .catch(() => registerFailed(dispatch));
  };
}

export default function LogoutAction(callback) {
  localStorage.clear();
}

const regesterSucess = (dispatch, data) => {
  //localStorage.set("token", data.access_token);
  localStorage.setItem("token", data.token);
  //localStorage.get('itemName')
  //console.log(data);
  //console.log(localStorage.get("token"));
  // var jwtDecode = require("jwt-decode");
  // var decoded = jwtDecode(data.token);
  // //var user = decoded.sub;
  // console.log(decoded);
  dispatch({
    type: REGISTER_OWNER_SUCESS,
    payload: data.token
  });
};

const registerFailed = dispatch => {
  //console.log(response);
  dispatch({ type: REGISTER_OWNER_FAILED });
};

const loginSucess = (dispatch, data) => {
  //localStorage.set("token", data.access_token);
  localStorage.setItem("token", data.token);
  //localStorage.get('itemName')
  //console.log(data);
  //console.log(localStorage.get("token"));
  var jwtDecode = require("jwt-decode");
  var decoded = jwtDecode(data.token);
  //var user = decoded.sub;
  console.log(decoded);
  dispatch({
    type: LOGIN_ADMIN_SUCESS,
    payload: data.token
  });
};

const loginFailed = dispatch => {
  console.log("fgcgh");
  dispatch({ type: LOGIN_ADMIN_FAIL });
};

const addShop = dispatch => {
  dispatch({ type: ADD_SHOP });
};
