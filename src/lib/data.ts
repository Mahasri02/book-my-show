import type { Movie } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

const movies: Movie[] = [
  {
    id: '1',
    title: 'LEO',
    tagline: 'In the world of untamed rivers, the calmest water is the most dangerous.',
    overview: 'Parthiban is a mild-mannered cafe owner in Kashmir, who fends off a gang of thugs and becomes a local hero. However, he also gains the attention of a drug cartel that claims he was once a part of them.',
    releaseYear: 2023,
    genres: ['Action', 'Thriller'],
    rating: 4.5,
    duration: '2h 44m',
    posterImageId: 'movie-poster-1',
    heroImageId: 'movie-hero-1',
    reviews: [
      { id: 'r1-1', author: 'ActionFan_1', rating: 5, text: 'Absolute beast of a movie. Vijay was at his best!' },
      { id: 'r1-2', author: 'CinemaCritique', rating: 4, text: 'A solid action thriller with a gripping storyline. The second half could have been tighter.' },
    ],
    showtimes: [
      { id: 'st1-1', time: '18:00', theatre: 'Grand Cinema 1' },
      { id: 'st1-2', time: '21:00', theatre: 'IMAX Galaxy' },
    ],
  },
  {
    id: '2',
    title: 'Jai Bhim',
    tagline: 'Justice for the oppressed.',
    overview: 'A brave activist-lawyer fights for justice when a poor tribal man, who gets arrested for a case of alleged theft, goes missing from police custody.',
    releaseYear: 2021,
    genres: ['Crime', 'Drama'],
    rating: 4.8,
    duration: '2h 44m',
    posterImageId: 'movie-poster-2',
    heroImageId: 'movie-hero-2',
    reviews: [
      { id: 'r2-1', author: 'SocialVoice', rating: 5, text: 'A powerful and important film that everyone should watch. Suriya delivers a career-best performance.' },
      { id: 'r2-2', author: 'MovieMaven', rating: 5, text: 'A heart-wrenching story that is both shocking and inspiring. A masterpiece of Indian cinema.' },
    ],
    showtimes: [
      { id: 'st2-1', time: '17:30', theatre: 'CineArt Boutique' },
      { id: 'st2-2', time: '20:15', theatre: 'Plaza Theatre 2' },
    ],
  },
  {
    id: '3',
    title: 'Vaathi',
    tagline: 'Education is more than a business.',
    overview: 'The chairman of a private educational institution hires a third-grade lecturer to teach at a government school in a village and to improve the education of the underprivileged students.',
    releaseYear: 2023,
    genres: ['Action', 'Drama'],
    rating: 4.2,
    duration: '2h 19m',
    posterImageId: 'movie-poster-3',
    heroImageId: 'movie-hero-3',
    reviews: [
      { id: 'r3-1', author: 'EduWatcher', rating: 4, text: 'A commendable effort with a strong social message. Dhanush shines in his role.' },
      { id: 'r3-2', author: 'FilmCritique101', rating: 3, text: 'A good attempt but the execution could have been better. The plot felt a bit preachy at times.' },
    ],
    showtimes: [
      { id: 'st3-1', time: '19:00', theatre: 'MegaPlex 5' },
      { id: 'st3-2', time: '22:00', theatre: 'IMAX Galaxy' },
    ],
  },
  {
    id: '4',
    title: 'Good Night',
    tagline: 'Sometimes, a little snoring can make a lot of noise in life.',
    overview: 'The story of an IT youngster who has a snoring problem and the problems that arise in his life and love because of it.',
    releaseYear: 2023,
    genres: ['Comedy', 'Romance', 'Family'],
    rating: 4.6,
    duration: '2h 24m',
    posterImageId: 'movie-poster-4',
    heroImageId: 'movie-hero-4',
    reviews: [
      { id: 'r4-1', author: 'ParentalGuidance', rating: 5, text: 'A feel-good entertainer for the whole family. It is simple, sweet and hilarious.' },
      { id: 'r4-2', author: 'RomComLover', rating: 4, text: 'A very relatable and charming movie. The lead pair had great chemistry.' },
    ],
    showtimes: [
      { id: 'st4-1', time: '11:00', theatre: 'Family Funplex' },
      { id: 'st4-2', time: '14:00', theatre: 'Plaza Theatre 3' },
      { id: 'st4-3', time: '16:30', theatre: 'Family Funplex' },
    ],
  },
  {
    id: '5',
    title: 'Kadamban',
    tagline: 'A protector of the jungle.',
    overview: 'A native of a tribal group in a forest in Tamil Nadu takes on a large corporate house that wants to destroy his forest and his tribe to mine for minerals.',
    releaseYear: 2017,
    genres: ['Action', 'Drama'],
    rating: 4.0,
    duration: '2h 20m',
    posterImageId: 'movie-poster-5',
    heroImageId: 'movie-hero-5',
    reviews: [
      { id: 'r5-1', author: 'ActionJunkie', rating: 4, text: 'Good action sequences and a relevant social message about protecting nature.' },
      { id: 'r5-2', author: 'Critic', rating: 3, text: 'The movie has its heart in the right place but suffers from a predictable screenplay.' },
    ],
    showtimes: [
      { id: 'st5-1', time: '16:00', theatre: 'CineArt Boutique' },
      { id: 'st5-2', time: '20:00', theatre: 'Grand Cinema 2' },
    ],
  },
  {
    id: '6',
    title: 'Dragon',
    tagline: 'Unleash the beast within.',
    overview: 'A fantasy action film where a young man discovers he has draconic powers and must learn to control them to save his world from an ancient evil.',
    releaseYear: 2024,
    genres: ['Fantasy', 'Action'],
    rating: 4.1,
    duration: '2h 30m',
    posterImageId: 'movie-poster-6',
    heroImageId: 'movie-hero-6',
    reviews: [
      { id: 'r6-1', author: 'FantasyFan', rating: 5, text: 'Amazing visual effects and a thrilling story. Can\'t wait for a sequel!' },
      { id: 'r6-2', author: 'MovieGoer_22', rating: 4, text: 'Entertaining and action-packed, although the plot is a bit generic.' },
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
