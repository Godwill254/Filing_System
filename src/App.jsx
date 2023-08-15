import React from "react";
import "./App.css";
import { Login, HomePage, Register, DashboardPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkIsLoggedIn } from "./redux/actionCreators/authActionCreator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkIsLoggedIn());
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </div>
  );
};

export default App;
