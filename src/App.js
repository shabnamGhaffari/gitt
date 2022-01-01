import React from 'react';
import MainContainer from "./components/Containers/MainContainer";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import TopNavContext from "./context/TopNavContext";

const App = () => {
    return (
      <BrowserRouter>
          <MainContainer/>
          <ToastContainer/>
      </BrowserRouter>
    );
};

export default App;