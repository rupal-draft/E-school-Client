import { useReducer, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const intialState = {
  user: null,
};

const Context = createContext();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, intialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        return new Promise((resolve, reject) => {
          axios
            .get(`${API_BASE_URL}/logout`)
            .then((data) => {
              console.log("/401 error > logout successful");

              dispatch({ type: "LOGOUT" });
              window.localStorage.removeItem("user");
              resolve();
            })
            .catch((err) => {
              console.error("Logout request failed", err);

              reject(error);
            });
        });
      }

      return Promise.reject(error);
    }
  );

  // useEffect(() => {
  //   const getCsrfToken = async () => {
  //     const { data } = await axios.get(`${API_BASE_URL}/csrf-token`);
  //     axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
  //   };
  //   getCsrfToken();
  // }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
