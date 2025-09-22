import { StyleSheet, Text, View, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'
import { updateSearchCount } from '@/services/appwrite'

const search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: movies, loading: moviesLoading, error: moviesError, reFetch: loadMovies, reset } = useFetch(() => fetchMovies({ query: searchQuery }))
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (searchQuery.trim() !== '') {
        await loadMovies()

      } else {
        reset()
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [searchQuery])

  useEffect(() => {
    if (movies?.results.length > 0 && movies?.results[0]) {
      updateSearchCount(searchQuery, movies?.results[0])
    }
  }, [movies])

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="absolute w-full z-0 " />
      <FlatList
        data={movies?.results}
        renderItem={({ item }) => (
          <MovieCard {...item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16
        }}
        className="mt-2 pb-32"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className='my-5'>
              <SearchBar placeholder="Search for a movie, series or person" value={searchQuery} onChangeText={(value: string) => setSearchQuery(value)} />
            </View>
            {moviesLoading && (
              <ActivityIndicator size="large" color="#0000ff" className="mt-5 self-center" />
            )}
            {moviesError && (
              <Text className="text-red-500 mt-5 self-center">Error: {moviesError.message}</Text>
            )}
            {/* {console.log("fourth ", movies?.results.length)} */}
            {!moviesLoading && !moviesError && searchQuery.trim() && movies?.results.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Search Results fot {''}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          <>
            {!moviesLoading && !moviesError ? (
              <Text className="text-gray-500 text-center mt-5">{searchQuery.trim() ? "No results found" : "Start typing to search"}</Text>
            ) : null}
          </>
        }
      />
    </View>
  )
}

export default search

