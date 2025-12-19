export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
};

export type Showtime = {
  id: string;
  time: string;
  theatre: string;
};

export type Movie = {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  releaseYear: number;
  genres: string[];
  rating: number;
  duration: string;
  posterImageId: string;
  heroImageId: string;
  reviews: Review[];
  showtimes: Showtime[];
  posterImageUrl?: string;
  heroImageUrl?: string;
};
