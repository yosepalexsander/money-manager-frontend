import "./index.css";

import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";
import { HomeMonthly } from "./pages/HomeMonthly";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export const App = () => {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    if (state.isLogin === false) {
      navigate("/homemonthly");
    } else {
      if (state.user.status === "Customer") {
        navigate("/user");
      }
    }
  }, [navigate, state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  });

  return (
    <Routes>
      <Route path="/homemonthly" element={<HomeMonthly />} />
    </Routes>
  );
};
