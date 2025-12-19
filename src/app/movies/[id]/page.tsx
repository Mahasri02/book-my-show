import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getMovieById } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, Clock, Calendar, Ticket } from 'lucide-react';
import { ReviewSummarizer } from './components/review-summarizer';

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie = await getMovieById(params.id);

  if (!movie) {
    notFound();
  }

  return (
    <div className="animate-in fade-in-50">
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        {movie.heroImageUrl && (
          <Image
            src={movie.heroImageUrl}
            alt={`Hero image for ${movie.title}`}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </section>

      <div className="container mx-auto -mt-24 md:-mt-32 px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="p-6 rounded-lg bg-card shadow-lg">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-primary">{movie.title}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{movie.tagline}</p>
              
              <div className="mt-4 flex items-center flex-wrap gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{movie.rating.toFixed(1)}/5.0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{movie.releaseYear}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <Badge key={genre} variant="outline">{genre}</Badge>
                ))}
              </div>

              <Separator className="my-6" />

              <div>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{movie.overview}</p>
              </div>

              <Separator className="my-6" />

              <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">User Reviews</h2>
                    <ReviewSummarizer movieTitle={movie.title} reviews={movie.reviews} />
                </div>
                <div className="space-y-4">
                  {movie.reviews.map((review) => (
                    <Card key={review.id} className="bg-background">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">{review.author}</CardTitle>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{review.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="sticky top-20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Ticket className="w-6 h-6 text-accent" />
                  Showtimes & Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {movie.showtimes.map((showtime) => (
                  <div key={showtime.id} className="flex justify-between items-center p-3 rounded-md border bg-background">
                    <div>
                      <p className="font-bold text-lg">{showtime.time}</p>
                      <p className="text-sm text-muted-foreground">{showtime.theatre}</p>
                    </div>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href={`/booking/${movie.id}?showtime=${showtime.id}`}>Book Now</Link>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="py-8"></div>
    </div>
  );
}
