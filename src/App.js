
import Likes from './components/mostLikedPosts/Likes';
import Footer from './components/footer/footer';
import './App.css';
import Mostcommonposts from './views/MostCommonPosts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './views/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage/>
 } />
        <Route path="comments" element={<Mostcommonposts />} />
        <Route path="likes" element={<Likes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
