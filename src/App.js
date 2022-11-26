import Likes from './components/mostLikedPosts/Likes';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import './App.css';
import './App.css';
import Mostcommonposts from './views/MostCommonPosts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <Mostcommonposts /> */}
      <Routes>
        <Route index element={<Likes />} />
        <Route path="comments" element={<Mostcommonposts />} />
        <Route path="likes" element={<Likes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
