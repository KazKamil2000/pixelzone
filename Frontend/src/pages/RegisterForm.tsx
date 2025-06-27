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

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Register
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
      <Button variant="contained" fullWidth onClick={handleRegister}>
        Register
      </Button>

      <Box mt={2}>
        <Typography variant="body2">
          Masz już konto?{" "}
          <Link component={RouterLink} to="/login">
            Zaloguj się
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
