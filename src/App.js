
import React from "react";
import MainScreen from "./Screens/MainScreen"
import LoginScreen from "./Screens/LoginScreen"
import OffersScreen from "./Screens/OffersScreen";
import RideScreen from "./Screens/RideScreen";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PublishScreen from "./Screens/PublishScreen";

import initialState from "./Context/data"
import Context from "./Context";
import MyBookingsScreen from "./Screens/MyBookingsScreen";


function App() {

 
  const[state,setState]=React.useState(initialState)
 
  return (
    <BrowserRouter>
      <Context.Provider value={{ state, setState }}>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/PublishScreen" element={<PublishScreen />} />
          <Route path="/Offers" element={<OffersScreen />} />
          <Route path="myRides" element={<RideScreen />} />
          <Route path="/myBookings" element={<MyBookingsScreen />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
