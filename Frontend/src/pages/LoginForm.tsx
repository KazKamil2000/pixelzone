import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/register";

    try {
      const res = await axios.post(
        `http://localhost:8080/api/auth${endpoint}`,
        form
      );
      if (isLogin) {
        setLoggedIn(true);
      } else {
        alert("Zarejestrowano! Teraz się zaloguj.");
        setIsLogin(true);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data || "Błąd logowania");
      } else {
        alert("Błąd logowania");
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>
          {isLogin ? "Login" : "Register"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {isLogin ? "Login" : "Register"}
          </Button>
        </form>
        <Button onClick={() => setIsLogin(!isLogin)} fullWidth sx={{ mt: 1 }}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginForm;
function setLoggedIn(arg0: boolean) {
  throw new Error("Function not implemented.");
}
