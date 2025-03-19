import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
