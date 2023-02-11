//LOGIN
export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//LOG OUT

export const logout = () => ({
  type: "LOGOUT",
});
