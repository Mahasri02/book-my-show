'use client';

import { useState, useMemo, useEffect } from 'react';
import { Armchair } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from '@/hooks/use-toast';

type SeatStatus = 'available' | 'selected' | 'booked';

interface Seat {
  id: string;
  status: SeatStatus;
}

const generateSeats = (): Seat[] => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;
  const initialSeats: Seat[] = [];
  for (const row of rows) {
    for (let i = 1; i <= seatsPerRow; i++) {
      initialSeats.push({
        id: `${row}${i}`,
        status: Math.random() > 0.7 ? 'booked' : 'available',
      });
    }
  }
  return initialSeats;
};

const TICKET_PRICE = 12.50;

export function SeatMap() {
  const [seats, setSeats] = useState<Seat[]>(generateSeats);
  const { toast } = useToast();

  const selectedSeats = useMemo(() => seats.filter((s) => s.status === 'selected'), [seats]);
  const totalPrice = useMemo(() => selectedSeats.length * TICKET_PRICE, [selectedSeats]);

  const handleSeatClick = (seatId: string) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId) {
          if (seat.status === 'available') return { ...seat, status: 'selected' };
          if (seat.status === 'selected') return { ...seat, status: 'available' };
        }
        return seat;
      })
    );
  };
  
  // Simulate real-time updates from other users via WebSockets
  useEffect(() => {
    const interval = setInterval(() => {
      setSeats(prevSeats => {
        const availableSeats = prevSeats.filter(s => s.status === 'available');
        if (availableSeats.length === 0) {
            clearInterval(interval);
            return prevSeats;
        }
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
        const randomSeatId = availableSeats[randomIndex].id;
        
        toast({
            title: "Seat Update",
            description: `Seat ${randomSeatId} has just been booked by another user.`,
        });

        return prevSeats.map(s => s.id === randomSeatId ? {...s, status: 'booked'} : s);
      });
    }, 8000); // A new seat is booked every 8 seconds

    return () => clearInterval(interval);
  }, [toast]);

  const resetSelection = () => {
    setSeats(seats.map(seat => seat.status === 'selected' ? {...seat, status: 'available'} : seat));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Select Your Seats</CardTitle>
                <CardDescription>Click on available seats to select them.</CardDescription>
            </CardHeader>
          <CardContent className="flex flex-col items-center p-4">
            <div className="w-full h-2 rounded-t-full bg-primary mb-8" />
            <div className="text-center text-sm text-muted-foreground mb-8">Screen</div>

            <div className="grid grid-cols-12 gap-2 w-full max-w-2xl">
              {seats.map((seat) => (
                <button
                  key={seat.id}
                  onClick={() => handleSeatClick(seat.id)}
                  disabled={seat.status === 'booked'}
                  className="disabled:cursor-not-allowed group"
                  aria-label={`Seat ${seat.id}, status: ${seat.status}`}
                >
                  <Armchair
                    className={cn(
                      'h-6 w-6 transition-colors',
                      {
                        'text-muted-foreground/30': seat.status === 'booked',
                        'text-gray-400 hover:text-accent': seat.status === 'available',
                        'text-accent fill-accent/70': seat.status === 'selected',
                      }
                    )}
                  />
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-8 text-sm">
                <div className="flex items-center gap-2"><Armchair className="w-5 h-5 text-gray-400" /> Available</div>
                <div className="flex items-center gap-2"><Armchair className="w-5 h-5 text-accent fill-accent/70" /> Selected</div>
                <div className="flex items-center gap-2"><Armchair className="w-5 h-5 text-muted-foreground/30" /> Booked</div>
            </div>

          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedSeats.length > 0 ? (
                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium">Selected Seats</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {selectedSeats.map(seat => (
                                <Badge key={seat.id} variant="secondary">{seat.id}</Badge>
                            ))}
                        </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            ) : (
              <p className="text-muted-foreground">Select seats to see your summary.</p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={selectedSeats.length === 0}>
                  Confirm Booking
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Your Payment</AlertDialogTitle>
                  <AlertDialogDescription>
                    You are about to purchase {selectedSeats.length} ticket(s) for a total of ${totalPrice.toFixed(2)}. This is a mock payment gateway.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => toast({ title: "Booking Confirmed!", description: "Your tickets have been sent to your email."})}>
                    Pay Now
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button variant="outline" className="w-full" onClick={resetSelection} disabled={selectedSeats.length === 0}>
              Clear Selection
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
