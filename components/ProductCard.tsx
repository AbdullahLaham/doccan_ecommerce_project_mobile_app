import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable, Image } from 'react-native'
import { useCartStore } from '@/store/cartStore'
import { router } from 'expo-router';

export default function ProductCard({ id, image, title, price, oldPrice }: any) {
  const addItem = useCartStore(state => state.addItem);
  const addToCart = () => {
    addItem({
      id,
      name: title,
      price: price,
      quantity: 1,
      image: image,

    });
  }



  return (
    <Pressable className="w-44 bg-white rounded-3xl overflow-hidden shadow-md active:scale-95" onPress={() => router.push('/product/5')}>
      <Image source={{ uri: image }} className="w-full h-40" resizeMode="cover" />

      <View className="p-4">
        <Text className="font-semibold text-sm mb-2" numberOfLines={2}>
          {title}
        </Text>

        <View className="flex-row justify-between items-center">
          <Pressable className="bg-black px-4 py-2 rounded-full" onPress={addToCart}>
            <Text className="text-white text-xs font-bold">أضف</Text>
          </Pressable>

          <View>
            <Text className="text-lg font-extrabold">{price} ر.س</Text>
            {oldPrice ? (
              <Text className="text-xs text-gray-400 line-through">{oldPrice} ر.س</Text>
            ) : null}
          </View>
        </View>
      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({})