
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { getMovies } from '@/lib/data';
import { MovieCard } from '@/components/movie-card';
import { Search } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';
import type { Movie } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomePageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const initialQuery = searchParams.get('query') || '';
    getMovies(initialQuery).then((movies) => {
      setMovies(movies);
      setIsLoading(false);
    });
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    startTransition(() => {
      const params = new URLSearchParams(window.location.search);
      if (newQuery) {
        params.set('query', newQuery);
      } else {
        params.delete('query');
      }
      router.replace(`/?${params.toString()}`);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
          Now Showing
        </h1>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search movies..."
            className="w-full rounded-full bg-card pl-10"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      {(isLoading || isPending) ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
                <Skeleton className="h-[450px] w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in-50">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold">No movies found</h2>
            <p className="mt-2 text-muted-foreground">
              Try a different search term.
            </p>
        </div>
      )}
    </div>
  );
}
