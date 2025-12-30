import { router } from 'expo-router';
import { View, Text, TextInput, Pressable } from 'react-native';


export default function SignupScreen() {
    return (
        <View className="flex-1 bg-[#88c1c5] justify-center px-6">
            <View className="bg-white rounded-[32px] px-7 py-10 shadow-2xl">
                <View className='mb-8'>
                    <Text className="text-3xl font-extrabold text-center text-gray-900">تسجيل الدخول</Text>
                    <Text className="text-center text-gray-500 font-semibold text-base mt-3">سجل الدخول لاكمال رحلتك معنا</Text>

                </View>
                <View className='gap-4'>
                    <TextInput
                        placeholder="Email"
                        className="border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base bg-gray-50"
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        className="border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base bg-gray-50"
                    />
                </View>


                <Pressable className="mt-8 bg-[#1f3a5f] py-4 rounded-2xl active:scale-[0.98]" onPress={() => router.push('/(tabs)/home')}>
                    <Text className="text-white text-center font-semibold text-lg">تسجيل الدخول</Text>
                </Pressable>


                <Text className="text-center text-gray-500 mt-6">
                    ليس لديك حساب؟{' '}
                    <Text
                        className="text-[#1f3a5f] font-bold"
                        onPress={() => router.push('/(auth)/sign-up')}
                    >
                        انشاء حساب
                    </Text>
                </Text>
            </View>
        </View>
    );
}