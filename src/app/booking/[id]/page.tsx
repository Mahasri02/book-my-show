import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMovieById } from '@/lib/data';
import { SeatMap } from '@/components/seat-map';
import { ArrowLeft, Calendar, Clock, Clapperboard } from 'lucide-react';

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { showtime: string };
}) {
  const movie = await getMovieById(params.id);
  const showtime = movie?.showtimes.find((st) => st.id === searchParams.showtime);

  if (!movie || !showtime) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/movies/${movie.id}`} className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Movie Details
        </Link>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
                <p className="text-sm text-muted-foreground">You are booking for</p>
                <h1 className="text-3xl font-bold text-primary">{movie.title}</h1>
                <div className="flex items-center gap-6 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Clapperboard className="h-5 w-5" />
                        <span>{showtime.theatre}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>{showtime.time}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span>Today</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <SeatMap />
    </div>
  );
}
