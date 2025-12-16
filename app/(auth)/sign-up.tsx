import { router } from 'expo-router';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function SignupScreen() {
  return (
    <View className="flex-1 bg-[#88c1c5] justify-center px-5">
      {/* <Text className='text-center my-5 font-extrabold text-5xl text-[#1698a1]'>دكانك</Text> */}
      
      {/* Card */}
      <View className="bg-white rounded-[32px] px-7 py-10 shadow-2xl">
        
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-extrabold text-center text-gray-900">
            أنشئ حساب جديد
          </Text>
          <Text className="text-center text-gray-500 font-semibold text-base mt-3">
            ابدأ رحلتك مع دكانك بخطوات بسيطة
          </Text>
        </View>

        {/* Inputs */}
        <View className="gap-4">
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#9ca3af"
            className="border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base bg-gray-50"
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#9ca3af"
            className="border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base bg-gray-50"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            secureTextEntry
            className="border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base bg-gray-50"
          />
        </View>

        {/* Button */}
        <Pressable className="mt-8 bg-[#1f3a5f] py-4 rounded-2xl active:scale-[0.98]">
          <Text className="text-white text-center font-bold text-lg">
            إنشاء حساب
          </Text>
        </Pressable>

        {/* Footer */}
        <Text className="text-center text-gray-500 mt-7 text-base">
          لديك حساب بالفعل؟{' '}
          <Text
            className="text-[#1f3a5f] font-bold"
            onPress={() => router.push('/(auth)/login')}
          >
            تسجيل الدخول
          </Text>
        </Text>

      </View>
    </View>
  );
}
