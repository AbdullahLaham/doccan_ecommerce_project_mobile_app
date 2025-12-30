// import React, { useState, useEffect, useCallback } from 'react'
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Pressable,
//   ActivityIndicator,
//   Modal,
//   ScrollView,
// } from 'react-native'
// import { useLocalSearchParams } from 'expo-router'
// import ProductCard from '@/components/ProductCard'

// type Filters = {
//   category: string
//   location: string
//   newProducts: boolean
//   discount: boolean
// }

// export default function ProductsPage() {
//   const params = useLocalSearchParams()

//   // ✅ Safe initial query
//   const initialQuery =
//     typeof params.q === 'string' ? params.q : ''

//   const [products, setProducts] = useState<any[]>([])
//   const [loading, setLoading] = useState(false)
//   const [searchQuery, setSearchQuery] = useState(initialQuery)
//   const [submittedQuery, setSubmittedQuery] = useState(initialQuery)

//   const [filterModalVisible, setFilterModalVisible] = useState(false)
//   const [filters, setFilters] = useState<Filters>({
//     category: '',
//     location: '',
//     newProducts: false,
//     discount: false,
//   })

//   // ✅ Stable fetch function
//   const fetchProducts = useCallback(async () => {
//     try {
//       setLoading(true)

//       let url = `https://your-api.com/products?search=${encodeURIComponent(
//         submittedQuery
//       )}`

//       if (filters.category) url += `&category=${filters.category}`
//       if (filters.location) url += `&location=${filters.location}`
//       if (filters.newProducts) url += `&new=true`
//       if (filters.discount) url += `&discount=true`

//       const response = await fetch(url)
//       const data = await response.json()

//       setProducts(Array.isArray(data) ? data : [])
//     } catch (error) {
//       console.log('Fetch error:', error)
//       setProducts([])
//     } finally {
//       setLoading(false)
//     }
//   }, [submittedQuery, filters])

//   // ✅ Fetch only when search is submitted or filters change
//   useEffect(() => {
//     fetchProducts()
//   }, [fetchProducts])

//   return (
//     <View className="flex-1 bg-gray-100">
//       {/* Search & Filter Bar */}
//       <View className="px-4 pt-4 pb-2 flex-row items-center gap-2">
//         <TextInput
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           placeholder="ابحث عن المنتجات"
//           returnKeyType="search"
//           onSubmitEditing={() => setSubmittedQuery(searchQuery)}
//           className="flex-1 bg-white rounded-full px-4 py-2 shadow-sm"
//         />

//         <Pressable
//           onPress={() => setFilterModalVisible(true)}
//           className="bg-white rounded-full px-4 py-2 shadow-sm"
//         >
//           <Text>تصفية</Text>
//         </Pressable>
//       </View>

//       {/* Products List */}
//       {loading ? (
//         <ActivityIndicator size="large" color="#88c1c5" className="mt-10" />
//       ) : (
//         <FlatList
//           data={products}
//           keyExtractor={(_, index) => index.toString()}
//           numColumns={2}
//           columnWrapperStyle={{
//             justifyContent: 'space-between',
//             paddingHorizontal: 12,
//           }}
//           contentContainerStyle={{ paddingBottom: 40 }}
//           renderItem={({ item }) => (
//             <ProductCard
//               image={item.image}
//               title={item.name}
//               price={item.price}
//               oldPrice={item.oldPrice}
//             />
//           )}
//           ListEmptyComponent={
//             <Text className="text-center mt-10 text-gray-500">
//               لا توجد منتجات
//             </Text>
//           }
//         />
//       )}

//       {/* Filter Modal */}
//       <Modal
//         visible={filterModalVisible}
//         animationType="slide"
//         transparent
//       >
//         <View className="flex-1 bg-black/50 justify-end">
//           <View className="bg-white rounded-t-3xl p-4 max-h-[80%]">
//             <ScrollView>
//               <Text className="text-lg font-bold mb-4">
//                 تصفية المنتجات
//               </Text>

//               {/* Categories */}
//               <Text className="font-semibold mt-2">الأقسام</Text>
//               {['إلكترونيات', 'أزياء'].map(cat => (
//                 <Pressable
//                   key={cat}
//                   onPress={() =>
//                     setFilters(prev => ({
//                       ...prev,
//                       category: cat,
//                     }))
//                   }
//                   className="py-2"
//                 >
//                   <Text>
//                     {filters.category === cat ? '✔ ' : ''}
//                     {cat}
//                   </Text>
//                 </Pressable>
//               ))}

