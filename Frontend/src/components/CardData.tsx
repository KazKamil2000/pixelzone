// src/components/CardData.tsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { fetchData } from "../data/FetchData";

type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
};

const CardData: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  useEffect(() => {
    fetchData()
      .then((data) => setGames(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Ładowanie danych…</Typography>;
  if (error) return <Typography color="error">Błąd: {error}</Typography>;

  // 1) filtr po searchTerm
  const filtered = games.filter((g) =>
    g.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2) paginacja po przefiltrowanej tablicy
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGames = filtered.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (_: any, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Szukaj gier..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3} maxWidth="lg" justifyContent="center">
        {currentGames.map((game) => (
          <Grid key={game.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Link
                to={`/game/${game.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  sx={{
                    width: 345,
                    height: 380,
                    cursor: "pointer",
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
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {game.short_description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filtered.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(filtered.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ display: "flex", justifyContent: "center", mt: 4 }}
        />
      )}
    </Container>
  );
};

export default CardData;
