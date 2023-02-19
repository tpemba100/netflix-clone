import axios from "axios";
import { loginFailure, loginSuccess, loginStart } from "./AuthAction";

export const doLogin = async (user, dispatch) => {
  dispatch(loginStart());
  console.log("data user 0");

  const url = "https://netflix-clone-api-9ydn.onrender.com";

  try {
    const res = await axios.post(url + `/api/auth/login`, user);
    dispatch(loginSuccess(res.data));
    console.log("data user 1");
    console.log(user);
  } catch (err) {
    dispatch(loginFailure());
  }
};
