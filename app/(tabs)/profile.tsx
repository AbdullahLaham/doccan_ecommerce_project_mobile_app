import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const profile = () => {
  return (
    <View className='flex items-center justify-center h-full'>
      <Text>profile</Text>
      <Image source={icons.profile} />
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})