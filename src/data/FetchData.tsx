export const fetchData = async () => {
  const response = await fetch("/api/api/games");
  if (!response.ok) {
    throw new Error("Błąd podczas pobierania danych z API");
  }
  const data = await response.json();
  return data;
};
