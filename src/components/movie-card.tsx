import Link from 'next/link';
import Image from 'next/image';
import type { Movie } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Button } from './ui/button';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const placeholderImage = PlaceHolderImages.find(
    (img) => img.id === movie.posterImageId
  );

  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <Link href={`/movies/${movie.id}`} className="group/link block">
        <CardHeader className="p-0">
          <div className="relative aspect-[2/3] w-full">
            {placeholderImage && (
              <Image
                src={placeholderImage.imageUrl}
                alt={`Poster for ${movie.title}`}
                data-ai-hint={placeholderImage.imageHint}
                fill
                className="object-cover transition-transform duration-300 group-hover/link:scale-105"
              />
            )}
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4">
        <Link href={`/movies/${movie.id}`}>
          <CardTitle className="mb-2 text-xl font-bold leading-tight tracking-tighter group-hover:text-primary">
            {movie.title}
          </CardTitle>
        </Link>
        <div className="flex flex-wrap gap-2">
          {movie.genres.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary" className="font-normal">
              {genre}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold">{movie.rating.toFixed(1)}</span>
          </div>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href={`/booking/${movie.id}?showtime=${movie.showtimes[0].id}`}>Book Tickets</Link>
          </Button>
      </CardFooter>
    </Card>
  );
}
