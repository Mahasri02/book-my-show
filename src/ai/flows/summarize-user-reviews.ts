'use server';

/**
 * @fileOverview Summarizes user reviews for a given movie.
 *
 * - summarizeUserReviews - A function that summarizes user reviews for a movie.
 * - SummarizeUserReviewsInput - The input type for the summarizeUserReviews function.
 * - SummarizeUserReviewsOutput - The return type for the summarizeUserReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeUserReviewsInputSchema = z.object({
  movieTitle: z.string().describe('The title of the movie to summarize reviews for.'),
  userReviews: z.string().describe('A string containing all user reviews for the movie.'),
});
export type SummarizeUserReviewsInput = z.infer<typeof SummarizeUserReviewsInputSchema>;

const SummarizeUserReviewsOutputSchema = z.object({
  summary: z.string().describe('A summary of the user reviews for the movie.'),
});
export type SummarizeUserReviewsOutput = z.infer<typeof SummarizeUserReviewsOutputSchema>;

export async function summarizeUserReviews(input: SummarizeUserReviewsInput): Promise<SummarizeUserReviewsOutput> {
  return summarizeUserReviewsFlow(input);
}

const summarizeUserReviewsPrompt = ai.definePrompt({
  name: 'summarizeUserReviewsPrompt',
  input: {schema: SummarizeUserReviewsInputSchema},
  output: {schema: SummarizeUserReviewsOutputSchema},
  prompt: `You are a movie critic tasked with summarizing user reviews for a given movie. Provide a concise summary of the following reviews for the movie "{{movieTitle}}".\n\nReviews: {{{userReviews}}}`,
});

const summarizeUserReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeUserReviewsFlow',
    inputSchema: SummarizeUserReviewsInputSchema,
    outputSchema: SummarizeUserReviewsOutputSchema,
  },
  async input => {
    const {output} = await summarizeUserReviewsPrompt(input);
    return output!;
  }
);