//               {/* Location */}
//               <Text className="font-semibold mt-2">الموقع</Text>
//               {['الرياض', 'جدة'].map(city => (
//                 <Pressable
//                   key={city}
//                   onPress={() =>
//                     setFilters(prev => ({
//                       ...prev,
//                       location: city,
//                     }))
//                   }
//                   className="py-2"
//                 >
//                   <Text>
//                     {filters.location === city ? '✔ ' : ''}
//                     {city}
//                   </Text>
//                 </Pressable>
//               ))}

//               {/* Toggles */}
//               <Pressable
//                 onPress={() =>
//                   setFilters(prev => ({
//                     ...prev,
//                     newProducts: !prev.newProducts,
//                   }))
//                 }
//                 className="py-2"
//               >
//                 <Text>
//                   {filters.newProducts ? '✔ ' : ''}
//                   منتجات جديدة
//                 </Text>
//               </Pressable>

//               <Pressable
//                 onPress={() =>
//                   setFilters(prev => ({
//                     ...prev,
//                     discount: !prev.discount,
//                   }))
//                 }
//                 className="py-2"
//               >
//                 <Text>
//                   {filters.discount ? '✔ ' : ''}
//                   خصومات
//                 </Text>
//               </Pressable>

//               {/* Close */}
//               <Pressable
//                 onPress={() => setFilterModalVisible(false)}
//                 className="mt-4 bg-gray-200 rounded-full px-4 py-2 items-center"
//               >
//                 <Text>تطبيق</Text>
//               </Pressable>
//             </ScrollView>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   )
// }
export const MOCK_PRODUCTS = [
  {
    id: '1',
    title: 'ساعة ذكية',
    price: 120,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBAQEBAPEA8PDhAQDxAQEA8VEA8QFRUXFxUVFRUYHSghGBolGxUXITEhJSkrLi4uFyAzOT8sNyguLisBCgoKDg0OFxAQFy0eHR0rLS0rLy0tLSsrLy0uKy0tKystListKy0rKy0tKy4rLysrLSstNy4tLisrKy0rKy0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIDBAUGB//EAD0QAAICAQMCBAMGBAQEBwAAAAECAAMRBBIhBTETIkFRBmFxFDJCgZGhIzNS0RWSscEHQ3LhFmJzgoOi8P/EABkBAQEAAwEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQADAAIDAAEEAwAAAAAAAAABAhEDMQQSIUFxsfDxEzJR/9oADAMBAAIRAxEAPwD1cGSBkSITIWQkAZLMBwijgPMIoQCRIkojAhDMkZHEBiORjzAlCRzHAcIswzAIQhAUIQgEUcUAihCAoRxQFFHCAoo4oChHFAWYZhFAIoQgZQMIiIZlBiKSzDEABjzI4hIJwzIZi3SieYsyBaR3QLMxFpXmOBPMUjmPMge6LfAiRKwJ7o8ynMYeUXZjlW6MNILISIaPMAhCEBQjigEIoQCKOKAoRxShRSURgKKOKAoo4QMmGJXvj3wGRFuhmIiA/EhmVlZEZgXGRMSmTAgVkQJx3kdVwp+eAfkCeT+QyfynLdV19T0ag6ixqdMt4prtqa3dliK1yi58Qb93GO2PrJMrjoW6lSGKG6pXHdS6hh+Rl1eoRjhXRj7BgZ4xqfhrVadgr+G2nAAS9MslmefMe6sc5wR9MyrRJZp/FdsEMQw2MQVAPzk9jIe5YjnlnQfimw7CLbgm5dwcbvJnn39Jm0fHl6s++tHr3NtyrIdoPH7R7GPRswnED/iHWykJQ5u7BWI2H/3D+03PTuvu67npA99jgn9CBLsGN6VkCkho9Ylgyh7dweCD8xL5UVYMYlWt1qVbd58znCIoy7nIHA9hkZPYZlOn6rS7+GHxZkjYwKksM5UE8MwwcgEkYkGZmSDSpog0oyA0lmUBpINAshIho8wHFCEAihmEAhFDMAihFAIjCEBQhCBZtkdkszCUVyaxxYgShiQj3QHtixHujzIMHqTHaQCMKN1gIJJTPIHscA4nAfFusrRNXfcD4NOqrvroXapst2ioHt+MHPPsT3BnS/F3VxTptZfuKjT0AqOPO5coByDwWCrn5mcr1y3S6iwW6tF8O3Q02UaazJt8PYSOB+JTZZyO2fTmYSrS1a/qOs1Gk1ulSynTWWOHdcGvbvIFVit95dqjuCMtx2E634y6Tp1oPiZqsdTk6dRx/wDGThvoNpPvOb6Z8QX62qzQ6DT0116QbK3NjCuxRlRg4OG9icggntmbX4f+C9+jFPUGvfUqSQFvbfp88BUwSuMduCB6YhGl6J013q8XTFNTUrFCaj/EVl7g19yf+ncPYmZSVnUZ0+xw7EIQeOfUZ9Dj9Ju9L13Q9MpXRk7EUhBbwwJPq4HIJ9/XvwM4yfh7SW67V2aom6immhUqsIYNazHeuM8FFXnPvZwRgwrn2+Gvs5HiU6hsHbZfp7E8NTnIKI4HAUrlS27J7jsehFyKyogssY1+ISlVw2KMfzcr/DbkeU88j05m26NYbKy9Ie7T12WKjOibNZ67qyrAld/YlcHGc45mo6v8T6fRkqSb70sLeFVZtqoYnOHuHO71NdeM8g7u8sRM/ISZz7LoKKHVbADtchGVkBbcD+E57dwcj3kdToGxYfG1PAXw8ai4BmP3uFtHH6fnPPtd8d69i/8AGq0YHiDZXXhg6/hLEM3JOMnHIM0v/jLWBs/4nqDz68jGPbf78fv8pvjxeSY/4558rj3vXovV+ki0MBeX8PC1eI9jsXbGcMxyB5RyPzxjM1F2n1NLgXF2pqdH8WpsqjZDDYbGAUjcR5mxyPz0On+Mb7Fxc9WpIFaqCALC7tg7WPYKO5JHOPQ8bTpfxFgZQ+JVvLvW45bBHOSNwGQOeVyMYJmu/DencNtOWlupei6DqFV6lqnDbSA64KvWxGQHRsMpxyMjkcjiZBScE1At2ajQu1erDMSihAKUPJXB8rIxC5TO1i2RgjcvQ/CvxKurV0ZRXqqcC+nnGDwLK88lD8+VIIPIycYlm3JWGZbEVlEQ0kGkCsUC7dDMp3R7oFphmVbow0CcJHMMwJRGLMMwCKBilDzFFCBfFmLMMwHuhmRMjAszCV5j3QJYi3YjzK78bWyu4YO5cZ3D1GPXMK47qtOn8W6jVhWTWdNpSmpjyatMt11vJ53hrEORz5M+hxx/SNK2qbpnV9TYFK0akNWiHAq0zvusGOe7nygHtx7ToFJqfpfUdYztZ9iTRlCvnr1esUMrHPPCOVPr2+eD4c6ZZfb1Oi0vRVo31delQVqAtF4LMu3H3dw3AjscjkcTWSwviX4tq0FzW6OrSutpowiKqjUOwLNaGTGcgqA3IJU95V1voPUL7qNVZZVVo/EF1tyXFLKq8ZIsDYx6gkEjnPA4G96frdN/ggpIWy1Omtdp0tpVmcBDtdF8wzkDjORx8pLTam/W0HSKaWzQrq7Eqtg3cozKGABAxkL6mEYPxL8B6Cyuyz+JUX2ObEtJUuN2CA+RzvbPp9Jn9J1S6rTaHQacsEu0/i6q8Ka3TQIdpUfiU2sCvttV8ehnKP8ACutTWrVbss0uoGdXp1sJCtYrLY64IONzMQy4PYH1E6z4Z1KUabXa1FG02GjSr2H2fTfwNOo9gzDf9XbvAl8f/FIoX7HpcVkKtblSq+GCPLQh7KxGCzfhH5Ty+uh3HjgOKCTWr7CoLFEZ68biAAckH7zZ3H5ZGqWzU3sih7my5fYN7Phs2MVALKS4HPHAkl1vhpYOPDdQHQ/dOPunHowJ4PzI7Eg+r4/BFa+35eT5fkTM+kflk0IlS6TV7QUq1J02sBG7yvllfH/mrNifWoepnIfZzkKd2MgF1ViAOxYD198Tr/g3UrfdborCFr19JpQ+leoXz0P8yHXHz3TSurKzI42ujMlin8LqSrL+RBm2Ii15+sPa1KVnP7W/EfU6LzbZTp6NMBtVNv8AOexXCqwGcqngKMjAUuWPJIxrendWZGAYtjgblIDhQclQSDgHnPGPfMyrawwwwz/qPoZVRaaksrqUCy7KvfnLiggA1IPwZOdzdyMDgbt2M8U0jI+w2xz15P8Ab5MOv6Z1Nkeq2plO81JqVrNioPFIwm8gY5Kg84Vsc8DOV1nqBGsW/RVCnU6ZVZKzbp1OqpIBZDTuDgOuO6D8J7gGcVobxXhbNpqIZHDmzARh5wAvqQNuSD6dsZHd9N+INN4arrsvZQ5rDGlrA7nzK7BRnDptfP8AVbZ2wCPP8ji/x2+dS7eDl96/o9A0vWA6I5pvrV1VhurYlQRnDhc7T7g4mZXq0b7rqfzGZw+g02gsqVtPYis7DayOC2Q+0rtJz90Z7Y475OJtbunBb0q3HzoAWJZsna7BmDHK48IjgL/MXvgGaNb3UZmJX1GlnaoWobEOGTI3A/SaTWNbpKzaTurXGdrN6nA8pzPOOq2g6mwobhY+LEKgkknvyO0syPayJAief9D+KLkNdNg3j8TPkEDGSf2nW6X4hqb72a8/1dv1l0bLMN0kjKwypBHuDIskoYaS3Skw3QL90eZSGjDQLISG6PMBmEIQJRgwkZRLMMysiRJgXxYlHjRi4QLobpAPAmBr+udFq1XgeIWU6fWUatdpGHeo8KwPcEEj9PaaLWdP1aazSlXf7NbdrvthqchWrvYNWr9jxjGfTnnB56syst85jNdVz1nTaen6rQIj3WKKrKqlbwyyVh1wCRtyBvUZxnA5yeZjfEPWXGt0raF618aizG+oBL7PGqGxgwDE7DafKQcj5TfarR1WPXY65spDCpst5AxUkAZxglVP5S3RIldJp+8ASVyM89xx7zGayOW6P1O/WXLe1HgnatWoQlhsFfiszKSPOpJTsfcHEr+LXXTaGipPumwMccfdR2P/AN+Zs+k6p/AVmc7mZg+QM/eIAPscYnP/APEsn7MgHpa35b0YH91/eWvcMbdS5Lotn8O9WsrS11orUWI1Lk1kPklVKnkc72BJ2nPGIuotXfrEqZilbFsAMoLWOWZU3qHC5dyu4BgO+DNT0bT2X7hRWbNvmbwVsKICByS3KjuMt7TH6hUQ+1sZAwcFWH6jg9562RMfJ+vL2Yv9j46T4e0o02taxQ11ddLtXwgsV7C9dKnkqHYrxyQQ6njPGT8f6ULqRqKwzV31K97gEpXcreHlmGQNwCjGfvK3c5j+GdFfei2IyWauzV1O91zbzp6aFUrZYM5zuGBkEn07zP1XV6Rpn6XQWvtrW0VXgIlWsdy7upwSQ38RgO4YrjjdOaZtW2x9mP2dOUtXJ+RLh7NSBMX7Tz+0xN0K+WAGSSwAA7951zeZcteGIbfqC1oP4V72WDBDLWURSOcqzEMTnH4RNnqcW6bVbAEFnTBaoNotZbdHqEYE2DGW8K1ge2Jq+o9MtqDGxNoVmUncjAMpKt90ngMrLntlSO4M2HhtTQqvwf8AC+oEjbUvlsWpF+4SDz6nk+uDOTysmveuvxticzHS/wDEa+xdJ0vXaImu/UKUtFKj+NlFdSUAwxGW5x6j2E6TR6i2rQaC65F+0ai2lbT4daHKjxD9wDBJTB79yOJzer0C6rpnRtO9ppcKWqZSNxsSqvAGfluPcfdnXdP1infptUTf4DBbFu0+8o20ODvzjsQcg/6Tz3Yt67auoVNO5NJsVLgQpsV1HoexBz7Z7Tmb/h96L/Hseh0usSuki3bt9shwMNn0mTZ1tbOpfZqnRqqtN4la5VjWxPmAbOSDgEgk43cYmx6pTZrK60rNFVtVyWA2mwVvt5xkBiM4Eox79IwRnelyOfwEg49QR6fOcjRrrGsZwT4QJATk8j5+k7z7V4VgqLMtjo1gFZdlIBAbDKOcFh3x3+sw+rasLdpzY27xGZG8VQ68r5Qd4IXLY54gcn0vqmoqc2Gw1M7eUMcoR6D25noPw/8AEvjEVWALaR6fdf6H3+Uxr+m0Wja+mq7A5U2r+waZnTEoq8yaasMhwpDv7em7OIgxv3qlLJDT6s2ZJVVAA7Zzn6/9pcRNkIxo90myysiUTDR7pTGGgXBo90qDR5gZBMqZ5KKBWz4lZsMtZZDiUUs8WZYZBlgAsj8b5zHcfWVeIR3GYGeOfWK5lRSzHAEop1A98TG6xa3lAbCnIIHqfmYVhajqbknZgL6eXn95iW22t3c/kcD9pcqSYEiqtHpw4VFZRfZdYrhSqMqkblYgAizyk43qeRgc5Mw+qaOyzStQ5d7AGNVjoFdmqYZVscE+m4d8HtiZltAYg8hh2I7j+31HMxdY71qjbmZanJUZOAzccg54PYnOcEzDJhJh5fqdM9blLGZgFVV32bs1qM1hV7qiqVUDkZU49hUbVBA+vb0Hcn9J13xxQV2WrW5rsHYYD8jcKycH5MB68495ymru8Gp6qgh8V2FmrRmbxahjFSEgba88nHL8Z4GD6fFy7SPV5nLw7efaW71nVx4X2bTA1aU8uePF1Tf1Wkensg4A9+80rNyCCQQQQQcEEdiCOxlXSdNY6swepK1dK83GwBrHyVRNisSxCse2ABzjIzC60qxR12spwQGVh+TA4P1E3VvTqGm/Fybs9fhd1qoOBqVAAsbbeo7JqO5IHorjzAdgdwHCzE6bUQwsyVKnKEd9w9R9JtNOPDOy4fwr6kLgHPkcB0cY/EpwcfJl9TJ22KiPTcFVqdxrtQA7sjIUnjcjcEN6ZyMg4mMViJ3uGc2mYzqf5+59Q1I1FihgtZvsVbXLHYte7c+0H7q5JO3J5wBjtOp1Hw547sbfLU2nWnAa0KEWzxLCGcsx3WBVHLHAP5aD4Z6Q76hntDVDTt/EDGyuyplz5GBGCpBDH6Ae+fQ/FRE3WbucYUAl9o4VQvfPy9zgTg8m1dyvTu8etortu2GuhQanS7K0bT6Op1AeyxW8azb90Dd2RB39LP02f2dk1Go1KW1lbmWzw9tivUyKBw/KuML67Zrb2tGla1KmbU3N/LA3PS7kDLhMkKoIGR6KJzVN+vv1b6Sq2+vR01irUam2oFriOHsUsvBYkhQOMAHBJweV0O+6V1vRanZdwvih22XVHgoQHcHBUDJHJIz6djNTRqMdQ11IsIRGrahAE2lfDXftJHmG4nseOe2JHR6GnRoLGbdVpqERVswBtqLOC7DO45Yk4A7D2mf0jrP2nB23K7VpeUsADCt87SQCQMhSQO+Oe0COr6c7aii9bgvhB0avwsixH2kgtu4PlGMCZOk1YsdlAINbsjdsE59PlwZruhmzNjX+Km60mtLdwCqSW8ueCPMF4z/L+csvoTSjUahCxewg7XYmtrCSFwO4yXHYwsF0sMl+pNqNXUbAa2JBRl9SNpO0cDvibBiqt3cZ3YXFrAkng9iB3PtIDdZThgFLbSwyRjnLL/tmNrGIB4Bzt9SO/J9MwreaDCoMDGSWPGMknkmZIsmrXUAAAdgJMasTbjFsSwlbCYo1AkvEhE2MW6RLSBMqr45jbpIWQjNJkSZIyLCAt0TREfKRhTIkCse6ECph/wDjK7KszJxmLZA1ltRHaY7XHGG5Hse03D1zDvo/OBqLK3zlPMD+EHkf3hXrCDg5BHfPEtv0+JiWM3ryPqYVlDUAxsAwIIyCMEe4mrY+xIPz7RHVugyVyPcciBstToPEHhNuua47UL7RU1Spna+MEWDb6c9mHAO3zrqvw3bUxalWvpP3qj/OrXdltowc5IPmUH1yB69oOtVkFXBw3cYJB/KKzqtRGGdHC1eHVuOyyrHYgng9h3z+5JlbWpO1YX44tGS840WpKVWip60Bw5W1AWrty1YNLej7HzkEYHzUGYmo0lrOzkJyX/l42AJgELjPlUYHc8e89Q1+i094ssRtPeq1p5rVK3OxOCniKR247HHOPTMw7vg1F8Q/Za28IruZbryPNnBGWz+Ht35HHM318mvc1+tE8FsyJcTYjslQKoppRqc78s3L3LlRk/8AM2hsY7DPE2HTPhxrBvs/hUgBmss2gFSuHXaSQO5w+c8A8H7vZJ8PGnf5NLT4LoGO7xXAY4DruLHH6SrU9HvtvZKS2pVSu23gIvAzxnC9z6ZI/SS/lTMZWCnjRE+0oaPUooTT0IwCACvxPKpx2JLHjnkA455PtLOn2K72O+orL0OylUsrZxauQ2RzwOw9zyOwJ2+qSxbUfWaU+HVUyqQhurLHByTkhRwcbu2TxzkYq6Si6stUA172sa1c12eCQ5wK6xlQNmP35GOOXZdLEPxAyuVZamAqe62w7lWqpByzEZ7khQPUmasdUs6k2lsSrVJoqmssdlOLXKA/w6trbvMfLuHlyeexx3D/AArTdS9WrTxWuKtcVLVlipJRSybSwXcflkk4HaZNfw+K0FdDGpVUKo2btqgYCjBGB+/rL6yPO+iaLU6s3v1HfXS9hNGgLYKAHI3Z8+0cAAnzYJPz3Wu6tXoxayA226i3c5d1BdiANoZVAVVVQOBwqfXN3VvgS+xhYr1XOiv4KOpCpa2FFhDZVtql2we7Kg7ZJfVfh1a6ErOie4117A3gu7bcYO515Oce/wD3xyVhR1Q6rVaWs0rVWLU3tXbY4cp6A+TGDxkHGMn1Es0us0ddOn0bMjY2oFard415PLYAIyXbjHvxObbq2su1a6Uq9NTjdabKWRjUuM7M4yOw9eWHtiVXJVptUuo8U3+GGwjAKqOVKghx3wGf07t8hIyx2vTNdXuu3761ULVRXZ4o8SxjksobjCgYG3jL/KZK6QKSo8QMCQUY2kIB8mOAST9eJx56oynSa2wowLreunOR/DViU8wzgNtU5weD+m+0XULGZ7LDtsZtxUZwhIBI+ff9czKvZLamsyBBgnUD+IA/sZl06itu/lPz7frNrBjK5mRXdMg6cekgacQLEuloYGUBJMCBcFEeyVgx74GdmErzFmUWYkWSQ8SLxoAwxK8/lG9olDvAv3GPxJirZLQ0YLS8qdoSuxTApuAmvvrmbYpmM6GFay2mVBSJsWq+UgavlJisE6RG+8vPuODMbUdDz9zDD2OAf7TbiuW1qZcRxl/RwrZKNW39S7kb/MuDI/ZbAMLfeBjBy+7I+rgmd+i5GCAQfQ9pXZ0ipvwBT7rx+3aSajkNHqLqzkstv/rIHm/03xXcAA1deBxhcqP95db8N/0P+TD/AHH9ph29EtX8IYe6nP7d5MwbnT/F6/iR1+hB/tM2j4gozkeUnudqgn6kd5xz6Vh3Uj5EESPgwY73/Ga/68fUMP8AaIdXrP8Azk/zgf6zh0DgYDMB7AnEiaz+cGO+HUV7+Ih+e9P7yQ6mB+Nf8y/3nn3hH5yLUH3MGO71nWqwMWPUQfRmQg/lOV6rq+nNy2m01rfLT1n9yMTUnRyH2CBgdV2XsMUpWiqqIq54VRgDjjAHGO02HTxtAA/f1MaaL5TKqoxAyqml4lCDEuBlVfp9SyHg8eo9DNxpdUr/ACI7iaGbHpVbE5B8o7jnmEltMRiPEIQsQ2yUeZRMxEwJkTADIMse6G6Bj2KZjOTNg0qarMowhZMit4zRAVSKmGlqtK1EsBgMoDINTJ74b4Rjtp5A6WZgaSGIVgfZhAU/KZxWRKQMYJLAskREGgSGZMCJbJMNCItUD3AMxn6bWfwD8uP9JmiMCQap+jJ6Fh9cGUv0Y+jKfrkTd7YYhdc+3S3H4c/QiUNpsdwR9ROngYNcx9lP9J/QyJ0x/pP6GdTuj3wa5pemuRkDI+oH+skOlP67R9T/AGnQmQIg1oR0p/df1MyE6UMcsc/Lt+82ZEiYRjUaFF55b/qxj9JmK3tICMCUWboSBEIE4SIMeYFhkTCEoiZExwgRJizCEB4j2whCjZDEISCJkSYQlC3x+JCECQskg8IQCLbCEgAsmBCECayUIQJQMIQFmIxwgRIkYQgLMMxQgPMREIQI7YQhKGDHCEAijhCP/9k=',
    category: 'إلكترونيات',
    location: 'الرياض',
    isNew: true,
    hasDiscount: false,
    oldPrice: 20,
  },
  {
    id: '2',
    title: 'حذاء رياضي',
    price: 90,
    image: 'data:image/jpeg;base64,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',
    category: 'أزياء',
    location: 'جدة',
    isNew: false,
    hasDiscount: true,
    oldPrice: 20,
  },
  {
    id: '3',
    title: 'هاتف ذكي',
    price: 90,
    image: "data:image/jpeg;base64,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",
    category: 'إلكترونيات',
    location: 'جدة',
    isNew: false,
    hasDiscount: true,
    oldPrice: 20,
  },
]

