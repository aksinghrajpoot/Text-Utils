import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textutil from "./components/Textutil";
import React, { useState } from "react";
import About from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    light: "light",
    dark: "dark",
    dblue: "white",
    color: "#000",
  });

  const toggleMode = () => {
    if (mode.light === "light") {
      setMode({
        light: "dark",
        dark: "light",
        dblue: "#09162a",
        color: "#fff",
      });
      document.title = " Text Util - Dark Mode Enabled";
      document.body.style.backgroundColor = "#09162a";
      document.body.style.color = "white";
    } else {
      setMode({
        light: "light",
        dark: "dark",
        dblue: "white",
        color: "#000",
      });
      document.title = " Text Util - Light Mode Enabled";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#09162a";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Textutil mode={mode} showAlert={showAlert} />}
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
