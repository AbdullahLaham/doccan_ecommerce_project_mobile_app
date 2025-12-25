import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import SafeView from '@/components/SafeView'

// Mock API type
 type Order = {
  id: string
  date: string
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  itemsCount: number
 }

const STATUS_STYLES: Record<Order['status'], string> = {
  processing: 'bg-yellow-100 text-yellow-700',
  shipped: 'bg-blue-100 text-blue-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
}

export default function OrdersHistoryPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Replace with real API
    setTimeout(() => {
      setOrders([
        {
          id: 'ORD-1024',
          date: '2025-01-12',
          status: 'delivered',
          total: 420,
          itemsCount: 3,
        },
        {
          id: 'ORD-1023',
          date: '2025-01-09',
          status: 'shipped',
          total: 199,
          itemsCount: 1,
        },
        {
          id: 'ORD-1022',
          date: '2025-01-05',
          status: 'processing',
          total: 860,
          itemsCount: 5,
        },
      ])
      setLoading(false)
    }, 800)
  }, [])

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <ActivityIndicator size="large" color="#88c1c5" />
      </View>
    )
  }

  return (
    <SafeView className="flex-1 bg-gray-50 px-4 pt-4">
      <Text className="text-2xl font-bold text-neutral-600 mb-4 text-center py-5">طلباتي</Text>

      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push({ pathname: `/(order)/order-details/${item.id}`, params: { id: item.id } })}
            className="bg-white rounded-2xl p-4 mb-4 shadow-sm"
          >
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-semibold text-base">{item.id}</Text>
              <View className={`px-3 py-1 rounded-full ${STATUS_STYLES[item.status]}`}>
                <Text className="text-xs font-semibold capitalize">{item.status}</Text>
              </View>
            </View>

            <View className="flex-row justify-between items-center">
              <Text className="text-gray-500 text-sm">{item.date}</Text>
              <Text className="text-gray-700 text-sm">{item.itemsCount} منتجات</Text>
            </View>

            <View className="mt-3 flex-row justify-between items-center">
              <Text className="text-lg font-bold">{item.total} ر.س</Text>
              <Text className="text-[#88c1c5] font-semibold">عرض التفاصيل</Text>
            </View>
          </Pressable>
        )}
      />
    </SafeView>
  )
}
