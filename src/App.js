import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProfilePage from "./views/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <ProfilePage />
    </div>
  );
}

export default App;
