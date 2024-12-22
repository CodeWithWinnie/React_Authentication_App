import React from "react";
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./pages/Home";

const App = () => {

  return (
    <div>
      <Router>
        <div>
          <nav >
            <Link to="/">Home</Link>
            <Link  to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}



export default App;
