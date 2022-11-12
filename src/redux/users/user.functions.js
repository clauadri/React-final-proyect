import axios from "axios";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: "gettingUsers" });

  try {
    const result = await axios.get(
      "https://back-proyecto-react.vercel.app/users"
    );
    console.log(result);
    dispatch({ type: "getUsers", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorUsers", payload: error.message });
  }
};
