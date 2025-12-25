import { View, Animated, Text } from 'react-native'
import { useEffect, useRef } from 'react'

export default function SuccessCheck() {
  const scale = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 6,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <Animated.View
      style={{ transform: [{ scale }] }}
      className="w-28 h-28 rounded-full bg-[#88c1c5]/20 items-center justify-center"
    >
      <Text className="text-5xl">✅</Text>
    </Animated.View>
  )
}
