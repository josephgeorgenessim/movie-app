import { Movie, TrendingMovie } from "@/interfaces/interfaces";
import { Client, Databases, Query, ID } from "appwrite";

const Database_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const Collection_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client();
client.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!);
client.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

export const updateSearchCount = async (query: string, movie?: Movie) => {
    try {
        const result = await databases.listDocuments(Database_ID, Collection_ID, [
            Query.equal("searchTerm", query),
        ])


        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
            await databases.updateDocument(Database_ID, Collection_ID, existingMovie.$id, {
                count: existingMovie.count + 1
            })
        } else {
            await databases.createDocument(Database_ID, Collection_ID, ID.unique(), {
                searchTerm: query,
                count: 1,
                movie_id: movie?.id,
                title: movie?.title,
                poster_url: 'https://image.tmdb.org/t/p/w500' + movie?.poster_path
            })
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
    try {
        const result = await databases.listDocuments(Database_ID, Collection_ID, [
            Query.orderAsc("count"),
            Query.limit(5)
        ])
        return result.documents as unknown as TrendingMovie[]
    } catch (error) {
        console.log(error)
        throw error
    }
}