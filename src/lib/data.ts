import type { Movie } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

const movies: Movie[] = [
  {
    id: '1',
    title: 'Galaxy Runners',
    tagline: 'The race for the cosmos begins.',
    overview: 'In a distant future, a group of daring pilots in a high-stakes interstellar race must band together to save the galaxy from a mysterious threat that emerges from a wormhole.',
    releaseYear: 2024,
    genres: ['Sci-Fi', 'Action', 'Adventure'],
    rating: 4.5,
    duration: '2h 15m',
    posterImageId: 'movie-poster-1',
    heroImageId: 'movie-hero-1',
    reviews: [
      { id: 'r1-1', author: 'SciFiFan_82', rating: 5, text: 'Absolutely breathtaking visuals and a gripping story. A must-see for any sci-fi lover!' },
      { id: 'r1-2', author: 'CinemaGoer', rating: 4, text: 'A fun ride with lots of action. The plot was a bit predictable, but the characters were great.' },
    ],
    showtimes: [
      { id: 'st1-1', time: '18:00', theatre: 'Grand Cinema 1' },
      { id: 'st1-2', time: '21:00', theatre: 'IMAX Galaxy' },
    ],
  },
  {
    id: '2',
    title: 'Parisian Hearts',
    tagline: 'Love is always a masterpiece.',
    overview: 'An American artist struggling in Paris finds unexpected inspiration and love when she meets a charming French chef. But their cultural differences and past secrets threaten their romance.',
    releaseYear: 2024,
    genres: ['Romance', 'Comedy', 'Drama'],
    rating: 4.2,
    duration: '1h 55m',
    posterImageId: 'movie-poster-2',
    heroImageId: 'movie-hero-2',
    reviews: [
      { id: 'r2-1', author: 'RomComQueen', rating: 5, text: 'Such a sweet and beautiful movie. I laughed, I cried. The chemistry was amazing.' },
      { id: 'r2-2', author: 'MovieMaven', rating: 3, text: 'Charming, but followed the standard rom-com formula too closely for my taste.' },
    ],
    showtimes: [
      { id: 'st2-1', time: '17:30', theatre: 'CineArt Boutique' },
      { id: 'st2-2', time: '20:15', theatre: 'Plaza Theatre 2' },
    ],
  },
  {
    id: '3',
    title: 'The Crimson Cipher',
    tagline: 'Some secrets are written in blood.',
    overview: 'A former intelligence agent is pulled back into the world of espionage when a cryptic message from his past surfaces, leading him on a deadly cat-and-mouse game across Europe.',
    releaseYear: 2023,
    genres: ['Action', 'Thriller', 'Mystery'],
    rating: 4.8,
    duration: '2h 30m',
    posterImageId: 'movie-poster-3',
    heroImageId: 'movie-hero-3',
    reviews: [
      { id: 'r3-1', author: 'ActionJunkie', rating: 5, text: 'Non-stop action and twists that keep you on the edge of your seat. Best thriller of the year!' },
      { id: 'r3-2', author: 'FilmCritique101', rating: 4, text: 'A well-crafted thriller with smart plotting, though it borrows heavily from the genre\'s classics.' },
    ],
    showtimes: [
      { id: 'st3-1', time: '19:00', theatre: 'MegaPlex 5' },
      { id: 'st3-2', time: '22:00', theatre: 'IMAX Galaxy' },
    ],
  },
  {
    id: '4',
    title: 'Whiskerwood',
    tagline: 'A tiny hero on a big adventure.',
    overview: 'A brave little mouse must venture out of his cozy home to find a legendary magical acorn that can save his forest from a devastating blight, making new friends and facing fearsome foes along the way.',
    releaseYear: 2024,
    genres: ['Animation', 'Family', 'Adventure'],
    rating: 4.6,
    duration: '1h 35m',
    posterImageId: 'movie-poster-4',
    heroImageId: 'movie-hero-4',
    reviews: [
      { id: 'r4-1', author: 'ParentalGuidance', rating: 5, text: 'A delightful film for the whole family. The animation is gorgeous, and the message is heartwarming.' },
      { id: 'r4-2', author: 'AnimationAce', rating: 4, text: 'A solid animated feature. Kids will love it, and adults will appreciate the humor.' },
    ],
    showtimes: [
      { id: 'st4-1', time: '11:00', theatre: 'Family Funplex' },
      { id: 'st4-2', time: '14:00', theatre: 'Plaza Theatre 3' },
      { id: 'st4-3', time: '16:30', theatre: 'Family Funplex' },
    ],
  },
  {
    id: '5',
    title: 'The Last Emperor\'s Sword',
    tagline: 'A legacy forged in fire and honor.',
    overview: 'Set in feudal Japan, the story follows a disgraced samurai who is tasked with protecting the young heir to the throne and a mythical sword from the clutches of a powerful warlord.',
    releaseYear: 2023,
    genres: ['Drama', 'History', 'Action'],
    rating: 4.4,
    duration: '2h 45m',
    posterImageId: 'movie-poster-5',
    heroImageId: 'movie-hero-5',
    reviews: [
      { id: 'r5-1', author: 'HistoryBuff', rating: 5, text: 'A stunning historical epic. The costumes and set designs are immaculate, and the story is deeply moving.' },
      { id: 'r5-2', author: 'KurosawaFan', rating: 4, text: 'A respectful homage to classic samurai films. The sword fights are incredible.' },
    ],
    showtimes: [
      { id: 'st5-1', time: '16:00', theatre: 'CineArt Boutique' },
      { id: 'st5-2', time: '20:00', theatre: 'Grand Cinema 2' },
    ],
  },
  {
    id: '6',
    title: 'Echoes in the Attic',
    tagline: 'You\'re not alone in the house.',
    overview: 'A young family moves into a new home, only to discover that a malevolent presence in the attic has sinister plans for their young daughter. They must uncover the house\'s dark history to survive.',
    releaseYear: 2024,
    genres: ['Horror', 'Thriller'],
    rating: 4.1,
    duration: '1h 42m',
    posterImageId: 'movie-poster-6',
    heroImageId: 'movie-hero-6',
    reviews: [
      { id: 'r6-1', author: 'ScaryMary', rating: 5, text: 'Genuinely terrifying! I had to sleep with the lights on. The jump scares are earned and effective.' },
      { id: 'r6-2', author: 'HorrorHound', rating: 3, text: 'A few good scares, but it relies on too many familiar horror tropes. Decent, but not groundbreaking.' },
    ],
    showtimes: [
      { id: 'st6-1', time: '21:30', theatre: 'Nightmare Cinema' },
      { id: 'st6-2', time: '23:45', theatre: 'MegaPlex 7' },
    ],
  },
];

// This function simulates fetching data from an API.
// In a real Next.js app, this would be an API call, and Next.js would cache the result.
export async function getMovies(query: string = ''): Promise<Movie[]> {
  console.log('Fetching movies...');
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  
  if (query) {
    return movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
  }
  
  console.log('Movies fetched.');
  return movies;
}

export async function getMovieById(id: string): Promise<Movie | undefined> {
  console.log(`Fetching movie by id: ${id}`);
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay
  
  const movie = movies.find(movie => movie.id === id);

  if (movie) {
    // Attach full image URLs
    const posterImage = PlaceHolderImages.find(img => img.id === movie.posterImageId);
    const heroImage = PlaceHolderImages.find(img => img.id === movie.heroImageId);
    return {
      ...movie,
      posterImageUrl: posterImage?.imageUrl,
      heroImageUrl: heroImage?.imageUrl,
    }
  }

  console.log('Movie fetched.');
  return movie;
}
