import {
  TextField,
  Button,
  Container,
  Typography,
  Link,
  Box,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../data/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      login({
        email: response.data.email,
        avatar: localStorage.getItem("avatar") || "",
      });
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>

      <Box mt={2}>
        <Typography variant="body2">
          Nie masz jeszcze konta?{" "}
          <Link component={RouterLink} to="/register">
            Kliknij tutaj aby się zarejestrować
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
