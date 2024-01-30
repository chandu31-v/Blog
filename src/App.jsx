import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./header_buttons/header";
import Login from "./form/formik/login";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Header/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
