
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProfilePage from "./views/ProfilePage/ProfilePage";

// function App() {
//   return (
//     <div className="App">
//       <ProfilePage />
//     </div>

import Likes from './components/mostLikedPosts/Likes';
import Footer from './components/footer/footer';
import './App.css';
import Mostcommonposts from './views/MostCommonPosts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './views/HomePage';
import Navbar from './components/Navbar';
import Profile from './components/mostLikedPosts/comments/comments';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="authorProfile/:authorId" element={<ProfilePage />} />
        <Route path="comments" element={<Mostcommonposts />} />
        <Route path="likes" element={<Likes />} />
        <Route path="profile/:postId" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
