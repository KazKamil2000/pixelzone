import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) {
    return <Typography>Brak obrazów</Typography>;
  }

  return (
    <Box textAlign="center">
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Obraz ${currentIndex + 1}`}
        sx={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          borderRadius: 2,
          boxShadow: 3,
          mb: 2,
        }}
      />
      <Box display="flex" justifyContent="center" gap={2}>
        <Button variant="outlined" onClick={handlePrev}>
          Poprzedni
        </Button>
        <Button variant="outlined" onClick={handleNext}>
          Następny
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
