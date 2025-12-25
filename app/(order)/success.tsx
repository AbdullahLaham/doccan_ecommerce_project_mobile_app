import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import SafeView from '@/components/SafeView'
import SuccessCheck from '@/components/SuccessCheck'

export default function OrderSuccessScreen() {
  const router = useRouter()

  return (
    <SafeView className="flex-1 bg-neutral-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Icon */}
        <View className="items-center mt-20">
          <SuccessCheck />

          <Text
            className="text-2xl font-extrabold text-neutral-900 mt-6"
            style={{ writingDirection: 'rtl' }}
          >
            تم تأكيد طلبك
          </Text>

          <Text
            className="text-neutral-500 mt-2 text-center px-10"
            style={{ writingDirection: 'rtl' }}
          >
            شكراً لتسوقك من دكانك، سيتم تجهيز طلبك وشحنه في أقرب وقت
          </Text>
        </View>

        {/* Order Card */}
        <View className="mx-6 mt-10 bg-white rounded-3xl p-6 shadow-sm">
          <Text
            className="text-lg font-bold text-neutral-900 mb-4"
            style={{ writingDirection: 'rtl' }}
          >
            تفاصيل الطلب
          </Text>

          <View className="flex-row justify-between mb-3">
            <Text className="text-neutral-500">رقم الطلب</Text>
            <Text className="font-semibold text-neutral-900">
              #DK-392184
            </Text>
          </View>

          <View className="flex-row justify-between mb-3">
            <Text className="text-neutral-500">عدد المنتجات</Text>
            <Text className="font-semibold text-neutral-900">
              3
            </Text>
          </View>

          <View className="flex-row justify-between mb-3">
            <Text className="text-neutral-500">طريقة الدفع</Text>
            <Text className="font-semibold text-neutral-900">
              بطاقة بنكية
            </Text>
          </View>

          <View className="flex-row justify-between pt-3 border-t border-neutral-200">
            <Text
              className="text-base font-bold text-neutral-900"
              style={{ writingDirection: 'rtl' }}
            >
              الإجمالي
            </Text>
            <Text className="text-xl font-extrabold text-neutral-900">
              541.97 $
            </Text>
          </View>
        </View>

        {/* Status Timeline */}
        <View className="mx-6 mt-8 bg-white rounded-3xl p-6 shadow-sm">
          <Text
            className="text-lg font-bold text-neutral-900 mb-4"
            style={{ writingDirection: 'rtl' }}
          >
            حالة الطلب
          </Text>

          <View className="flex-row items-center mb-3">
            <View className="w-3 h-3 rounded-full bg-[#88c1c5]" />
            <Text className="ml-3 text-neutral-900 font-medium">
              تم استلام الطلب
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <View className="w-3 h-3 rounded-full bg-neutral-300" />
            <Text className="ml-3 text-neutral-500">
              قيد التجهيز
            </Text>
          </View>

          <View className="flex-row items-center">
            <View className="w-3 h-3 rounded-full bg-neutral-300" />
            <Text className="ml-3 text-neutral-500">
              تم الشحن
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Actions */}
      <View className="px-6 py-6 bg-white border-t border-neutral-200">
        <TouchableOpacity
          onPress={() => router.replace('/')}
          className="bg-[#88c1c5] rounded-2xl py-4 mb-3"
        >
          <Text
            className="text-center text-white font-extrabold text-lg"
            style={{ writingDirection: 'rtl' }}
          >
            العودة للرئيسية
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/orders')}
          className="border border-neutral-300 rounded-2xl py-4 mb-3"
        >
          <Text
            className="text-center text-neutral-900 font-bold"
            style={{ writingDirection: 'rtl' }}
          >
            عرض طلباتي
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push(`/track?orderId=5`)}
          className="border border-neutral-300 rounded-2xl py-4 mb-3"
        >
          <Text className="text-center text-neutral-900 font-extrabold">
            تتبع الطلب
          </Text>
        </TouchableOpacity>
      </View>
    </SafeView>
  )
}
