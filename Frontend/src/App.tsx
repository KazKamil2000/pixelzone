import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import GameInfo from "./pages/GameInfo";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import { AuthProvider } from "./data/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="MainContainer">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/game/:id"
              element={
                <PrivateRoute>
                  <GameInfo />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
