'use client';

import { useState } from 'react';
import type { Review } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeUserReviews } from '@/ai/flows/summarize-user-reviews';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ReviewSummarizerProps {
  movieTitle: string;
  reviews: Review[];
}

export function ReviewSummarizer({ movieTitle, reviews }: ReviewSummarizerProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      if (reviews.length === 0) {
        toast({
            variant: "destructive",
            title: "No Reviews",
            description: "There are no reviews to summarize for this movie.",
        });
        return;
      }
      const allReviews = reviews.map(r => `Rating: ${r.rating}/5 - "${r.text}"`).join('\n\n');
      const result = await summarizeUserReviews({ movieTitle, userReviews: allReviews });
      setSummary(result.summary);
    } catch (e) {
      console.error(e);
      toast({
        variant: 'destructive',
        title: 'Error Generating Summary',
        description: 'Failed to generate summary. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleSummarize} disabled={isLoading} size="sm" variant="outline">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4 text-accent" />
        )}
        {isLoading ? 'Generating...' : 'Generate AI Summary'}
      </Button>

      {summary && (
        <Card className="mt-6 bg-primary/5 border-primary/20 animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary"/>
                AI-Powered Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-primary/80 leading-relaxed">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
