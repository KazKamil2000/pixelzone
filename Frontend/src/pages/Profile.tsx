import { Box, Typography, Avatar, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../data/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { logout, user, setUser } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleChangePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && setUser) {
          setUser((prev) => ({
            ...prev!,
            avatar: reader.result as string,
          }));

          localStorage.setItem(
            "user",
            JSON.stringify({
              ...user!,
              avatar: reader.result as string,
            })
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("User data:", user);

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Profil użytkownika
      </Typography>

      <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
        <Avatar src={user?.avatar || ""} sx={{ width: 100, height: 100 }} />

        <Button variant="outlined" component="label">
          Zmień zdjęcie profilowe
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleChangePicture}
          />
        </Button>

        <Button variant="contained" color="error" onClick={handleLogout}>
          Wyloguj się
        </Button>
      </Stack>
    </Box>
  );
};

export default Profile;
