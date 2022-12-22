import React from "react";

import {Routes, Route } from "react-router-dom";

// styling

// components
import Menu from "./../Menu/Menu";
import Login from "./Login";
import Registernew from "./Registernew";

const Loginregister = () => {
  return (

      <div className="App">

        <Menu />

  
<Routes>
          <Route exact path="/register" element={<Registernew></Registernew>} />
          <Route exact path="/login" element={<Login></Login>} />
 
          </Routes>

      </div>

  );
};

export default Loginregister;
