import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import useFetch from '@/services/useFetch'
import { fetchMovieDetails } from '@/services/api'
import { icons } from '@/constants/icons'
interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => {
  return (
    <View className='flex-col justify-center items-start mt-5'>
      <Text className='text-light-200  text-sm'>{label}</Text>
      <Text className='text-light-200  text-sm mt-2'>{value || 'N/A'}</Text>
    </View>
  )
}

const details = () => {
  const { id } = useLocalSearchParams()
  const { data: movie, loading: movieLoading, error: movieError } = useFetch(() => fetchMovieDetails(id))

  return (
    <View className='flex-1 bg-primary'>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image source={{ uri: 'https://image.tmdb.org/t/p/w500' + movie?.poster_path }} className='w-full h-[500px]' resizeMode='stretch' />
          <View className='flex-col items-start justify-center mt-5 px-5'>
            <Text className='text-white font-bold text-xl'>{movie?.title}</Text>

            <View className='flex-row items-center gap-x-1 mt-2'>
              <Text className='text-light-200  text-sm'>{movie?.release_date?.split('-')[0]}</Text>
              <Text className='text-light-200  text-sm'>{movie?.runtime} min</Text>
            </View>

            <View className='flex-row items-center bg-dark-100 mt-2 py-1 rounded-lg'>
              <Image source={icons.star} className='size-5' />
              <Text className='text-light-200  text-sm'>{Math.round(movie?.vote_average ?? 0)} /10</Text>
              <Text className='text-light-200  text-sm ml-2'>({movie?.vote_count} votes)</Text>
            </View>

            <MovieInfo label='Overview' value={movie?.overview} />
            <MovieInfo label='Genres' value={movie?.genres?.map((genre) => genre.name).join(', ') || 'N/A'} />

            <View className='flex flex-row justify-between w-1/2'>
              <MovieInfo label='Budget' value={`$${movie ? movie?.budget / 1000000 : 0} Million`} />
              <MovieInfo label='Revenue' value={`$${movie ? movie?.revenue / 1000000 : 0} Million`} />
            </View>

            <MovieInfo label='Production Companies' value={movie?.production_companies?.map((company) => company.name).join('- ') || 'N/A'} />


          </View>
        </View>
      </ScrollView>

      <TouchableOpacity className='flex-row items-center justify-center absolute bottom-5 w-full px-5 bg-accent rounded-full py-3.5 z-50 left-0 right-0 ' onPress={() => router.back()}> 
        <Image source={icons.arrow} className='size-5 mr-1 mt-0.5 rotate-180' tintColor={'#fff'} />
        <Text className='text-white font-semibold text-base'>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default details