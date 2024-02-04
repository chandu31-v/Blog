import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header_buttons/header";
import Login from "./form/formik/login";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Header />}></Route>
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
