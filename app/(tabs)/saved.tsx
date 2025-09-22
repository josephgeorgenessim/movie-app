import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const saved = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="absolute w-full z-0 " />
      <ScrollView className='flex-1'>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5  mx-auto" />
        <View className='mt-10 px-[20px]'>
          <Text className='text-white font-bold text-2xl mt-2'>Saved Movies</Text>
        </View>
        <View className='mt-10 items-center justify-center flex-1'>
          <Text className='text-light-200 font-bold text-2xl mt-2'>No saved movies</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default saved
