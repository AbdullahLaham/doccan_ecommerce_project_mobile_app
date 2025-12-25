import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, ActivityIndicator, Pressable } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import SafeView from '@/components/SafeView'

 type OrderItem = {
  id: string
  name: string
  quantity: number
  price: number
 }

 type Order = {
  id: string
  status: 'processing' | 'shipped' | 'delivered'
  date: string
  address: string
  paymentMethod: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  total: number
 }

 const STATUS_LABELS: Record<Order['status'], string> = {
  processing: 'قيد المعالجة',
  shipped: 'تم الشحن',
  delivered: 'تم التوصيل',
 }

export default function OrderDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setOrder({
        id: String(id),
        status: 'shipped',
        date: '2025-01-12',
        address: 'الرياض، حي النرجس، شارع الملك سلمان',
        paymentMethod: 'الدفع عند الاستلام',
        items: [
          { id: '1', name: 'سماعة بلوتوث', quantity: 1, price: 120 },
          { id: '2', name: 'ساعة ذكية', quantity: 2, price: 150 },
        ],
        subtotal: 420,
        shipping: 30,
        total: 450,
      })
      setLoading(false)
    }, 800)
  }, [id])

  if (loading || !order) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <ActivityIndicator size="large" color="#88c1c5" />
      </View>
    )
  }

  return (
    <SafeView className="flex-1 bg-gray-50 px-4 pt-4">
        <ScrollView className="flex-1 bg-gray-50 px-4 pt-4">
      {/* Header */}
      <View className="mb-4">
        <Text className="text-xl font-bold">طلب رقم {order.id}</Text>
        <Text className="text-gray-500 mt-1">{order.date}</Text>
      </View>

      {/* Status */}
      <View className="bg-white rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-2">حالة الطلب</Text>
        <Text className="text-[#88c1c5] font-bold">{STATUS_LABELS[order.status]}</Text>
      </View>

      {/* Items */}
      <View className="bg-white rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-3">المنتجات</Text>
        {order.items.map(item => (
          <View key={item.id} className="flex-row justify-between mb-2">
            <Text className="text-gray-700">{item.name} × {item.quantity}</Text>
            <Text className="font-semibold">{item.price * item.quantity} ر.س</Text>
          </View>
        ))}
      </View>

      {/* Address */}
      <View className="bg-white rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-2">عنوان التوصيل</Text>
        <Text className="text-gray-600">{order.address}</Text>
      </View>

      {/* Payment */}
      <View className="bg-white rounded-2xl p-4 mb-4">
        <Text className="font-semibold mb-2">طريقة الدفع</Text>
        <Text className="text-gray-600">{order.paymentMethod}</Text>
      </View>

      {/* Summary */}
      <View className="bg-white rounded-2xl p-4 mb-6">
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-600">المجموع</Text>
          <Text>{order.subtotal} ر.س</Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-600">الشحن</Text>
          <Text>{order.shipping} ر.س</Text>
        </View>
        <View className="flex-row justify-between border-t pt-3">
          <Text className="font-bold">الإجمالي</Text>
          <Text className="font-bold">{order.total} ر.س</Text>
        </View>
      </View>

      {/* Action */}
      <Pressable
        onPress={() => router.push('/(order)/track')}
        className="bg-[#88c1c5] py-4 rounded-full mb-10"
      >
        <Text className="text-white text-center font-bold">تتبع الطلب</Text>
      </Pressable>
    </ScrollView>
        </SafeView>
  )
}
