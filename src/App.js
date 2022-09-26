// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import Alert from './components/Alert';
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
//   } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setInterval(( )=> {
        setalert(null)
    },3000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled" , "success");
      setInterval(() => {
        document.title = "TextUtils - Amazing App";
      }, 2000);

      setInterval(() => {
        document.title = " Install TextUtils Now";
      }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled" , "success");
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="ReactCourse" mode={mode} toggleMode={togglemode} />
      <Alert alert = {alert} />
      <div className="container m-3 mx-auto">
       {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route> 
          <Route exact path="/" element= { <Textform showAlert = {showAlert} heading="Enter Text To Analyze" mode={mode} />}>
          </Route>
        </Routes> */}
        <Textform showAlert = {showAlert} heading="Enter Text To Analyze" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
 