import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { Image, ImageBackground } from 'expo-image'
import { icons } from '@/constants/icons'


const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        style={{
          width: 112,
          height: 55,
          marginTop: 15,
          borderRadius: 30,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
        contentFit="cover"
      >
        <Image
          source={icon}
          style={{
            width: 15,
            height: 15,
            tintColor: '#151312',
            marginRight: 8
          }}
        />
        <Text className='text-secondary text-base  font-semibold '>{title}</Text>
      </ImageBackground>
    )
  }
  return (
    <View className='size-full justify-center items-center mt-4 rounded-full'>
      <Image
        source={icon}
        style={{
          width: 18,
          height: 18,
          tintColor: '#A8B5DB'
        }}
      />
    </View>
  )
}
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height:"100%",
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 15,
          marginBottom: 36,
          height:55,
          position:"absolute",
          overflow:"hidden",
          borderWidth:0,
          borderColor:"#0f0D23",
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.home} title="Home" />
            </>
          )
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.search} title="Search" />
            </>
          )
        }} />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.save} title="Saved" />
            </>
          )
        }} />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.person} title="Profile" />
            </>
          )
        }} />
    </Tabs>
  )
}

export default _layout