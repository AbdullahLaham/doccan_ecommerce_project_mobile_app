import { router } from 'expo-router';
import { View, Text, TextInput, Pressable } from 'react-native';


export default function SignupScreen() {
    return (
        <View className="flex-1 bg-indigo-600 justify-center px-6">
            <View className="bg-white rounded-3xl p-8 shadow-lg">
                <Text className="text-3xl font-bold text-gray-900">أنشأ حساب جديد</Text>
                <Text className="text-gray-500 font-semibold text-md mt-2 mb-6">ابدأ رحلتك مع دكانك</Text>


                <TextInput
                    placeholder="الاسم الكامل"
                    className="border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-800"
                />
                <TextInput
                    placeholder="الايميل"
                    className="border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-800"
                />
                <TextInput
                    placeholder="الرقم السري"
                    secureTextEntry
                    className="border border-gray-200 rounded-xl px-4 py-3 mb-6 text-gray-800"
                />


                <Pressable className="bg-indigo-600 py-4 rounded-xl active:opacity-90">
                    <Text className="text-white text-center font-semibold text-lg">انشاء حساب</Text>
                </Pressable>


                <Text className="text-center text-gray-500 mt-6">
                    لديك حساب بالفعل?{' '}
                    <Text
                        className="text-indigo-600 font-semibold"
                        onPress={() => router.push('/(auth)/login')}
                    >
                        تسجيل الدخول
                    </Text>
                </Text>
            </View>
        </View>
    );
}