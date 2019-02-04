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

export function RegisterOwnerAction(values, callback) {
  console.log(values);
  const body = {
    firstName: values.firstname,
    lastName: values.lastname,
    mobileNo: values.contactnumber,
    email: values.email,
    password: values.pass_word
  };
  console.log(body, "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
  var headers = {
    "Content-Type": "application/json"
  };

  return dispatch => {
    dispatch({ type: REGISTER_OWNER });
    axios
      .post(`http://torrid-app.herokuapp.com/users/addAdmin`, body, {
        headers: headers
      })
      .then(response => {
        //console.log(response);
        if (response.status === 200) {
          console.log(response, "gggggggggggggggggggggggggggg");
          //   const data = response.data;
        } else {
          registerFailed(dispatch);
        }
      })
      .then(() => callback())
      .catch(() => registerFailed(dispatch));
  };
}

export default function LogoutAction(callback) {
  localStorage.clear();
}

const regesterSucess = (dispatch, data) => {
  dispatch({
    type: REGISTER_OWNER_SUCESS,
    payload: data.msg
  });
};

const registerFailed = dispatch => {
  dispatch({ type: REGISTER_OWNER_FAILED });
};

const loginSucess = (dispatch, data) => {
  localStorage.setItem("token", data.token);

  var jwtDecode = require("jwt-decode");
  var decoded = jwtDecode(data.token);

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
