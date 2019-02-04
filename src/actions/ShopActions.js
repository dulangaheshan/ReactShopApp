import axios from "axios";
import {
  REGISTER_SHOP,
  REGISTER_SHOP_SUCESS,
  REGISTER_SHOP_FAILED
} from "./Types";

export function RegisterShopAction(values, callback) {
  console.log(values);
  let token = localStorage.getItem("token");
  //localStorage.get('itemName')
  //console.log(data);
  //console.log(localStorage.get("token"));
  var jwtDecode = require("jwt-decode");
  var decoded = jwtDecode(token);
  // console.log(values.image[0]);
  let formData = new FormData();
  formData.append("OwnerId", decoded.nameid);
  formData.append("ShopName", values.shopname);
  formData.append("Des_cription", values.description);
  formData.append("Email", values.email);
  formData.append("image", values.image[0]);
  formData.append("Lo_cation", values.location);
  formData.append("mobileno", values.mobileno);
  formData.append("Lat", values.lat);
  formData.append("Lng", values.lng);
  console.log(formData.name);
  for (var p of formData) {
    console.log(p);
  }

  return dispatch => {
    dispatch({ type: REGISTER_SHOP });

    axios({
      //https://handallo.azurewebsites.net/api/Shop/
      method: "post",
       url: "https://handallo.azurewebsites.net/api/Shop/register",
     // url: "https://localhost:44371/api/Shop/register", //"https://localhost:44371/api/Shop/register", //
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          console.log(response);
          registerSucess(dispatch, data);
        } else {
          registerFailed(dispatch);
        }
      })
      .then(() => callback());
    //.catch(() => registerFailed(dispatch));.catch(() => registerFailed(dispatch));
  };
}

const registerSucess = (dispatch, data) => {
  dispatch({
    type: REGISTER_SHOP_SUCESS,
    payload: data
  });
};

const registerFailed = dispatch => {
  console.log("fgcgh");
  dispatch({ type: REGISTER_SHOP_FAILED });
};
