import "./index.css";

import { useCallback, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";
import { Auth } from "./pages/Auth";
import { Setting } from "./pages/Setting";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export const App = () => {
  const navigate = useNavigate();
  const [, dispatch] = useContext(UserContext);

  const checkUser = useCallback(async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      const payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/auth");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};
