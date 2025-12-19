import type { Movie } from '@/lib/types';

const movies: Movie[] = [
  {
    id: '1',
    title: 'Jai Bhim',
    tagline: 'Justice for the oppressed.',
    overview: 'A brave activist-lawyer fights for justice when a poor tribal man, who gets arrested for a case of alleged theft, goes missing from police custody.',
    releaseYear: 2021,
    genres: ['Crime', 'Drama'],
    rating: 4.9,
    duration: '2h 44m',
    posterImageId: 'movie-poster-7',
    heroImageId: 'movie-hero-7',
    posterImageUrl: 'https://th.bing.com/th/id/OIP.HX60OH-nZFGI8v5ehumtsAHaFj?w=226&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
    heroImageUrl: 'https://images.unsplash.com/photo-1604999565976-89e9a5154c3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviews: [
      { id: 'r7-1', author: 'LegalEagle', rating: 5, text: 'A powerful and heart-wrenching story that needed to be told. Suriya\'s performance is outstanding.' },
      { id: 'r7-2', author: 'SocialVoice', rating: 5, text: 'A must-watch film that sheds light on the harsh realities of the caste system. Truly impactful.' },
    ],
    showtimes: [
      { id: 'st7-1', time: '18:30', theatre: 'Grand Cinema 1' },
      { id: 'st7-2', time: '21:30', theatre: 'People\'s Plaza' },
    ],
  },
  {
    id: '2',
    title: 'Teddy',
    tagline: 'A man\'s best friend is... a teddy bear?',
    overview: 'A young man with OCD finds his life turned upside down when he crosses paths with a talking teddy bear who is on a mission of his own.',
    releaseYear: 2021,
    genres: ['Action', 'Fantasy'],
    rating: 4.2,
    duration: '2h 15m',
    posterImageId: 'movie-poster-teddy',
    heroImageId: 'movie-hero-teddy',
    posterImageUrl: 'https://th.bing.com/th/id/OIP.7JwxELDEkkQEU5eZRP2x_gHaLk?w=115&h=181&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
    heroImageUrl: 'https://images.unsplash.com/photo-1611095965933-3dea57993215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviews: [
      { id: 'r2-1', author: 'CineFan', rating: 4, text: 'A fun and unique concept. The talking teddy bear steals the show!' },
      { id: 'r2-2', author: 'ActionJunkie', rating: 4, text: 'Surprisingly good action sequences for a movie about a teddy bear. Enjoyable watch.' },
    ],
    showtimes: [
      { id: 'st2-1', time: '17:30', theatre: 'CineArt Boutique' },
      { id: 'st2-2', time: '20:15', theatre: 'Plaza Theatre 2' },
    ],
  },
  {
    id: '3',
    title: 'Comali',
    tagline: 'A man wakes up from a coma after 16 years.',
    overview: 'A young man who wakes up from a long coma struggles to adjust to the modern world he does not recognize.',
    releaseYear: 2019,
    genres: ['Comedy', 'Drama'],
    rating: 4.5,
    duration: '2h 21m',
    posterImageId: 'movie-poster-comali',
    heroImageId: 'movie-hero-comali',
    posterImageUrl: 'https://th.bing.com/th/id/OIP.HnSyiKz7TWTUpmRdaxVpcgHaK-?w=115&h=181&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
    heroImageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviews: [
      { id: 'r3-1', author: 'CinemaFan', rating: 5, text: 'Hilarious and heartwarming. A really enjoyable entertainer.' },
      { id: 'r3-2', author: 'ReviewRaja', rating: 4, text: 'A fun concept with great comedic moments. A must watch.' },
    ],
    showtimes: [
      { id: 'st3-1', time: '19:00', theatre: 'MegaPlex 5' },
      { id: 'st3-2', time: '22:00', theatre: 'IMAX Galaxy' },
    ],
  },
  {
    id: '4',
    title: '96',
    tagline: 'A high school reunion brings back memories of a lost love.',
    overview: 'Two high school sweethearts meet at a reunion after 22 years and reminisce about their past.',
    releaseYear: 2018,
    genres: ['Romance', 'Drama'],
    rating: 4.8,
    duration: '2h 38m',
    posterImageId: 'movie-poster-96',
    heroImageId: 'movie-hero-96',
    posterImageUrl: 'https://th.bing.com/th/id/OIP.zO36YWUiZiHTu4OwOZZsXAHaFj?w=196&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
    heroImageUrl: 'https://images.unsplash.com/photo-1554058288-6c8355602410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviews: [
      { id: 'r4-1', author: 'RamLovesJanu', rating: 5, text: 'An absolute classic. The chemistry between the leads is magical. Pure nostalgia.' },
      { id: 'r4-2', author: 'FilmBuff', rating: 5, text: 'A beautiful, poignant love story that stays with you. The music is a masterpiece.' },
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
    posterImageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u51y0T4bZ3f4R9d2TA2a2V3M5hS.jpg',
    heroImageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    posterImageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dy3K6h4n23g2s5S1i5GgH7aJtDD.jpg',
    heroImageUrl: 'https://images.unsplash.com/photo-1518199266794-259eac943c2c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
  
  let filteredMovies = movies;

  if (query) {
    filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
  }
  
  console.log('Movies fetched.');
  return filteredMovies;
}

export async function getMovieById(id: string): Promise<Movie | undefined> {
  console.log(`Fetching movie by id: ${id}`);
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay
  
  const movie = movies.find(movie => movie.id === id);

  if (movie) {
    console.log('Movie fetched.');
    return movie;
  }
  
  return undefined;
}
