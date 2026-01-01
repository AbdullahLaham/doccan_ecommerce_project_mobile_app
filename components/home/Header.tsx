import React, { useState } from 'react'
import { View, Text, TextInput, ActivityIndicator, Alert, Image, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { useCartStore } from '@/store/cartStore';
import { Ionicons } from '@expo/vector-icons';

interface HomeHeaderProps {
  count?: number
}

export default function Header({ count = 0 }: HomeHeaderProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const cartCount = useCartStore(state => state.getTotalItems())


  const handleSearch = async () => {
    const trimmed = query.trim()
    if (trimmed.length < 2) {
      Alert.alert('تنبيه', 'الرجاء إدخال كلمتين على الأقل')
      return
    }

    try {
      setLoading(true)
      const response = await fetch(`https://your-api.com/products/search?q=${encodeURIComponent(trimmed)}`)
      if (!response.ok) throw new Error('Request failed')
      const data = await response.json()
      if (!Array.isArray(data) || data.length === 0) {
        Alert.alert('لا توجد نتائج', 'لم يتم العثور على منتجات')
        return
      }
      router.push({
        pathname: '/products',
        params: {
          q: trimmed,
          results: JSON.stringify(data),
        },
      })
    } catch {
      Alert.alert('خطأ', 'حدث خطأ أثناء البحث')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="px-4 pt-6 pb-4 bg-gray-100">
      <View className="flex-row items-center gap-3">
        {/* App Title */}
        {/* <Text className="text-2xl font-extrabold">دكانك</Text> */}
        <Image source={require('@/assets/images/title.png')} style={{ width: 60, height: 70 }} />

        {/* Search Input */}
        <View className="flex-1 bg-white rounded-2xl px-4 py-2 shadow-sm flex-row items-center">
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="ابحث عن المنتجات"
            placeholderTextColor="#9ca3af"
            className="flex-1 text-sm"
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />
          {loading && <ActivityIndicator size="small" color="#88c1c5" />}
        </View>

        {/* Cart */}
        <Pressable onPress={() => router.push('/cart')} className="relative">
          <View className="w-14 h-14 rounded-full items-center justify-center p-2 shadow-black shadow-sm ">
            <Ionicons name="cart-outline" size={35} color="black" />;

          </View>
          {cartCount > 0 && (
            <View className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full items-center justify-center">
              <Text className="text-white text-xs font-bold">{cartCount}</Text>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  )
}