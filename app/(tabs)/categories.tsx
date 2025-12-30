// app/(tabs)/categories.tsx
import React from 'react'
import { View, FlatList, Pressable, ImageBackground, Text } from 'react-native'
import { useRouter } from 'expo-router'
import SafeView from '@/components/SafeView'
import elec from '@/assets/images/elec.jpg'
import cloth from '@/assets/images/cloth.jpg'
import home from '@/assets/images/home.jpg'
import mobiles from '@/assets/images/mobiles.jpg'
import comps from '@/assets/images/comps.jpg'
import shoes from '@/assets/images/shoes.jpg'
import watch from '@/assets/images/watch.jpg'
import sport from '@/assets/images/sport.jpg'
import toys from '@/assets/images/toys.jpg'
import barfan from '@/assets/images/barfan.jpg'
import mekiaj from '@/assets/images/mekiaj.jpg'
import access from '@/assets/images/access.jpg'
import books from '@/assets/images/books.jpg'

import gifts from '@/assets/images/gifts.jpg'

// data/mockCategories.ts
// data/mockCategories.ts
export const mockCategories = [
  { id: '11', title: 'عطور', image: barfan },
  { id: '12', title: 'مكياج', image: mekiaj },

  { id: '13', title: 'إكسسوارات', image: access },
  { id: '14', title: 'كتب', image: books },
  { id: '15', title: 'هدايا', image: gifts },
  { id: '1', title: 'إلكترونيات', image: elec },
  { id: '2', title: 'أزياء', image: cloth },
  { id: '3', title: 'أدوات منزلية', image: home },
  { id: '4', title: 'موبايلات', image: mobiles },
  { id: '5', title: 'كمبيوترات', image: comps },
  { id: '6', title: 'أحذية', image: shoes },
  { id: '7', title: 'ساعات', image: watch },
  { id: '8', title: 'رياضة', image: sport },
  { id: '9', title: 'ألعاب', image: toys },
  
]







type Props = {
  title: string
  image: string
  onPress?: () => void
}

export const CategoryCard = ({ title, image, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 h-40 rounded-3xl overflow-hidden active:scale-95"
    >
      <ImageBackground source={image} className="flex-1">
        {/* Cinematic Overlay */}
        <View className="flex-1 bg-black/55 justify-center items-center">
          <Text className="text-neutral-300 text-2xl font-extrabold tracking-wide">
            {title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}



export default function CategoriesPage() {
  const router = useRouter()

  return (
    <SafeView className="flex-1 bg-gray-100 px-4 pt-4">
      <Text className="text-3xl font-extrabold text-center px-5 py-3 mb-4 text-gray-700">
        تصنيفات المنتجات
      </Text>

      <FlatList
        className='flex-1 px-1'
        data={mockCategories}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12, marginBottom: 12 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            image={item.image}
            onPress={() =>
              router.push({
                pathname: '/products',
                params: { category: item.title },
              })
            }
          />
        )}
      />
      <View className="h-20" />
    </SafeView>
  )
}
