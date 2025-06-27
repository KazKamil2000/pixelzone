import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Divider,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import kamImg from "../assets/kam.png";
import oliImg from "../assets/oli.jpg";
import macImg from "../assets/mac.jpg";

const teamMembers = [
  {
    name: "Kamil Kaźmierczak",
    role: "Frontend Developer",
    bio: "Frontend developer PixelZone z ponad 10-letnim doświadczeniem w graniu w gry. Pasjonat innowacji i nowych technologii.",
    avatar: kamImg,
  },
  {
    name: "Olivier Kwiatkowski",
    role: "Backend Developer",
    bio: "Ekspert backend developmentu. Uwielbia automatyzację i optymalizację kodu.",
    avatar: oliImg,
  },
  {
    name: "Maciej Matysek",
    role: "Lead Designer",
    bio: "Odpowiada za wizualną stronę PixelZone. Kocha minimalizm, estetykę i design użytkowy.",
    avatar: macImg,
  },
];

const About = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ textAlign: "center", my: 6 }}>
        <Typography variant="h3" gutterBottom>
          O nas
        </Typography>
        <Typography variant="body1" color="text.secondary">
          PixelZone to zespół pasjonatów gier, technologii i designu. Tworzymy
          narzędzia, które pomagają graczom odkrywać, oceniać i dzielić się
          najlepszymi tytułami ze świata gamingu.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Nasz Zespół
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid key={index}>
            <Card
              sx={{
                height: "100%",
                width: 300,
                textAlign: "center",
                p: 2,
              }}
            >
              <Avatar
                alt={member.name}
                src={member.avatar}
                sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 8, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Nasza misja
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="md"
          sx={{ mx: "auto" }}
        >
          Naszym celem jest stworzenie miejsca, gdzie każdy gracz znajdzie coś
          dla siebie. Łączymy najnowsze technologie z miłością do gier, by
          tworzyć platformę, która inspiruje i dostarcza rozrywki na najwyższym
          poziomie.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
