import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardMedia,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";

const GameInfo = () => {
  const { id } = useParams();
  const [game, setGame] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`/api/api/game?id=${id}`);
        const result = await response.json();
        setGame(result);
      } catch (err) {
        console.error("Błąd ładowania gry:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading)
    return <CircularProgress sx={{ mt: 10, mx: "auto", display: "block" }} />;
  if (!game) return <Typography variant="h5">Nie znaleziono gry</Typography>;

  return (
    <Box sx={{ padding: 6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          gap: 4,
          alignItems: "start",
          mb: 6,
        }}
      >
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={game.thumbnail}
            alt={game.title}
          />
        </Card>

        <Box>
          <Typography variant="h4" gutterBottom>
            {game.title}
          </Typography>
          <Typography variant="body1">{game.description}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          alignItems: "start",
        }}
      >
        <Box>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Galeria gry
          </Typography>
          {game.screenshots?.length > 0 ? (
            <Carousel
              images={game.screenshots.map((s: { image: any }) => s.image)}
            />
          ) : (
            <Typography variant="body2">Brak screenshotów</Typography>
          )}
        </Box>

        <Box>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Szczegóły gry
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <b>Wydawca:</b> {game.publisher}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <b>Developer:</b> {game.developer}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <b>Gatunek:</b> {game.genre}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <b>Platforma:</b> {game.platform}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            <b>Data wydania:</b> {game.release_date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GameInfo;
