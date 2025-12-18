'use server';

/**
 * @fileOverview Provides movie recommendations based on user viewing history and trending movies.
 *
 * - getRecommendedMovies - A function to retrieve movie recommendations for a user.
 * - RecommendedMoviesInput - The input type for the getRecommendedMovies function, including user viewing history.
 * - RecommendedMoviesOutput - The return type for the getRecommendedMovies function, a list of recommended movies.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendedMoviesInputSchema = z.object({
  userViewingHistory: z
    .string()
    .describe('A comma-separated list of movie titles the user has watched.'),
  trendingMovies: z
    .string()
    .optional()
    .describe('A comma-separated list of currently trending movie titles.'),
});
export type RecommendedMoviesInput = z.infer<typeof RecommendedMoviesInputSchema>;

const RecommendedMoviesOutputSchema = z.object({
  recommendedMovies: z
    .string()
    .describe('A comma-separated list of recommended movie titles.'),
});
export type RecommendedMoviesOutput = z.infer<typeof RecommendedMoviesOutputSchema>;

export async function getRecommendedMovies(input: RecommendedMoviesInput): Promise<RecommendedMoviesOutput> {
  return recommendedMoviesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendedMoviesPrompt',
  input: {schema: RecommendedMoviesInputSchema},
  output: {schema: RecommendedMoviesOutputSchema},
  prompt: `You are a movie recommendation expert. Based on the user's viewing history and trending movies, provide a list of recommended movies.

User Viewing History: {{{userViewingHistory}}}
Trending Movies: {{{trendingMovies}}}

Recommended Movies:`,
});

const recommendedMoviesFlow = ai.defineFlow(
  {
    name: 'recommendedMoviesFlow',
    inputSchema: RecommendedMoviesInputSchema,
    outputSchema: RecommendedMoviesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
