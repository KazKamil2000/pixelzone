import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { fetchData } from "../data/FetchData";
import Grid from "@mui/material/Grid";
import { Pagination } from "@mui/material";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGames = games.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <p>Ładowanie danych...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <>
      <Grid container spacing={3} maxWidth="lg" justifyContent={"center"}>
        {currentGames.map((game) => (
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
      <Pagination
        count={Math.ceil(games.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", mt: 4 }}
      />
    </>
  );
};

export default CardData;
