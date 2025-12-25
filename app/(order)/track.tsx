import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import SafeView from '@/components/SafeView'

type OrderStatus =
  | 'received'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'out_for_delivery'
  | 'delivered'

const STEPS: { key: OrderStatus; label: string }[] = [
  { key: 'received', label: 'تم استلام الطلب' },
  { key: 'confirmed', label: 'تم تأكيد الطلب' },
  { key: 'processing', label: 'قيد التجهيز' },
  { key: 'shipped', label: 'تم الشحن' },
  { key: 'out_for_delivery', label: 'خرج للتوصيل' },
  { key: 'delivered', label: 'تم التسليم' },
]

export default function TrackOrderScreen() {
  const { orderId } = useLocalSearchParams<{ orderId: string }>()
  const [status, setStatus] = useState<OrderStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrder()
    const interval = setInterval(fetchOrder, 15000) // auto refresh

    return () => clearInterval(interval)
  }, [])

  const fetchOrder = async () => {
    try {
      const res = await fetch(`https://your-api.com/orders/${orderId}`)
      const data = await res.json()
      setStatus(data.status)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

//   if (loading || !status) {
//     return (
//       <View className="flex-1 items-center justify-center bg-neutral-50">
//         <ActivityIndicator size="large" color="#88c1c5" />
//       </View>
//     )
//   }

  const currentIndex = STEPS.findIndex(s => s.key === status)

  return (
    <SafeView className="flex-1 bg-neutral-50">
        <ScrollView
      className="flex-1 bg-neutral-50 px-6 pt-10"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text
        className="text-2xl font-extrabold mb-2"
        style={{ writingDirection: 'rtl' }}
      >
        تتبع الطلب
      </Text>

      <Text
        className="text-neutral-500 mb-10"
        style={{ writingDirection: 'rtl' }}
      >
        رقم الطلب: #{orderId}
      </Text>

      {/* Timeline */}
      <View className="bg-white rounded-3xl p-6 shadow-sm">
        {STEPS.map((step, index) => {
          const completed = index <= currentIndex
          const isLast = index === STEPS.length - 1

          return (
            <View key={step.key} className="flex-row">
              {/* Line */}
              <View className="items-center mr-4">
                <View
                  className={`w-4 h-4 rounded-full ${
                    completed ? 'bg-[#88c1c5]' : 'bg-neutral-300'
                  }`}
                />
                {!isLast && (
                  <View
                    className={`w-[2px] flex-1 mt-1 ${
                      completed ? 'bg-[#88c1c5]' : 'bg-neutral-300'
                    }`}
                  />
                )}
              </View>

              {/* Text */}
              <View className="pb-8 flex-1">
                <Text
                  className={`font-semibold text-base ${
                    completed ? 'text-neutral-900' : 'text-neutral-400'
                  }`}
                  style={{ writingDirection: 'rtl' }}
                >
                  {step.label}
                </Text>

                {step.key === status && (
                  <Text
                    className="text-xs text-[#88c1c5] mt-1"
                    style={{ writingDirection: 'rtl' }}
                  >
                    الحالة الحالية
                  </Text>
                )}
              </View>
            </View>
          )
        })}
      </View>

      {/* Footer Hint */}
      <Text
        className="text-neutral-400 text-center mt-10 text-sm"
        style={{ writingDirection: 'rtl' }}
      >
        يتم تحديث حالة الطلب تلقائياً
      </Text>
    </ScrollView>
    </SafeView>
  )
}
