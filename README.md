# Pixelzone

**Portal katalogowy gier z panelem użytkownika**

## Autorzy

- Kamil Kaźmierczak
- Olivier Kwiatkowski
- Maciej Matysek

## Funkcjonalności

- Rejestracja i logowanie
- Przeglądanie i wyszukiwanie gier
- Edycja zdjęcia profilowego

## Technologie

**Frontend:** React, TypeScript, Vite  
**Backend:** Java 17, Spring Boot, PostgreSQL  
**Konteneryzacja:** Docker, Docker Compose

## Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/KazKamil2000/pixelzone.git
   cd pixelzone
   ```
2. Uruchom z Docker Compose:
   ```bash
   docker-compose up --build
   ```
   - Frontend: http://localhost:5173
   - Backend: http://localhost:8080

_Alternatywnie:_ uruchom Backend (`mvn spring-boot:run`) i Frontend (`npm install && npm run dev`) osobno.

## Struktura

```
pixelzone/
├── Backend/      # Spring Boot
├── Frontend/     # React + Vite
└── docker-compose.yml
```
