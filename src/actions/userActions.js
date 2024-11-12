import axios from "axios";

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users",
      userData
    );
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILURE", payload: error.message });
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users/login", // Backend login route
      credentials
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILURE",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
