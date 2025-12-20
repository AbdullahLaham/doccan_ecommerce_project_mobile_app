import { View, Text, Image, ScrollView, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

// Card width smaller than screen
const SLIDE_WIDTH = width * 0.90
const SLIDE_SPACING = 5

export function MarketingSlider() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={SLIDE_WIDTH + SLIDE_SPACING}
      contentContainerStyle={{
        paddingHorizontal: (width - SLIDE_WIDTH) / 2,
        
      }}
    >
      {[1, 2, 3].map((_, index) => (
        <View
          key={index}
          style={{
            width: SLIDE_WIDTH,
            marginRight: SLIDE_SPACING,
          }}
          className="h-64 rounded-3xl overflow-hidden"
        >
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae' }}
            className="w-full h-full"
            resizeMode="cover"
          />

          {/* Overlay */}
          <View className="absolute inset-0 bg-black/40 items-center justify-center px-6">
            <Text className="text-white text-2xl font-extrabold mb-2 text-center">
              عروض حصرية
            </Text>
            <Text className="text-white text-sm opacity-90 text-center">
              أفضل العلامات التجارية
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}
