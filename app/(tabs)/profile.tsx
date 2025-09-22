import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const profile = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="absolute w-full z-0 " />
      <ScrollView>
        <View className='flex-col items-center justify-center mt-20'>
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5  mx-auto" />
          <Text className='text-white font-bold text-2xl mt-2'>Login</Text>
        </View>
        <View className='mt-10 px-[20px]'>
          <View className='mt-10 '>
            <Text className='text-white font-bold text-2xl mt-2'>Email</Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              className="text-white bg-dark-200 rounded-lg p-3 mt-2"
            />
          </View>
          <View className='mt-10 px-2'>
            <Text className='text-white font-bold text-2xl mt-2'>Password</Text>
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              className="text-white bg-dark-200 rounded-lg p-3 mt-2"
            />
          </View>
          <TouchableOpacity className='flex-row items-center justify-center mt-10 px-2 bg-accent rounded-lg py-3.5 z-50 left-0 right-0 '>
            <Text className='text-white font-bold text-2xl'>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})