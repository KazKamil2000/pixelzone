import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";

type GameDetails = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  genre: string;
  platform: string;
  developer: string;
  publisher: string;
  release_date: string;
};

const GameInfo = () => {
  const { id } = useParams();
  const [game, setGame] = useState<GameDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        console.log("ID z URL:", id);
        const response = await fetch(`/api/api/game?id=${id}`);
        const data = await response.json();
        console.log("Dane z API:", data);
        setGame(data);
      } catch (err) {
        console.error("Błąd ładowania gry:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!game) return <p>Nie znaleziono gry</p>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardMedia component="img" image={game.thumbnail} alt={game.title} />
        <CardContent>
          <Typography variant="h4">{game.title}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {game.description}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <strong>Gatunek:</strong> {game.genre} <br />
            <strong>Platforma:</strong> {game.platform} <br />
            <strong>Deweloper:</strong> {game.developer} <br />
            <strong>Wydawca:</strong> {game.publisher} <br />
            <strong>Data wydania:</strong> {game.release_date}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GameInfo;
