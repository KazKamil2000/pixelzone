import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
 return (
    <>
    <Navbar />
    <div className="MainContainer">      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App
