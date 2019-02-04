import axios from "axios";
import {
  FETCH_FOODS,
  ADD_FOOD_ITEMS,
  ADD_FOOD_ITEM_SUCESS,
  ADD_FOOD_ITEM_FAILED
} from "./Types";

const ROOT_URL = "https://handallo.azurewebsites.net/api/Shop/";

export function fetchFoods() {
  const request = axios.get(`${ROOT_URL}`);
  console.log(request, "tyfuygiu");

  return {
    type: FETCH_FOODS,
    payload: request
  };
}

export function AddFoodItemAction(values, callback) {
  //console.log(values);
  let token = localStorage.getItem("token");
  var jwtDecode = require("jwt-decode");
  var decoded = jwtDecode(token);
  console.log(decoded);
  let formData = new FormData();
  formData.append("ShopId", decoded.azp);
  formData.append("FoodName", values.fooditemname);
  formData.append("Description", values.description);
  formData.append("image", values.image[0]);
  formData.append("SmallUnitPrice", values.smallUnitPrice);
  formData.append("MediumUnitPrice", values.mediumUnitPrice);
  formData.append("LargeUnitPrice", values.largeUnitPrice);

  if (values.avaliabletime === "IsBreakfast") {
    formData.append("IsBreakfast", "True");
  }
  if (values.avaliabletime === "IsLunch") {
    formData.append("IsLunch", "True");
  }
  if (values.avaliabletime === "IsDinner") {
    formData.append("IsDinner", "True");
  }
  if (values.available === "available") {
    formData.append("Availability", "True");
  } else {
    formData.append("Availability", "False");
  }
  if (values.fooditemtype === "IsVegi") {
    formData.append("IsVegi", "True");
  }
  if (values.fooditemtype === "IsNonVegi") {
    formData.append("IsNonVegi", "True");
  }
  if (values.fooditemtype === "IsRice") {
    formData.append("IsRice", "True");
  }
  if (values.fooditemtype === "IsRice") {
    formData.append("IsRice", "True");
  }
  if (values.fooditemtype === "IsBeverage") {
    formData.append("IsBeverage", "True");
  }

  console.log(formData.name);
  for (var p of formData) {
    console.log(p);
  }

  return dispatch => {
    //https://handallo.azurewebsites.net/api/Shop/
    dispatch({ type: ADD_FOOD_ITEMS });

    axios({
      method: "post",
      url: "https://handallo.azurewebsites.net/api/Shop/addfooditems",
      //url: "https://localhost:44371/api/Shop/addfooditems", //"https://localhost:44371/api/Shop/register", //
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          console.log(response);
          addFoodItemSucess(dispatch, data);
        } else {
          addFoodItemFailed(dispatch);
        }
      })
      .then(() => callback())
      .then(() => window.location.reload());
    //.catch(() => addFoodItemFailed(dispatch));
  };
}

const addFoodItemSucess = (dispatch, data) => {
  dispatch({
    type: ADD_FOOD_ITEM_SUCESS,
    payload: data
  });
};

const addFoodItemFailed = dispatch => {
  dispatch({
    type: ADD_FOOD_ITEM_FAILED
  });
};
