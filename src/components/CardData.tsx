import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { fetchData } from "../data/FetchData";
import Grid from "@mui/material/Grid";

type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
};

const CardData = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchData();
        setGames(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) return <p>Ładowanie danych...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <Grid container spacing={3} maxWidth="lg" justifyContent={"center"}>
      {games.map((game) => (
        <Grid key={game.id}>
          <Card
            sx={{
              width: 345,
              height: 380,
            }}
          >
            <CardMedia
              sx={{ height: 200, width: "100%" }}
              image={game.thumbnail}
              title={game.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {game.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {game.short_description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardData;
