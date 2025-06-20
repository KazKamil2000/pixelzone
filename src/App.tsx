import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  
  let Page: React.ComponentType = () => <div>Page not found</div>;
  switch (window.location.pathname) {
    case '/':
      Page = Home;
      break;
    case '/about':
      Page = About;
      break;
    case '/profile':
      Page = Profile;
      break;
  
  }
  return (
    <>
    <Navbar />
    <div className="MainContainer">      
      <Page />
    </div>
    </>
  );
}

export default App
