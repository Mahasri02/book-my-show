import type { Movie } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

const movies: Movie[] = [
  {
    id: '1',
    title: '3 Idiots',
    tagline: "Don't be stupid. Be an idiot.",
    overview: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".',
    releaseYear: 2009,
    genres: ['Comedy', 'Drama'],
    rating: 4.8,
    duration: '2h 50m',
    posterImageId: 'movie-poster-1',
    heroImageId: 'movie-hero-1',
    reviews: [
      { id: 'r1-1', author: 'Cinephile_Alia', rating: 5, text: 'An absolute masterpiece. A movie that will make you laugh, cry, and think. A must-watch for all ages.' },
      { id: 'r1-2', author: 'ReviewRaja', rating: 5, text: 'A perfect blend of comedy and emotion with a powerful message about the education system. Truly iconic.' },
    ],
    showtimes: [
      { id: 'st1-1', time: '18:00', theatre: 'Grand Cinema 1' },
      { id: 'st1-2', time: '21:00', theatre: 'IMAX Galaxy' },
    ],
  },
  {
    id: '2',
    title: 'Dangal',
    tagline: 'Are our girls any less than boys?',
    overview: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.',
    releaseYear: 2016,
    genres: ['Biography', 'Drama', 'Sport'],
    rating: 4.7,
    duration: '2h 41m',
    posterImageId: 'movie-poster-2',
    heroImageId: 'movie-hero-2',
    reviews: [
      { id: 'r2-1', author: 'KritiKa_Review', rating: 5, text: 'Inspiring and powerful. Aamir Khan and the entire cast delivered stellar performances. The wrestling scenes are intense!' },
      { id: 'r2-2', author: 'BollywoodBuff', rating: 4, text: 'A fantastic story of empowerment and determination. A bit long, but completely worth it.' },
    ],
    showtimes: [
      { id: 'st2-1', time: '17:30', theatre: 'CineArt Boutique' },
      { id: 'st2-2', time: '20:15', theatre: 'Plaza Theatre 2' },
    ],
  },
  {
    id: '3',
    title: 'PK',
    tagline: 'The one who asked the questions.',
    overview: 'An alien on Earth loses the remote control for his spaceship. His innocent questions and childlike curiosity force people to re-evaluate their long-held beliefs.',
    releaseYear: 2014,
    genres: ['Comedy', 'Drama', 'Sci-Fi'],
    rating: 4.6,
    duration: '2h 33m',
    posterImageId: 'movie-poster-3',
    heroImageId: 'movie-hero-3',
    reviews: [
      { id: 'r3-1', author: 'Aman_views', rating: 5, text: 'A thought-provoking satire that is both hilarious and heartwarming. Aamir Khan is brilliant as PK.' },
      { id: 'r3-2', author: 'FilmyFever', rating: 4, text: 'A unique concept with a great message. Some parts might feel a bit preachy, but overall a great watch.' },
    ],
    showtimes: [
      { id: 'st3-1', time: '19:00', theatre: 'MegaPlex 5' },
      { id: 'st3-2', time: '22:00', theatre: 'IMAX Galaxy' },
    ],
  },
  {
    id: '4',
    title: 'Bajrangi Bhaijaan',
    tagline: 'A little girl from Pakistan gets lost in India, with no way to get back.',
    overview: 'An Indian man with a magnanimous heart takes a young mute Pakistani girl back to her homeland to reunite her with her family.',
    releaseYear: 2015,
    genres: ['Action', 'Comedy', 'Drama'],
    rating: 4.5,
    duration: '2h 43m',
    posterImageId: 'movie-poster-4',
    heroImageId: 'movie-hero-4',
    reviews: [
      { id: 'r4-1', author: 'Priya_Patel', rating: 5, text: 'Such a beautiful and emotional movie. Salman Khan gives one of his best performances. The little girl is adorable!' },
      { id: 'r4-2', author: 'CinemaScope', rating: 4, text: 'A heartwarming cross-border story that will leave you with a smile. The music is also fantastic.' },
    ],
    showtimes: [
      { id: 'st4-1', time: '11:00', theatre: 'Family Funplex' },
      { id: 'st4-2', time: '14:00', theatre: 'Plaza Theatre 3' },
      { id: 'st4-3', time: '16:30', theatre: 'Family Funplex' },
    ],
  },
  {
    id: '5',
    title: 'Queen',
    tagline: 'A journey of self-discovery.',
    overview: 'A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets canceled. Her journey of self-discovery forms the crux of the story.',
    releaseYear: 2013,
    genres: ['Adventure', 'Comedy', 'Drama'],
    rating: 4.7,
    duration: '2h 26m',
    posterImageId: 'movie-poster-5',
    heroImageId: 'movie-hero-5',
    reviews: [
      { id: 'r5-1', author: 'Rani_Reviews', rating: 5, text: 'Absolutely loved it! Kangana Ranaut is phenomenal. A very empowering and fun movie.' },
      { id: 'r5-2', author: 'CriticVarun', rating: 5, text: 'A refreshing and beautifully made film. It\'s a celebration of independence and life.' },
    ],
    showtimes: [
      { id: 'st5-1', time: '16:00', theatre: 'CineArt Boutique' },
      { id: 'st5-2', time: '20:00', theatre: 'Grand Cinema 2' },
    ],
  },
  {
    id: '6',
    title: 'Andhadhun',
    tagline: 'What is life? It depends on the liver.',
    overview: 'A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically not know about.',
    releaseYear: 2018,
    genres: ['Crime', 'Thriller', 'Comedy'],
    rating: 4.8,
    duration: '2h 19m',
    posterImageId: 'movie-poster-6',
    heroImageId: 'movie-hero-6',
    reviews: [
      { id: 'r6-1', author: 'SuspenseSeeker', rating: 5, text: 'A mind-bending thriller with twists at every corner. Ayushmann Khurrana is a genius!' },
      { id: 'r6-2', author: 'TaranTheTrader', rating: 5, text: 'One of the best thrillers to come out of Bollywood. The ending will leave you speechless. A must-see!' },
    ],
    showtimes: [
      { id: 'st6-1', time: '21:30', theatre: 'Screen 8' },
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
