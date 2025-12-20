import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesSlider = () => {
    return (
        <View className="mt-8">
            <Text className="text-xl font-extrabold px-4 mb-4">الأقسام</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-4 px-4">
                    {[
                        { name: 'إلكترونيات', icon: '📱' },
                        { name: 'أزياء', icon: '👕' },
                        { name: 'عطور', icon: '🧴' },
                        { name: 'منزل', icon: '🏠' },
                        { name: 'رياضة', icon: '🏀' },
                        { name: 'سيارات', icon: '🚗' },
                    ].map((cat) => (
                        <Pressable
                            key={cat?.name}
                            className="w-24 mb-4 bg-white rounded-2xl py-6 items-center shadow-sm active:scale-95"
                        >
                            <Text className="font-bold text-sm">{cat?.name}</Text>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default CategoriesSlider

const styles = StyleSheet.create({})