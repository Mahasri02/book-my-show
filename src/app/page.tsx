
import { Suspense } from 'react';
import HomePageClient from './home-page-client';
import { Skeleton } from '@/components/ui/skeleton';

// Loading fallback component
function Loading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <Skeleton className="h-12 w-1/3" />
                <Skeleton className="h-10 w-full max-w-sm rounded-full" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                    <Skeleton className="h-[450px] w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            ))}
            </div>
        </div>
    )
}


export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePageClient />
    </Suspense>
  );
}
