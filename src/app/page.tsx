import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { getMovies } from '@/lib/data';
import { MovieCard } from '@/components/movie-card';
import { Search } from 'lucide-react';

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const movies = await getMovies(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
          Now Showing
        </h1>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          {/* This is a decorative search bar. A full implementation would use a form and client component to update search params. */}
          <Input
            type="search"
            placeholder="Search movies..."
            className="w-full rounded-full bg-card pl-10"
            defaultValue={query}
          />
        </div>
      </div>
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold">No movies found</h2>
            <p className="mt-2 text-muted-foreground">
              Try a different search or{' '}
              <Link href="/" className="text-primary underline">
                clear the search
              </Link>
              .
            </p>
        </div>
      )}
    </div>
  );
}