import React, { useState, useEffect } from 'react'
import { View, TextInput, FlatList, Pressable, ActivityIndicator, Text } from 'react-native'
import ProductCard from '@/components/ProductCard'
import ProductFilterModal from '@/components/ProductFilterModal'
import SafeView from '@/components/SafeView'

export default function ProductsPage() {
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterModalVisible, setFilterModalVisible] = useState(false)
  const [filters, setFilters] = useState({
    category: [] as string[],
    location: [] as string[],
    newProducts: false,
    discount: false,
  })

  useEffect(() => {
    setLoading(true)
    const filtered = MOCK_PRODUCTS.filter(p => {
      const matchCategory =
        filters.category.length === 0 || filters.category.includes(p.category)
      const matchLocation =
        filters.location.length === 0 || filters.location.includes(p.location)
      const matchNew = !filters.newProducts || p.isNew
      const matchDiscount = !filters.discount || p.hasDiscount
      const matchSearch =
        searchQuery === '' || p.title.includes(searchQuery)

      return matchCategory && matchLocation && matchNew && matchDiscount && matchSearch
    })
    setProducts(filtered)
    setLoading(false)
  }, [filters, searchQuery])

  return (
    <SafeView className="flex-1 bg-gray-100">
      {/* Search & Filter */}
      <View className="px-4 pt-4 pb-2 flex-row items-center gap-2">
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="ابحث عن المنتجات"
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
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 8, }}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <ProductCard
              image={item.image}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
            />
          )}
        />
      )}

      {/* Filter Modal */}
      <ProductFilterModal
        visible={filterModalVisible}
        filters={filters}
        setFilters={setFilters}
        onClose={() => setFilterModalVisible(false)}
      />
    </SafeView>
  )
}
