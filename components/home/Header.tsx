import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className="px-4 pt-6 pb-4 bg-gray-100">
      <View className="flex-row items-center gap-3">
        {/* App Title */}
        <Text className="text-3xl font-extrabold text-gray-600">
          دكانك
        </Text>

        {/* Search Bar */}
        <View className="flex-1 bg-white rounded-2xl px-4 py-3 shadow-sm">
          <Text className="text-gray-400 text-sm">
            ابحث عن المنتجات
          </Text>
        </View>

        {/* Cart */}
        <View className="relative">
          <View
            className="w-10 h-10 rounded-full items-center justify-center"
            style={{ backgroundColor: '#88c1c5' }}
          >
            <Text>🛒</Text>
          </View>

          {/* Cart Count */}
          <View className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full items-center justify-center">
            <Text className="text-white text-xs font-bold">
              3
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})