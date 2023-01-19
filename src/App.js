import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// react tostify
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// route protect
import ProtectRoute from './utils/protectedRoute'

import Navbar from "./components/Navbar"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";

const App = () => {
      return (
            <div className='App'>
                  <Router>
                        <Navbar />
                        <div className='pages'>
                              <Routes>
                                    <Route path='/' element={<ProtectRoute><Home /></ProtectRoute>} />
                                    <Route path='/login' element={<Login />} />
                                    <Route path='/regi' element={<Registration />} />
                              </Routes>
                        </div>
                  </Router>
                  <ToastContainer />
            </div>
      )
}

export default App