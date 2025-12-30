// import { router } from 'expo-router';
// import { View, Text, TextInput, Pressable } from 'react-native';

// export default function SignupScreen() {
//   return (
//     <View className="flex-1 bg-[#88c1c5] justify-center px-5">
//       {/* <Text className='text-center my-5 font-extrabold text-5xl text-[#1698a1]'>دكانك</Text> */}
      
//       {/* Card */}
//       <View className="bg-white rounded-[32px] px-7 py-10 shadow-2xl">
        
//         {/* Header */}
//         <View className="mb-8">
//           <Text className="text-3xl font-extrabold text-center text-gray-900">
//             أنشئ حساب جديد
//           </Text>
//           <Text className="text-center text-gray-500 font-semibold text-base mt-3">
//             ابدأ رحلتك مع دكانك بخطوات بسيطة
//           </Text>
//         </View>

//         {/* Inputs */}
//         <View className="gap-4">
//           <TextInput
//             placeholder="Full Name"
//             placeholderTextColor="#9ca3af"
//             className="border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base bg-gray-50"
//           />

//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#9ca3af"
//             className="border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base bg-gray-50"
//           />

//           <TextInput
//             placeholder="Password"
//             placeholderTextColor="#9ca3af"
//             secureTextEntry
//             className="border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base bg-gray-50"
//           />
//         </View>

//         {/* Button */}
//         <Pressable className="mt-8 bg-[#1f3a5f] py-4 rounded-2xl active:scale-[0.98]" onPress={() => router.push('/(tabs)/home')}>
//           <Text className="text-white text-center font-bold text-lg">
//             إنشاء حساب
//           </Text>
//         </Pressable>

//         {/* Footer */}
//         <Text className="text-center text-gray-500 mt-7 text-base">
//           لديك حساب بالفعل؟{' '}
//           <Text
//             className="text-[#1f3a5f] font-bold"
//             onPress={() => router.push('/(auth)/login')}
//           >
//             تسجيل الدخول
//           </Text>
//         </Text>

//       </View>
//     </View>
//   );
// }











import { router } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native'

export default function SignupScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  const [method, setMethod] = useState<'sms' | 'whatsapp'>('sms')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [otpModal, setOtpModal] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', ''])
  const inputsRef = useRef<TextInput[]>([])

  const [timer, setTimer] = useState(60)

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (!otpModal || timer === 0) return
    const interval = setInterval(() => setTimer(t => t - 1), 1000)
    return () => clearInterval(interval)
  }, [otpModal, timer])

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    if (!form.name) return 'الاسم مطلوب'
    if (!form.email.includes('@')) return 'إيميل غير صالح'
    if (form.password.length < 6) return 'كلمة المرور ضعيفة'
    if (form.phone.length < 9) return 'رقم الجوال غير صالح'
    return null
  }

  /* ---------------- REGISTER ---------------- */
  const handleRegister = async () => {
    const err = validate()
    if (err) return setError(err)

    try {
      setLoading(true)
      setError(null)

      // await fetch('https://your-api.com/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...form, method }),
      // })

      setTimer(60)
      setOtpModal(true)
    } catch {
      setError('فشل إنشاء الحساب')
    } finally {
      setLoading(false)
    }
  }

  /* ---------------- VERIFY OTP ---------------- */
  const verifyOtp = async () => {
    const code = otp.join('')
    if (code.length !== 5) return setError('أدخل الرمز كامل')

    try {
      setLoading(true)
      await fetch('https://your-api.com/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: form.phone, otp: code }),
      })

      router.replace('/(tabs)/home')
    } catch {
      setError('رمز غير صحيح')
    } finally {
      setLoading(false)
    }
  }

  /* ---------------- RESEND ---------------- */
  const resendOtp = async () => {
    setTimer(60)
    await fetch('https://your-api.com/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify({ phone: form.phone, method }),
    })
  }

  return (
    <View className="flex-1 bg-[#88c1c5] justify-center px-5">

      {/* CARD */}
      <View className="bg-white rounded-[32px] px-7 py-10 shadow-2xl">
        <Text className="text-3xl font-extrabold text-center">إنشاء حساب</Text>

        {error && <Text className="text-red-500 text-center mt-3">{error}</Text>}

        {/* Inputs */}
        <View className="gap-4 mt-6">
          {['name', 'email', 'password', 'phone'].map((field, i) => (
            <TextInput
              key={field}
              placeholder={
                field === 'phone'
                  ? 'رقم الجوال'
                  : field.charAt(0).toUpperCase() + field.slice(1)
              }
              keyboardType={field === 'phone' ? 'phone-pad' : 'default'}
              secureTextEntry={field === 'password'}
              className="border rounded-2xl px-5 py-4 bg-gray-50"
              onChangeText={t => setForm({ ...form, [field]: t })}
            />
          ))}
        </View>

        {/* OTP Method */}
        <View className="flex-row justify-center gap-4 mt-6">
          {['sms', 'whatsapp'].map(m => (
            <Pressable
              key={m}
              onPress={() => setMethod(m as any)}
              className={`px-6 py-2 rounded-full ${
                method === m ? 'bg-[#1f3a5f]' : 'bg-gray-200'
              }`}
            >
              <Text className={method === m ? 'text-white' : ''}>
                {m === 'sms' ? 'SMS' : 'WhatsApp'}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Submit */}
        <Pressable
          onPress={handleRegister}
          className="mt-8 bg-[#1f3a5f] py-4 rounded-2xl"
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center font-bold text-lg">
              تسجيل
            </Text>
          )}
        </Pressable>
      </View>

      {/* ---------------- OTP MODAL ---------------- */}
      <Modal transparent visible={otpModal} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setOtpModal(false)}>
          <View className="flex-1 bg-black/50 justify-center px-6">
            <TouchableWithoutFeedback>
              <View className="bg-white rounded-3xl p-8">
                <Text className="text-xl font-bold text-center">
                  أدخل رمز التحقق
                </Text>

                {/* OTP */}
                <View className="flex-row justify-between mt-6" style={{ flexDirection: 'row', direction: 'ltr' }}>
                  {otp.map((_, i) => (
                    <TextInput
                      key={i}
                      ref={r => (inputsRef.current[i] = r!)}
                      maxLength={1}
                      keyboardType="number-pad"
                      className="w-12 h-14 text-xl text-center border rounded-xl"
                      onChangeText={t => {
                        const newOtp = [...otp]
                        newOtp[i] = t
                        setOtp(newOtp)
                        if (t && i < 4) inputsRef.current[i + 1].focus()
                      }}
                    />
                  ))}
                </View>

                {/* Timer */}
                <Text className="text-center mt-4 text-gray-500">
                  {timer > 0 ? `إعادة الإرسال خلال ${timer}s` : ''}
                </Text>

                {timer === 0 && (
                  <Pressable onPress={resendOtp}>
                    <Text className="text-center text-[#1f3a5f] font-bold">
                      إعادة إرسال الرمز
                    </Text>
                  </Pressable>
                )}

                <Pressable
                  onPress={verifyOtp}
                  className="mt-6 bg-[#1f3a5f] py-4 rounded-2xl"
                >
                  <Text className="text-white text-center font-bold">
                    تأكيد
                  </Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}
