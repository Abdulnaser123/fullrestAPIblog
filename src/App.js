import logo from './logo.svg';
import Likes from './components/mostLikedPosts/Likes';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Likes />
      <Footer />
    </div>
  );
}

export default App;
