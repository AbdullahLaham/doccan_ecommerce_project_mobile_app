import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  ActivityIndicator,
  Modal,
  ScrollView,
} from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import ProductCard from '@/components/ProductCard'

type Filters = {
  category: string
  location: string
  newProducts: boolean
  discount: boolean
}

export default function ProductsPage() {
  const params = useLocalSearchParams()

  // ✅ Safe initial query
  const initialQuery =
    typeof params.q === 'string' ? params.q : ''

  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [submittedQuery, setSubmittedQuery] = useState(initialQuery)

  const [filterModalVisible, setFilterModalVisible] = useState(false)
  const [filters, setFilters] = useState<Filters>({
    category: '',
    location: '',
    newProducts: false,
    discount: false,
  })

  // ✅ Stable fetch function
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)

      let url = `https://your-api.com/products?search=${encodeURIComponent(
        submittedQuery
      )}`

      if (filters.category) url += `&category=${filters.category}`
      if (filters.location) url += `&location=${filters.location}`
      if (filters.newProducts) url += `&new=true`
      if (filters.discount) url += `&discount=true`

      const response = await fetch(url)
      const data = await response.json()

      setProducts(Array.isArray(data) ? data : [])
    } catch (error) {
      console.log('Fetch error:', error)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }, [submittedQuery, filters])

  // ✅ Fetch only when search is submitted or filters change
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <View className="flex-1 bg-gray-100">
      {/* Search & Filter Bar */}
      <View className="px-4 pt-4 pb-2 flex-row items-center gap-2">
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="ابحث عن المنتجات"
          returnKeyType="search"
          onSubmitEditing={() => setSubmittedQuery(searchQuery)}
          className="flex-1 bg-white rounded-full px-4 py-2 shadow-sm"
        />

        <Pressable
          onPress={() => setFilterModalVisible(true)}
          className="bg-white rounded-full px-4 py-2 shadow-sm"
        >
          <Text>تصفية</Text>
        </Pressable>
      </View>

      {/* Products List */}
      {loading ? (
        <ActivityIndicator size="large" color="#88c1c5" className="mt-10" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingHorizontal: 12,
          }}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <ProductCard
              image={item.image}
              title={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          )}
          ListEmptyComponent={
            <Text className="text-center mt-10 text-gray-500">
              لا توجد منتجات
            </Text>
          }
        />
      )}

      {/* Filter Modal */}
      <Modal
        visible={filterModalVisible}
        animationType="slide"
        transparent
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-4 max-h-[80%]">
            <ScrollView>
              <Text className="text-lg font-bold mb-4">
                تصفية المنتجات
              </Text>

              {/* Categories */}
              <Text className="font-semibold mt-2">الأقسام</Text>
              {['إلكترونيات', 'أزياء'].map(cat => (
                <Pressable
                  key={cat}
                  onPress={() =>
                    setFilters(prev => ({
                      ...prev,
                      category: cat,
                    }))
                  }
                  className="py-2"
                >
                  <Text>
                    {filters.category === cat ? '✔ ' : ''}
                    {cat}
                  </Text>
                </Pressable>
              ))}

              {/* Location */}
              <Text className="font-semibold mt-2">الموقع</Text>
              {['الرياض', 'جدة'].map(city => (
                <Pressable
                  key={city}
                  onPress={() =>
                    setFilters(prev => ({
                      ...prev,
                      location: city,
                    }))
                  }
                  className="py-2"
                >
                  <Text>
                    {filters.location === city ? '✔ ' : ''}
                    {city}
                  </Text>
                </Pressable>
              ))}

              {/* Toggles */}
              <Pressable
                onPress={() =>
                  setFilters(prev => ({
                    ...prev,
                    newProducts: !prev.newProducts,
                  }))
                }
                className="py-2"
              >
                <Text>
                  {filters.newProducts ? '✔ ' : ''}
                  منتجات جديدة
                </Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  setFilters(prev => ({
                    ...prev,
                    discount: !prev.discount,
                  }))
                }
                className="py-2"
              >
                <Text>
                  {filters.discount ? '✔ ' : ''}
                  خصومات
                </Text>
              </Pressable>

              {/* Close */}
              <Pressable
                onPress={() => setFilterModalVisible(false)}
                className="mt-4 bg-gray-200 rounded-full px-4 py-2 items-center"
              >
                <Text>تطبيق</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
}
