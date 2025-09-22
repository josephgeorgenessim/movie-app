import { MovieDetails } from "@/interfaces/interfaces"

export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },

}

export const fetchMovies = async ({ query }: { query: string }) => {
    console.log(query)
    const endPoint = query != '' ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const url = `${endPoint}`
    const response = await fetch(url, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })
    if (!response.ok) {
        throw new Error('Network response was not ok', { cause: response.statusText });
    }
    const data = await response.json();
    return data;
}

export const fetchMovieDetails = async (movieId: any): Promise<MovieDetails> => {
    try {
        const url = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`
        const response = await fetch(url, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        })
        if (!response.ok) {
            throw new Error('Network response was not ok', { cause: response.statusText });
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        throw error
    }
}