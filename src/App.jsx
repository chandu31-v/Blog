import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header_buttons/header";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Signin from "./component/sigin"
//import Signin from "./component/signIn"
import Login from "./component/login"

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Header />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signin" element={<Signin />}></Route>
            <Route exact path="/login" element={null}></Route>
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
