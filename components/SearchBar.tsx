import { icons } from '@/constants/icons'
import React from 'react'
import { View, Image, TextInput } from 'react-native'

interface SearchBarProps {
    onPress?: () => void;
    placeholder?: string;
    value?: string;
    onChangeText?: (value: string) => void;
}

const SearchBar = ({onPress, placeholder, value, onChangeText}: SearchBarProps) => {
    return (
        <View className='flex-row items-center px-5 py-2 rounded-full bg-dark-200'>
            <Image source={icons.search} className='size-5' resizeMode='contain' style={{ tintColor: '#ab8bff' }} />
            <TextInput
                onPress={onPress}
                placeholder={placeholder} 
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor='#a8b5db'
                className='flex-1 ml-2 text-white '
            />
        </View>
    )
}

export default SearchBar