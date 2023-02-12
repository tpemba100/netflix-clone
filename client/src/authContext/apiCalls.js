import axios from "axios";
import { loginFailure, loginSuccess, loginStart } from "./AuthAction";

export const doLogin = async (user, dispatch) => {
  dispatch(loginStart());
  console.log("data user 0");
  try {
    const res = await axios.post("/api/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log("data user 1");
    console.log(user);
  } catch (err) {
    dispatch(loginFailure());
  }
};
