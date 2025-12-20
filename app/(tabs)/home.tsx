// import { View, Text, Image, ScrollView, Pressable, Dimensions } from 'react-native'
// import { useRef } from 'react'
// import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

// const { width } = Dimensions.get('window')

// // =========================
// // Reusable Product Card
// // =========================
// export function ProductCard({ image, title, price, oldPrice }: any) {
//   const scale = useSharedValue(1)

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ scale: scale.value }],
//   }))

//   return (
//     <Animated.View style={animatedStyle} className="w-44">
//       <Pressable
//         onPressIn={() => (scale.value = withSpring(0.96))}
//         onPressOut={() => (scale.value = withSpring(1))}
//         className="bg-white rounded-3xl overflow-hidden shadow-md"
//       >
//         <View className="relative">
//           <Image source={{ uri: image }} className="w-full h-40" resizeMode="cover" />
//           <View className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full">
//             <Text className="text-white text-xs font-bold">جديد</Text>
//           </View>
//         </View>

//         <View className="p-4">
//           <Text className=" font-semibold text-sm mb-2" numberOfLines={2}>
//             {title}
//           </Text>

//           <View className="flex-row justify-between items-center">
//             <View className="bg-black px-4 py-2 rounded-full">
//               <Text className="text-white text-xs font-bold">أضف</Text>
//             </View>

//             <View className="items-end">
//               <Text className="text-lg font-extrabold">{price} ر.س</Text>
//               {oldPrice && (
//                 <Text className="text-xs text-gray-400 line-through">{oldPrice} ر.س</Text>
//               )}
//             </View>
//           </View>
//         </View>
//       </Pressable>
//     </Animated.View>
//   )
// }

// // =========================
// // Home Screen
// // =========================
// export default function HomeScreen() {
//   return (
//     <ScrollView className="flex-1 bg-gray-100 " contentContainerStyle={{ paddingBottom: 40 }}>

//       {/* Marketing Slider */}
//       <ScrollView
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         className="h-72"
//       >
//         {[1, 2, 3].map((_, i) => (
//           <View key={i} style={{ width }} className="h-72 relative">
//             <Image
//               source={{ uri: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae' }}
//               className="w-full h-full"
//               resizeMode="cover"
//             />
//             <View className="absolute inset-0 bg-black/40 justify-center items-center px-6">
//               <Text className="text-white text-3xl font-extrabold mb-2 text-center">
//                 معرض التجارة العربي
//               </Text>
//               <Text className="text-white text-base opacity-90 text-center">
//                 أقوى العلامات التجارية في مكان واحد
//               </Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories */}
//       <View className="px-4 mt-8">
//         <Text className=" text-xl font-extrabold mb-4">الأقسام</Text>
//         <View className="flex-row flex-wrap justify-between">
//           {['إلكترونيات','أزياء','عطور','منزل','رياضة','سيارات'].map((cat) => (
//             <Pressable
//               key={cat}
//               className="w-[30%] mb-4 bg-white rounded-2xl py-6 items-center shadow-sm active:scale-95"
//             >
//               <Text className="font-bold text-sm">{cat}</Text>
//             </Pressable>
//           ))}
//         </View>
//       </View>

//       {/* Suggested Products */}
//       <View className="mt-4 mb-20">
//         <Text className=" text-xl font-extrabold px-4 mb-4">المنتجات المقترحة</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
//           <View className="flex-row gap-4">
//             <ProductCard
//               image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
//               title="ساعة ذكية فاخرة"
//               price="899"
//               oldPrice="1099"
//             />
//             <ProductCard
//               image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
//               title="حذاء رياضي عصري"
//               price="499"
//             />
//             <ProductCard
//               image="https://images.unsplash.com/photo-1585386959984-a41552231693"
//               title="عطر شرقي فاخر"
//               price="699"
//             />
//           </View>
//         </ScrollView>
//       </View>

//     </ScrollView>
//   )
// }

// HomeScreen.tsx
// ✅ Clean, error-free Expo + NativeWind + Reanimated setup

// import React from 'react'
// import { View, Text, Image, ScrollView, Pressable, Dimensions } from 'react-native'
// import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'

// const { width } = Dimensions.get('window')

// // =========================
// // Reusable Product Card
// // =========================
// export function ProductCard({ image, title, price, oldPrice }: any) {
//   const scale = useSharedValue(1)

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ scale: scale.value }],
//   }))

//   return (
//     <Animated.View style={animatedStyle} className="w-44">
//       <Pressable
//         onPressIn={() => (scale.value = withSpring(0.96))}
//         onPressOut={() => (scale.value = withSpring(1))}
//         className="bg-white rounded-3xl overflow-hidden shadow-md"
//       >
//         <View className="relative">
//           <Image
//             source={{ uri: image }}
//             className="w-full h-40"
//             resizeMode="cover"
//           />
//           <View className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full">
//             <Text className="text-white text-xs font-bold">جديد</Text>
//           </View>
//         </View>

//         <View className="p-4">
//           <Text className="font-semibold text-sm mb-2" numberOfLines={2}>
//             {title}
//           </Text>

//           <View className="flex-row justify-between items-center">
//             <View className="bg-black px-4 py-2 rounded-full">
//               <Text className="text-white text-xs font-bold">أضف</Text>
//             </View>

//             <View>
//               <Text className="text-lg font-extrabold">{price} ر.س</Text>
//               {oldPrice ? (
//                 <Text className="text-xs text-gray-400 line-through">{oldPrice} ر.س</Text>
//               ) : null}
//             </View>
//           </View>
//         </View>
//       </Pressable>
//     </Animated.View>
//   )
// }

// // =========================
// // Home Screen
// // =========================
// export default function HomeScreen() {
//   return (
//     <ScrollView className="flex-1 bg-gray-100" contentContainerStyle={{ paddingBottom: 40 }}>

//       {/* Marketing Slider */}
//       <ScrollView
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         className="h-72"
//       >
//         {[1, 2, 3].map((_, i) => (
//           <View key={i} style={{ width }} className="h-72">
//             <Image
//               source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMWFRUVFRUVEBUVFRUVFRUVFRUWFxUWFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGysfHx8tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQYBB//EAEEQAAIBAwEFBgMFBwIEBwAAAAECAAMEESEFEjFBUQYTIjJhcYGRoRRCUrHRIzNicpLB4aKyFVOCwgckc4Oz8PH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAnEQACAgEEAgICAgMAAAAAAAAAAQIRAwQSITETQSJRFGEjMgWBkf/aAAwDAQACEQMRAD8A+HSSSQnF6SxpYJFwJalxloqicmEKyvciGCz3EptE3MX7gQFWniattQ3tTwlLq1gljtcHLJzTMqSFr0d2CmdqiydkkkkgCSSSSccSSSSccSSSN0tlXDAMtGqynUEU3II9CBrCBtIUkjVXZtZRlqNRR1KMB9RFxTOcY16TqOtFZIV7ZhxEa2VY942vlHGMscm6BKaSsQknW3uzaYwQoxM+ps9OktLTSRGOpjIwpJqVNnr6wD2XQybxSRRZIsSklqiYOJWTaooSSbeythirTDlyMkjAHSZ99aCmcA5lHiko7vRNZYuTiu0KSSSSRQkkkk448knsk448kkknHEl6Y1lJYGFHBxHK9AAKRziNOP1K4YKOksiMjReyARW6xQUsn0jda43kVBy4zR2JbIchsfGaEuDM5NCCLievTBE0dqUVVhu9NYoozwlVyiLk7Mi5t+R+EyXTBxOqrUdNRMfaNrzHETPmx2rRqw5b4ZlzyezyZDWez1RPI3YWhc+kMYtukCTSVsOdnjdz6RFqLdJ0jUvD7RYpNcsKMsM7MTuG6T7N2aqstpbjJGKScz0zPnVCmWIUDJJAUDUknQAT6NbUjTRabDDIoVhpoVGCNPWadJiUW2ef/ksu+Kj+xPtjdt9nxvNq68zyBM+bFGasWOTw1M7/ALUI1RERRkl9AOeh/WZtLshfEAi2Y+xQ/wDdG1EbkDR5I48fL7Obq0SxwJ0WwNlAsqA4zzjNDspeKfFbVPXw5/Ka+zNmV6VQM9CtgZ4U2+HKTUeG12PPPFtRvgQ2ts0U/BnORkaTma1PBwZ3G3RUqup7qoMDAyj/AKTndp7Pqebu39fC36R6bjz2JGcVOl0YDiAdY24gHEjJG2LM+6o5EHs3Zr123UHDiTwE1bOyaq26vxPICdbZWaUl3VHueZPUwR0+92+gZdV41S7MTZH7OmKR8wzn5zndqtljOq23bYPeL/1f2M5y6tt7WNmi9u1C6eSct/2ZQpkyd03SNiliWmTxo2uYj3Z6TwiPGCqpkRXjGU7FZJDJJDknmJ7JOOJJJJOOD042KB0PWKUpqVnHdrg65miJGQxb08CMLA0DoIzRos3lGZrRimSO7IdVqAtw9Yq9Fl8wxPaSE6AZjdombO2K1NkAQjOeU564pZEceiw4giK3nkPtBSSGTdnM3VIqxzAgS1RyTrL2x8QnncOR6fSGba04Zm7QtiuFCnJ4RNBqDOip3y76Nr4RrNkI7ejFlnfYl3RwfCdOMvZbGesu8CqgtuqXJAY88YB0GmT6idDsru6gqliQuhcjGdeCrn7xwcexPAGeVqwPABVA3UUcFUcAPrrzJJ4maIRc+zFky7eI9mp2L7OpbOa1wymoNKQXLBOr5x5uXpr1nRVLe1YkknJOT5+JnO7M2hvrunzL9R1jy1JojBLo83NKU5XI3LTY9vkVFBYrkDJJxnjgGaiPjSY2ybnUr1H1Gv6zQZ5Oad0Z3djLVoCpVgi8GzRFEKRWsTxHE8/T0nCdvu0xpr9kpNhm/fsDqqH7nuw4+nvOj7U7dW0ol9DUbK0VP3m6n+EcT/mfKLvZFww79yG7xRVLb3iIcF8kY0OBw9pPLNR4PV0Gn3fOXS6E/tJGh5aQtlTeqwVR7nkIsR8xof1mvsm4dFG6owTjeiR5fJ6OT4xtLk6GytFpLuj4nqYYwux9kXlyCaQpndYKckjVvhC3uwL+kjVHopuqu8xD8Bndzw6zT5sae2zznhyP5CFZAwIPA8Zyt7blGKn4eom6b1/+X8mmHta8apUFNUO8NAOLEnlFzNVZbTRkpV6EaiwDLC16VVRvMrAaakdeEpaUnqkhcaDJz6nExuSPRimClTC31u9LG9jXOMehxAUlZs7ozjjEckOkBrJzgYzXBU4YYMWkZ0UiSSSSIMSSSSE4PRh4CjNgUx3JONZaJGQS18omxse7WmTvc5j2nlEYE1pWjFPhmrta8Wpu7vLjPNj11R8twxM4S4jKKqid82bm2b2m6gKdczAu/I3tCwdyPCfaHbSCn8jkDC2/mEhp6wlBPEJ56jyem3wdPsi3DnUZm3ZbKDVVUjkWJOiqqjJZjyA/+6zC2VdbjDA4zvrLcqUgu9uux/aAG3LkKfCu49ZHCgjPlOTg8hNydHlZnJdGNc1F8lMbqKSV6lj5nb1OOHIADlkrGrmdDX7Nk8GcerW9xj+pEZfrM+psBwd1alFj+Hv6St/Q7BvpLrJBKkzLtfszKdcqQw4ib9tdhgGHP6HpM247OXi6/Z6hHVULj5rkRW3apRbFRGUHjvKRg9dY8ZoXJjUkdVaXW6wPQ5nQmrmcVSrzpNm1iyD004dOH0xGkrMUoD5qQVzcrTRnc7qqCzE8ABKs2PNhf5ju/nOO23tFbu5WzQhqSLUqVvHurUanTZlXeUHwghfc6acZLJJQjZfT6d5JJHGdpttNd1mqnRRpSX8KcvieJ9Z021KISiFKIMUFHmJP7qlrjd4+P85ldurZErKESmgKZxTxu+Y+gz8pzhqseLE+5JmCX8lSPfjFRW1ej0N4ieRJz7R6zdgyJnQHI9jzmcJs21JQyEMpIxpnX195aCsTK6R9Z/8AD9B3RJCHNYeYkHRTNHtOALOr4R+6QZWpnzVOnOcNsPtHVtl3VVGGSfEMnJGOMb2r2ravRakaKLvbniXORuHPDHOJ4J+Td6sj54LHt90c+wmDYjN8DrozHw8fCpm4TOatrxaVw1RgSPGBg4OSMCX1P9RNJ/Zmr2myKODv+ZR4sckH6zl7Wk4yQxUc8HkNZrbb2slZQqIy+InxHPTH5RNB4D7THGP2braQV7JnXUjljeIJOcn4RO0rLT3g3E4AxrwM3WuaYx400I4Don6zN2ZSDFyfxADTPrFbsZGXf1QzFhFY3tHzt7xSTkVj0SSSSIMX7syd2Y+tKFWhNCxEnkoQpLGlrtu7udI4luOkMtgCM4lFjZKWVFLM+ERkT23tMCHW1miKdGWclYIGXBhls4QWcemS3IXBlavAx0WUv9gh2sHkRzH2MmQWLZ0nSLZwtO09JPwFvyTItKLB105idVty5prSHeb/AC1p1FpsOHVTn6QdvaaiP7SFZaTd1W7o5BwX3FbTmT4P6iIZY65JLKpOjGs7ugCSla4pncU57tGxlVOS61ASdenObNDa9bgm0AfDnFRq/VuVRCmNBz5GZKrenLGhSrjcXVKVvWJOFyN6h4uOecXqXaIcV7LuyVPlevRYebTFUuOvLnBf+wuH0dHT2jdg5VbWsdSWVbUsOHA0t1usaTtPd0dalrWxz3XulX3w7Ov0nILUsmC5+00+OP3Ncfd/9P0lqSU1B7i/7s50DJXo546E098fXlA1H6AoMd2h2gurl9zfIUsNxPApGeALU6ak/GeU6NYjxkkEDG9VqkaheX/uLAU/Fd0+/r98CF3npvUrHAGcZA3s6cJ5temneEIj7o/EpB0CZ8/8rRlNJ7TnDizP26FWnwp5bAGFO9wptxJPU/I9Zm7C2wLer3hTvPA6BTy3hjI9RrHNuMBuqE3Ma/dycbw+77RvsnspLg1u8V33EQqEYLq1QA5JI+6G5yWZrm+jVh4iZW3tsNdOH7orhQoAB5c+EzcN+H5kfrNza9ilO77pF3V7xVCs2cAsBhmyfzMPt2kgHhFMeI6JjQaY4Dh4pNUqRWznVpP/AA/P9BNHZo/aCLrGdlfvPgZaCpksjuLPq/ZrYtCpbIz0gzEVDneweOBF+1+wqFClv00dWNQLqcrjdyfjHezN9RFuiGpS3ghBVtCCW6wPb2qvcpjd1rMcq+8NFxwkYOfl91Yk4w8Xq6OHJnPbO2cK71AXCbo3snXOWxj6zdqNofYwfYgeKscrr3a+LPN86S+plSE0q7MfbOyadEeGrvneII6AcDB7Ose8TJqbo3t3GPTOY32ifL1m01qHhw0xL7EuESiu9URTvucHjoNJlbaRsTtGPtKzFMLht7eBmxZ0lCjdHTe15hdYhtSur1KQVg2MZwOGucTRpfuyf5zwiMZnM3Iyze8D3cIHGTPd8Q0OBKTzdhsiSDaGzfWxc67mPkPzni0pZRGKKZOBqeg1M2qJ50psrTpTQtaWhhaGy6x4UqnvuMB8yI/Q2XUHmAX+Z0H0zKqJCUzOo0I1Tt4/SsAONSn8CW/IRqlbp+PPsv6yqiZ5TM1LaGS2mt9mUDh8SZ5ToxkibkxBbX0l/s02RbDEGKcZIRyaMQWsItrNTuoRaUO0HkYnQttZ5t+mot3LJvgDJQEqeeoI1HPqNJqUqccUcIJwtUdDLtkmfJt+0bOO/pndGoNOuAAOn7Mjh1M0rW7dd0UdpMo3fLUNxTB48VAdPmeU7m72ElUklyfSpTo1x7ZqoWA9mmTcdjUzkU6J0wN1q9A8/wCKonM8FEyPFP6PQWqxP3Ri0/tTn93ZXXUqLRn5f8srUi1yEUf+Y2ZUp68Ue4ojnqO9DiP3HYwADwXC418DULgcuRNJuXSKjZdeh+6vjR14VVurYe2QrJzH3oji12isZwl/VoU2fXRbhWtwy4Rj+1ZamD3bcCiryMLe13eo284039QuBr3nU+kWvLthWzXrJXO7jeSp3gOn4h8YKttGgckUj7j3J5+87ar3B5qhDar71U672CddOZzy9zNTsttSlb96aoc7wQKEZlBwKmd4KQDqyHXhiZCW9SoxZabtn8KM31AhrjZ1WmAaqd0D5e8Ipk+ysQT8oko7k7LxdUkE2hfh7g11XHjDqra+VsgH5Qd9fvVxvY04AewH/aIvTKHOXxg48KMxPqNAuPdhOg7L9nRdq7kuFR91cBAW0znicH01hjBSaSBOShHdLoW7ObPFXfLDIUKB7nP6TYGx1B8IxN2x2OlupVA2pyS2pJxjpDCmJtjjSXJ5OXUOU210c0+zWEC9rUHKfQEtVIGQOUy9r26ru4HHP5xeG6G3SSs4m5RgraHgeUN2J8CuWyuaqcVzoATNqsoxGNlJ4OB8x19lks+LcjRgztcUcFtihUYMQCc1GPDHOYj2VT8JnfXdIYHxnq7KyM5GoB+clLCvs0Y9S/o4G1tnDqd06HM2SXFPGvlP1M262zir4Ckgc8eklzSAQj0Em8KH/Is4c2/vLLbTdaiJQ0x0neFFFnsyRby3cR5gP/zWV3Z2xB8jNintFx5Vpr/LSQH54jQ2rXOnevjoGwPkIilnU5owHVhuD5tgRinbdXpj/rVv/j3poRikkHWsx8zMfiT+cdtqGfKQ3oPN/SdT8MxSnTpjjVz/ACIx/wB+7GaZpfxt/TT+njlEyE0NUR/mO2/GAS8yMbuehclmHTDDBx6cPSXpPrKohI1mOkFTOsoKukiNCicjUVtIIEZg1qaSheMhZBiPQ/GeiDS4YcDp0OCP6TpPTeLzT3KHH0OQfhiG6EoOsZo1saYB9xE+9TGVbPwIP0yPrPKjnd1Vt0jGeA1H4uR+onWmLTNNryivnYJ6l1x8m/WIXXaOyTjdUz6Llj8lBnG9o6lKiVD21KqrA5JUIw3f4qQQsccyZ52Yr2jF2p2hyN3eLlaoU647tamuuufHyEzvJJSo2rSwcN9tnQv23teFMVap6JTP98TEu9oXl1VVmsqrUEO8lE+BXceVqrMMNjJ04fXPQrtumNPJ6MrJ/tDKP6oltDtQKYzgEct2pTb8mJHxjun2xYfF/CH/AFhBcbTfy0LeiP433z/oP9pkdrLK9Nsz17lXVSGNKmmFzwBJ0zjMUue3T/cUD3Yn6KJj3/ay4qKV3gARggKOB5eI/wBpOc8ddtmnFhzbk9qQz2S2h3XeV6rt3VFMKgY4ao58KqucZOGP1jmwrE3dRr28Gd79zTOd0Ly0/COQ56mchRpO4CjVQd4KT4d44BJ4a4E2G+1HjXKDhu08gAdABjHwkYSbq1aRqy41y06b9/o6DtnXpUbVkpoitVIQbqqDu8W1A6DHxl+yl7Rp0EorUU1ApeoAdQSdc+2QJw+06JXDbzOc+Isd4gddeELsi5KAtu5LcDzwIVl/k6oR6ZPBV3zZ9LG1RyYn2yZ6u0CT5R8SP8zibfbGuunvNSyvC7DHOX8qZjemcTv6dQlR4h640+pBmftRFJXLYOOZLfU4x8oijuIpfXDEjPSJB8jTj8aD1bRiPCVb2YD/AHY+kLa0HWnqjfePDI+Y0mLcVNJ7S2i6gAE6euY0+RMa2g7w8BHC2gGeSiLvteofPu1OneIr49s8JDdo3moj3VmX/TnESVlYtoUVv2jH3l7q6cL5s++GHyOZ4Vo50aoh5726+noAFx857c2ysPDWT2beU/LBH1ilEzMqXOeKUz/07v8AsIgP2Wm8jZ5lagAPrulD+caq7Oq8lDfyMrn+lTn6RKtSZfMpX3BH5wMeJGSlyZ190Uj5hh+UC1Jf+Ynyq/2SeNBxGVQZDDo0TRo/StHPID3IjJiyVBabRqk0Cluo81VR7eIwyPRH3nb2AUfWURCSHKDxym8z6d0nJPiSTDC6PoPYYlUyEommjy61IjTrZlu8jJknE0krjnn4SGt0GfiT+WJmGtK97DYNhomv8IM1McDiKi46wiMjcSQdMHiPjOsG0MLr/EqbxxqpIPUHEpUs6g1Uhwea6/TjFhU1wfjygsbahXbIrV0KMykcQSg3geu+MH55EyLezq0kKq5AzkgYGT1JnbfZ6DjzFTjXOozFq2yDxQhvb9Ijxq7LQztLb6OHrd7/ABH3P6xeo9TGDwnX17JhxWJ1bAHlJvGzRHUL6OMrOASJapUyAueE6WpsNCckSDZCjhI+GRo/KgZOyweE3/smVySBBJs4D/EbpWdP72T9D85VQaVGeeWLdnNbRti3hByM6+vSe2VoQMfKdb/wug/kqBT+GoCP9QyJWpsSquu4GB4FCGH0neLmw/kfHac8ltNbY9oN8afmPqJYUsNgjXnymnYoFOYdnBN5eTbpUccCfY6/U6/WZ+0Ahbxbw9VAI/pJH5x+nciZl+43iSYMcWnyDLJNcC1e2U+Wqns+8h+o3f8AVPX2c4GQhYdVw4+a5mfc3IJwuW9v1njvU45Ce2rfPlHkLBOgL6HB0h1OglKd7UByXL4yP2mHGDx0b2hG2gp81FPdCyfTJEVjrgTZvFBXDRlzROoLr7gMPprF6lDPldT9D8jBQ6YoWPIywu3GgYgdMzypSYcRAPEZSKRepck8QD8B+fGALDp9TPGMoTFbKJHitDByeJzFVaFVoqY7iMq0MjxRWhVaOmScR+lUjAqzOR4VXlEyLialKtCGtM1KkLvmOpEnAbNWTvIrmW34bBsGe8lhUim/LBodwNg6lwRqCQeo4x2ltHeAWogYDnwb4GY4MctFzpDYribCUadTyNun8Lf2MHVtKqcj7jUQJoY9/wC0Zt7monPT11GP7RkSYEXbczn3gK7g8se01TWpv51weo/xA1dmg6o2ff8AUTjkzIaVKxypaMvEfpBMkA4sRCU6BIyBBtxm3s0Duc+rRJy2opjhuZjUae8ce89Z2Q+Fip6g4ntu+HPxgLqprOvk6lQz/wAWfGHVXHVgM/OO0Lmg/wB1kPocic9VqjrK0bls+Ea9Z26gOFnRfZKjjKuqj6xeps3GrAt6nUfSL0qTNqzH4GNm+KDGcgddYwnKM65GOEUepNGrfI3mWKVKSHymKysP2JM0GzQ1S3I4axaoCOURlUVZoNjITKExGyiRC5HOUaoZ4xgyYjZRIjNBkyMYMmI2VSKKYRTBosKpEVDMIphkBgRUEsKsdMm0xpRCKRExUMsGjpk3EeFUT3vomGlw0ZMRxGu8lg0WDS4aGxaGQ0uGiwaWDRrFaGlaaGzX8UyA8btKmDGTJzjwdtRtQwErV2cT6Y4Quwq4YATfFsDKmJto5epZwDUCNROreyidezAhOUjCS4bnrB1kRuWD8o7VUA6axatRZuAxBQ6Zi3dvu65+clO/3U3ff6w91s5hqTBrTUDBk5Ky8JUZRqkk4gnQniZr/Z15ae0Qr0CPWLRRNC4QCQNKVDiC3pw1GmlXT2g69bMTFaUepO3CqHJao8EXlGeDLRGyqiGFyRznv2rqIqWlC0FjqAy7qYFlgS0rvxWx1Eswg2kNSUZ4jZRIqxgyZZjBmIyiBBzLq0kkRMZlw0IGkkjIVourQgaSSOhGi4aXDSSR0I0WDS4aSSERosGl1eSSMmI0XV4xbk5kkjISR1ewapXGZ2VvtFcSSS/owzXIQ1mbhPRs5m4zySTnJx6Jvgo2ygDrC/YxjhJJCpOhbMvaVjpOS2hS3cySR30WxsyhXInn2wc5JJKzUlweOQYrVtxykknMK4FqiEQJaeSSbKoqWlC8kkUokULShaeyRbHSKEyhaSSKOUJlCZJIrHRRmlC8kkUY/9k=' }}

// className="w-full h-full"
//               resizeMode="cover"
//             />
//             <View className="absolute inset-0 bg-black/40 items-center justify-center px-6">
//               <Text className="text-white text-3xl font-extrabold mb-2 text-center">
//                 معرض التجارة العربي
//               </Text>
//               <Text className="text-white text-base opacity-90 text-center">
//                 أقوى العلامات التجارية في مكان واحد
//               </Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Categories Slider */}
//       <View className="mt-8">
//         <Text className="text-xl font-extrabold px-4 mb-4">الأقسام</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View className="flex-row gap-4 px-4">
//             {[
//               { name: 'إلكترونيات', icon: '📱' },
//               { name: 'أزياء', icon: '👕' },
//               { name: 'عطور', icon: '🧴' },
//               { name: 'منزل', icon: '🏠' },
//               { name: 'رياضة', icon: '🏀' },
//               { name: 'سيارات', icon: '🚗' },
//             ].map((cat) => (
//               <Pressable
//                 key={cat.name}
//                 className="w-24 bg-white rounded-2xl py-4 items-center shadow-sm active:scale-95"
//               >
//                 <View
//                   className="w-12 h-12 rounded-full items-center justify-center mb-2"
//                   // style={{ backgroundColor: '#88c1c5' }}
                  
//                 >
//                   <Text className="text-3xl">{cat.icon}</Text>
//                 </View>
//                 <Text className="text-xs font-semibold">{cat.name}</Text>
//               </Pressable>
//             ))}
//           </View>
//         </ScrollView>
//       </View>

//       {/* Suggested Products */}

    //   <View className="mt-4 mb-20">
    //     <Text className="text-xl font-extrabold px-4 mb-4">المنتجات المقترحة</Text>
    //     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    //       <View className="flex-row gap-4 px-4">
    //         <ProductCard
    //           image="data:image/jpeg;base64,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"
    //           title="ساعة ذكية فاخرة"
    //           price="899"
    //           oldPrice="1099"
    //         />
    //         <ProductCard
    //           image="data:image/jpeg;base64,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"
    //           title="حذاء رياضي عصري"
    //           price="499"
    //         />
    //         <ProductCard
    //           image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhMUEhESExUXEhgXFRgYGBISFxYaGRgYFxgVFhYYHCggGBolGx0XITEiJSktLi4uGB8zODMtNyktMjcBCgoKDg0OGxAQGTAmICUsKy0vMC81LTItLy0tNy0tLTAtLS0vLSstLS4rLS0tLi8tLS0tLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAD8QAAIBAgQCCAEJBwMFAAAAAAABAgMRBBIhMQVBBhMiUWFxgZEyFCNCcqGxwdHwByRSc5Ky4TNTYjSCs9Lx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAMEBQIB/8QAKhEBAAIBAwIFAwUBAAAAAAAAAAECAwQRIRIxExRBUWEyM0IFUnGB4SP/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHh1Y/wAS90B7BjVaO2aPujIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFcZ4yqCais0tvBNrS/5FO4p0ixV4ZZaymlZJxil9J9lp6LxJLpDNKrVi1o3FrW12rJ+X0fcr2IllsoJZpOyvs+9yS3VvvM7JltN9t09axEM2LnGbipymknnq1JSk+yt4pd70XfrfkTeBjPE4etVoVI026rhdrNFQpyeaCitryzXtvZbX0pPTTGOjhJPLTfWVKVNJxzZcrk+0npJWjJq+zSJnow8uDi6c6jz1ZdYrtxgoxi20nu1pZ63vZ7RalwxEQ4u3elmAlXwUXQbg4uUopSb1ipKcbp3s1mlfm6afOxD9E+LRr4GjJyca9Ocqc7XWZx0cpOO2y8NfEmsZicvD1iYKVNUK0Zq7u1GTipX3vum3q283NkHgcThu0qMHRjLEyhZwdO8lplXheKivqW8+sscPK905h+O4iEkoVHKNtc3zi8sz/MtXBOOKtaM1lm77bO3d3FBxjlvTV5x5cmm1mi/T7UvEn+jrXWRfJySj4pb/AHlfFkvW0RvwktWNl3ABpIAAAAAAAAAAAAAAAAAAAAAAAAAAAUrpIvnJ96vq+Wkf8Fcr8Rpws27u2mWOb0vt6XLZ0l6PVKlTrafbTXahdKS21hfR3ttdFZxvAus7Eo1KcknZyhOMdVZq9rNeTuZmbFaJmVmlq8K10px9LFUJ0nTrXlKMov5uys43dlLeya8pGfolx6pSpywdPCTqzUJT0td3yNuS1tokr37iG470Zq05NSi0u+0pR880YvTxdvJELguAzqSag43SbdpJ6bXVr95Hjy2iNt0/hUmN93QekHSOtGnRwVXDTgoxpzkouClOKi8qccqWkrS7m4Llci+F8Rp6xqUqiiqkXD4FkUdk3mvOV9bpK7b01K/PoxWTSkpXaUtpy0e20f1oSPCeh9Wcksskuba6tJc7uXa9keXy2njd54VI9VrwWPhJbyjLneN7Pztb3sWHoxm/dlJ5nGbg5NWzOKkpSXm1cisDwfq+xGFWo3q5Rpzkm0kvi+GCskkm+XqWXo/wKpCp1tRKml8MLqUm9e1Nrsrlor7b6k2LFaZiflBa0QtIANJXAAAAAAAAAAAAAAAAAAAAAAAAAAAPFZJxebazv5cz1KSW7SNTF46koyvVprsv6Ue7zPJngUXiEq06nZnCCSsuy5yturttK+vcVjA5Z8S4hGvKdWNDAXlF5Ork5RptSjTlFxhJZl2vDxZP4/jFGnK8pN6L4VKXJc0rFRwmOhLHcUqpy6vE4Pq6TyzXbUKSSel1dwkZmm6eqd1m8W24S3G52xvDOoqVaUcRhcijFw6uGRT7Tp5csm/JfYicwcK8J2dWM00080Mrtu7OLVn6MpeOx0VieEycpOGGoS61qFS955+zFW7VrpXLfw7jlCpNWm1v8UZw5Pm1YaiY3jYpW23LpeHtljlVo5VbytoZDXwFROnCzT7EdmnyRsGnXsrSAA9AAAAAAAAAAAAAAAAAAAAAAAAEV0l4jPD0HOnHNNyUY8976257HPMVj8bN/PTqxvsrujH8EXnprNrDXjJxedWa0ez2Zx/iClKTcqjnfe7d/VGdrNT4VoquabB4kbpyphlmanVpppJ9ud7p6ppvcxSo04u7xNHyUkkVarh07X3XrfzR5dBW2Xoin5v4XI0fyleLU6NZW+UxT1s1ONvWN9SS6QcJoQq0pdfRjRq4am+rtBK+vbSvbfwe73KhCir7JeiLH0mqRqxwbVrxwtOEtt4/r7zrzPEvfJxvHLN0W6O0qixXzsJqdGXVKazZGk3LSTsmt01rZOz5mrw6jTpLL8pi/Fyjl80t0ZaGFlHDRxEXKLp11G62ateN+Ts7xafKViEWGUpfDFc9tEjydVO0cEaOJmeVmxcoU1H52m8+0o62/wA+Oy112JLBTrKClCddLa8ZSVn3NXuvYpbhdJbqySv4aG1183BQzNpO61enkc+cn2eW0fHErk+keMoa9bNq8UlUjF3vJJ3crPa50HgXEHiKSnKKi7tNLVac16M4pg8RUfVpVJ5esW7bSaTevjpz8TsfRJt4aLdr3d7JK/K+he0epnJbZS1GHohMgA0FQAAAAAAAAAAAAAAAAAAAAAV/pzTzYWS27UWn3M5BiZXk7q0le/c/H/B2LppG+Fl9aJxvERtJpIw/1P7kfw1ND9LSlI8avbfkZJxfh7iTyrTe2/4FGGjDxOaSs0pSfPW/lubeOw1OnPLCspq0ZRlrZqSUlp9F66p7MjVBvVnpaPTXxf5Em0bO9p3TD4hOOGeHyrLKpnck3dqy0a7rpO/ga9SpCnQzdtzbs0nCKcbRV8zV73la3NPwJPiOJS4dhYJdqVWrJ+Ki8qt3br2IfjCccPTb5yqR9V8mb+8mw0ickRbnhT1F5rjma8cpjDcGz0qc1SxPbhGWjwzWqvpeonYS4LLlGsvONCX9tUmJVP3PCQSg3Up0acc8c8E3Tz3lG6zaRdldXdldGKPFclOLcIpRw1apJRdkuocI2h/wd3Z91iScUT2rCl4+T9zUwXBXmzJzTS1To1mnyv2M1nsdR6IyvhoX3Upp7/Rm489eRUuBYuorZ1T/ANR0p2ck3LVxcIu+mmqb01fIuPRn/Qf8+v8A+eoWdFSK3nj0RZslrV5lKgA01UAAAAAAAAAAAAAAAAAAAAAQXTN/uz+vH8Tj2NazOzR2DppG+Ga/5x/E5HiqKz27Oj5JIwv1T7kfw09D9MtGc8vK9/1Yxzk2nZWv6v8AJG5NJ3TV9fJo16tOyve69mZ9bQ043R+U9QRkcTNh6Ot3t+tSWbO4hKzqKcKV1ljRpWv5ybcvNydl5kV0onbCYd99at47xw/5G3ja16UILZtze19Lwin5K7/734EH0pxXzNOF/gnf+uK/9SxpPu/0o62P+X9ug1MTRhgsOsRBThLDwTi4Konko9a7xfdGEn6d9jUxMcN1kuvjGfVxUaVN0o5acXKWkN1J9iz2soR0XPcwfD1WoYXrHeEcPHs23cqMqcryvs4zat4LUz1+DUpu8lJvK1fNO9m23z5tk3XSO8yztpbHR2OFhOLpwhGUorLaHavPZ5uTajK+915F46Mr93XjUqv3rTZVuAcFoxbmotOOVR7U7WV8qte1lyXItPRr/pqfnN+85MtaSYm87b9vVxl4hKAA0EAAAAAAAAAAAAAAAAAAAAAAgemrthn9ePprucvxMIqTSil48/c6p0wSeFmns7I5RiXz9/16GD+rV3tEw09BO0TDRnLXW689DxURmqVHL4nfw5GKUI22XsZkNWGGk437abT5q11467/Z5nqUVLZ+mzMTor9NnmdJPv8Acm3h1t6ss6b59xWelEu0140v7JlxqKdTLmeZ2str2WyemvhfkYalOm3l6qlN31bc1d8k2ppWX595Npstcd+qe2ytqqWvj6Y7rjw5TWEpumlKfyeGVN2V8iSu+6+/h3mjRwNeKjHNKUoUpwvJykqjUmqE3K++VyctLtpeF46vOrReSUUrJJLNiGkuSXztrW7jzHFX3hTfmpP+6TJI1OOO09/j/VCdNk9YXPovhOpU51HHN1VKm5t2csjmnJt96UHvy8C29G5qWFotJJOHLzevrv6nKMA4uXw0ofVhCL94pM6x0djbDUl3Qt7Nq5f0N63tMxKtnpNY2lIgA0lYAAAAAAAAAAAAAAAAAAAAAQ/SuDeHlbe6+85ZWwMp5m93feyta60/XI6p0qb+Tytvmj95zbF1nC8Xy5/j+JS1WGt55T4bzXsgZ8Pa+m15rYwSwcv9yPt/kmGozaulfk3dX8G+89LDR/gX2oyvJ5N+LQ0I1UbdkNTwsv8AcTfdb8bnqlhGm3Jrw5J/ruJeWHUVmadr6LX3b5eW5kdOFTa6krXS+lFd3iu79LiNLlmsyk81VofJnKm5KeVXs9k5d9/Dw97mp8jX8d/VfgWaEYKlKKc7X1u7X9EzRjgqTvord+p15LL7w583HpCL+TP/AHGu7Rv7zawuClq8zaytapJO+l1ZfaZXRhF7W7ldv1fIk8LUjZ3e6sSYdHO+95R5NTvG0I/B4fq2m7d75WS729TrvAotYelfd0035vV/ecwqyc1ltdqLcvBRWvu/xOqcNVqVP+XH7kaelxVx7xChmvNu7ZABcQgAAAAAAAAAAAAAAAAAAAACH6U60UlzqL7E3+BSMRhlJtNpK17yTt5aJl/47w75RRlTUssrpxfc1qr+HL1OdYqliqF44il2VtUT0av3+RV1G8SnxRu06mEje2VN8rPQzyi1aKjKTtq7L2NKni0223bu39zZo8RUXpOPqv8AJUrmpb8oTzS0ejJLxhP0j+UjWq0Y5r5Kl772kSq4hTmtXTT/AOLt+DNbEYjV2t7pkk2+XPS8ukqiW6vo1t/8Z5lCKSjGE9OdpWf68TNQkopbZrZpK/f+kfY4+C+LJf6y/A56493vTLReFi3d05X8pG3hsGt1D7H+RiqcXje0cr/qS97amxHiyS0WfwTS+858avueHPs94GhrU/izWa8GtLvludF4P/oUf5Uf7Uc04VHEYmpLqaeW9sze0Urq7l+XcdRwVDq6cIXvlilfa9luXNPbq5hXyxszAAsogAAAAAAAAAAAAAAAAAAAAAPjV9z6AI3F8Bw1X46EH4pZX7xsRGI6BYSWyqR8pfmi0gitgx2+qsO65L17SpNT9nFD6Naqv6Wa8/2bR5YmXrBfmX4EU6LBP4pI1OX9yiU/2d2v+8vVW0gtvVmWl+zigvirVX/Si7ARosEfiTqcs/kqdP8AZ/hFa7qy8MyS+xEvg+jmGpfDRj63l95KglpgxU5rWEdst7d5eYQSVkkl3LQ9AErgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z"
    //           title="عطر شرقي فاخر"
    //           price="699"
    //         />
    //       </View>
    //     </ScrollView>
    //   </View>

    // </ScrollView>
//   )
// }






// HomeScreen.tsx
// CLEAN, SAFE, ERROR-FREE Expo + NativeWind implementation
// No experimental props, no web-only features

import CategoriesSlider from '@/components/home/CategoriesSlider'
import Header from '@/components/home/Header'
import { MarketingSlider } from '@/components/home/MarketingSlider'
import React from 'react'
import { View, Text, Image, ScrollView, Pressable, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

// =========================
// Reusable Product Card (NO animation to avoid errors)
// =========================
function ProductCard({ image, title, price, oldPrice }: any) {
  return (
    <Pressable className="w-44 bg-white rounded-3xl overflow-hidden shadow-md active:scale-95">
      <Image source={{ uri: image }} className="w-full h-40" resizeMode="cover" />

      <View className="p-4">
        <Text className="font-semibold text-sm mb-2" numberOfLines={2}>
          {title}
        </Text>

        <View className="flex-row justify-between items-center">
          <View className="bg-black px-4 py-2 rounded-full">
            <Text className="text-white text-xs font-bold">أضف</Text>
          </View>

          <View>
            <Text className="text-lg font-extrabold">{price} ر.س</Text>
            {oldPrice ? (
              <Text className="text-xs text-gray-400 line-through">{oldPrice} ر.س</Text>
            ) : null}
          </View>
        </View>
      </View>
    </Pressable>
  )
}

// =========================
// Home Screen
// =========================
export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100 pt-8" contentContainerStyle={{ paddingBottom: 40 }}>

      {/* Header */}
      <Header />
      
      {/* Marketing Slider */}
      <MarketingSlider />

      {/* Categories Slider */}
      <CategoriesSlider />

      {/* Suggested Products */}
      
      <View className="mt-4 mb-20">
        <Text className="text-xl font-extrabold px-4 mb-4">المنتجات المقترحة</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-4 px-4">
            <ProductCard
              image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMWFhUXGRgVFRcWFRUVFRgVFxgWFhUXGBUYHSggGB0lGxMVITEhJSkrLi4uGiAzODMtNygtLysBCgoKDg0OFRAQGy0gHSUtLSs3Ly0uLS03LS0tLS8tKy0rLS0tNy0rLTArLSsrKy0tKy0tMCsrLSwrLS03KzA3Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABJEAACAQIDBAcEBwQHBgcAAAABAgMAEQQSIQUGMVEHEyJBYXGBMpGhsRQjQlJygpIzYrLBCCRDosLh8FNjc5Oj0RUWJUSEw/H/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQMCBQQG/8QALREBAAIBAwIEBQMFAAAAAAAAAAECEQMhMQQSBRNBURRxgfDxIjJhkaGx0eH/2gAMAwEAAhEDEQA/AJxpSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSqOIxccYJd1UAFjmYCwHE691BWrGbW3gw2G/bSqp45dWf9C3Prao+3q6Q3kJjwhKR8DJa0jfh+4PH2vKtFaQkkkkk6knUk8ye+ta6fumUq4npOwoNkimfxsij4tf4VTTpSw32oJx5CI/4xUW5q+Xrvy6mUuRdJuBPHrl847/AMJNXsHSBs1v/cW/FHKvxK2qFTXgoKnlQZT/AIbeXBSaJioCeXWpf3E3rJxyBhdSCOYNxXMOLmRNDqeQ4+vKrBcc6nMhyHmpIb3iuJ0zLq+lcx4TfLaMfsYyb8zdYPdICK2TZHS5j4yBMI8QvfdeqkPk6dkfornslU8UqOdn9MWBbSaOaHmxUSIP0Et/drdtj7bw2KXPhpo5QOORgSp5MvFT4G1TEwMhSlKgUpSgUpSgUpSgUpSgUpSgUpSgVRxmLjiQySOERdSzGwFUtq7Rjw8TTSmyKLnmSdAoHeSSABzNcxdI3SDPj5iFbLEh7CqeyLd9/tH973WHEJZ3j6R1e6YVmVeBkCksfwngo8ePlWgTRQu5kOcueLsrM2vNtai2WVmN2YseZJPzpHKy+yxHkSPlQSi0ad0o8m0+dq+/Rm7ip8jUdRbbxKiwla3ib/OrlN5ZxxEbeLIL+8V13yN6MDj7PuNUyGHFT7q1WPe5xxjHo7r8L2q8w++Y+0HHkVce4gH41fMlMM7nqx2jjWXsqOPFv+3/AHqrDtZJRdGDeWh9VOo+VYvGMb61fMkwoXpVdFBFqtGe1WJzA+steSvI19Divt6o8iUjjVSDESQuJoXZGXgyMVcc7Ed2morwRXkHKfCgnDo06S/pJXDYsjrTpHLookI+y6jRXsNCLA8LA2vJ9cdSHIb/AGW+BrZd3t7cTh2jeOR7KwZowxCMgOqFL5TmFxe2l78a47R1BSqGBxaTRpLGcySKrqeasAQfcar1wpSlKBSlKBSlKBSlKBSlUcZiVjjeRzZUVnY8lUEk+4UEH9Pe9ZLjCRtoujW73I7Z9FYIPxSchUebV3UWKKGzP1skkcZzKBE3WIHzREXZlXMqk248Ktd55pcVjXCqzyEkZUBZi5JklAA1PbaT0qjjkxqTtE+dpcMrJZRn6uNBlJFgQFAN83dob0i1Y2nljq01bTWaTiI5/n2WibLYiVldCsV9c3tgEDMo5ajU24gcTarCsjjNouYxC0aoAcxyqyFtNMyg5W7rEi/jqb2mFdQ4LjMoOo51dvR3Tu37lGlXWOkiNurUj71+dgNBc2GhP5q84HCmRwo9TyHea5mcbu1KKMsQBxNVsXg2jtmtryrIvgeokQ3urdm9rWP+j86uNpxZo28O17v8r1lOrvGOGtdPNZn1a+jEG4JB5jQ1vMURlw6SEdqwze4EH1BrRKlndbB58Ko/3MTe9pRf3Ae6tmTX9k4YyTRRg2LOqC/3nOVB6sVHrVHGoVYhhqNCCBf1vVxiSYZCw4oc480OYfEVJXSfuFIXlxmHylLGSVL2ZT9tl0sQdWOo7+Nd1n0RElhyHur51S8vcTX1hY2NfRXY8/RR3MR561TkhYd4NXStSQUGMZCdDwq9RQBYVQkW1VYW0qQJw6D9uGTDyYVrkwEMh/3cpY5b+DhvRgO6pMrTeirYkOHwEckZzPiFWWV7akkaJ4BLkW55j31uVZzypSlKgUpSgUpSgUpSgVqXShtMQbPkufbITzUXklHrHG49a22oX/pDbXsscAP2bkeMjaH0WFx+egh/dzeWXCTviEAMjqykm1xnIJYXBF9O8HiazSb6JJJNNPH25pMzZUR1CKgSIdog9gBxYFc2fUi1jYbK2hhcPhXuOummUqRksIgQy6ORxsx1HPvrxhtmwyKcuVnSML1aMQ0kzrfNckg5S1sqnXq20Ggb5bVpNptauPTPv/zP+28UnERE5/hj94tqHETtJdiLKozE37KgMctzkzNmbKCQMxAqhgsD1gNmAN7BeJPM2GoA07u/wNZbbOyIY4y65wcqkXa6hy2UobqGLWWW4sMpjNxrYYY4CXKGyEg6gjX5cK305ia7M71ms7q0ezT1vVsRoLtY3sOXnw99ZCOFYZUZfZY5G7+PD/XhWP2GhOIiS9s7rH5ZyFv8b1JW/uw4IsCXjTK0bIQ1zmN2CnMe/wBqto0++lnk9T10aHU6OnOf1bflqe3Ys0Lc1sw9Dr8CapIcyg/eHzFXm0v2Un4T8qscF+zT8I+VebH7Pq93T5lrSKSQBxOg86n7drACPDuPurFCPHImc/GYj0qGd0MGJcXED7IOdjyCdq/vAqZNr45sPgYwo+umPZU90kxaQ355QTp+6BpXoQ+Vpm1MP1mJ6scWIX9Rt/OulMXhxIjxt7LqyHyYEH51zvjdnrGVUENKwzSOGzG3K/yqR+jHb0hY4WVy4y5oixuRl4rc6kW18LUEM7UwxSQq3EEqfMGxqiq1sXSBhsmNxA/3rt6Oc/8AirX0FbI8la+BaqkV8tQUJ4NL1YyDsk8iD6VmMuhrFsvtDmDUkdA9CW0Os2dkvrDK6a8mtKPT60j0rf6hr+j1iz/WozwyxOB4gyK5/g91TLWVuVKUpUClKUClKUClKUCuWemTa3X497G4DNbyW0S+hEWb89dLbwY/qMNNMOKIxUc3tZB6sQPWuRZMLJjMaIYRmeSRYo+OoFkVieVgCT5mgo7B2BisY/V4WF5WGpyjRR3FmNlUad5Fe94d3MXgnEeLhaJmF1vYhh35WUlTbwOlTHvfvHHu9hodn7PCHEMokmlZb8dM7DvZipsDfKo4aisl0ybMkxsezMMAoxM8p/IojBnPPKt1J/DQc7tKxAUkkC+UEmwvxsO69XMO05VFg5toNe1a3C166H2bJsTZOJg2YsfWYmUojyGNZGDyWCda51TMSLKoIAIJABuY16edh4fC7QT6OixiWISOiABQ+d1zBRooIUaDvBPfQaluqjT4+C5uxlVyfBDnPwU1KO/kXWQR4cHtYieGEd9szXvbwy1rfRRsQjNi3GhBji8de23wyj81bjsyP6VtZANY8ChkfkZ5hlRT5KC1+YIrvW1Y6fpb6k+34fmtWPjPGNLTrvGnvPz5/wA4h56TNgYXD7LkaOMK6dWqv9tizqrZm+1dSx+VRaexH+FfkKkfpr2lf6NgwdWYzya8FS6pcciS/wCkVGO15LR272Nv5n5V4Xh0XnQr3TmZmZ+n3D9lbETaY9GZ6M9nZ2ka3tlIB5SH633ICfSt06UMRlbDm11Vzp3XsLfI1R6K9nZY4iQNFedvxP8AVxH9HW+6qfSDIHGXxuPMV7b4mOwuLMru7cdB5ADQVunRphi2NVhwRHY+oyAf3vhWL3V3Axc0MU6mIJIPtM4bKCwzFchBJtca8DUsbrbupg4yoOZ21d7WvbgAO4C9BDXSqltoT+cZ98UZrUUFbj0qtfaGI84x/wBKOtQQVtHEIEV5IqpXkiqj0grGuO3WUSsbP7dSVb30AzFcc6dzQSe9ZISPgWqfq526D2ttMDmkw+AP+GuiayspSlK5ClKUClKUClKUEfdNe1+owOUEAu2b0jGZT4/WmH31Gn9HbZKyY+WdgD1EXZ8HlOUH9AkHrV7/AEhNr5p1gB0QKp87CST3h4P01qfRTvyuy8RI0sbPDKoVwls4Km6MoYgHiwsSON76WIZvdrZMm2NvzTuLwxzGWUkadXG2WCI8ywjVbcgx7q2lt/8ADPvGDJIq4eGOTCxyMQIxKSDJIWPAEqUvwsAeBrB759L8TQPh9lQHDiUsZZiiRuS3tlFQntN3uTfjbWxGG6Ldg7MaOXHbTnQRwuFWBmF3YKGuyDtSDWwUDUq17gEUEundDZ8WNl25JiM6261SWVoUsgUuGX29B2RzOlza0PtL/wCObVlnlzLCoBC3GYRKQscdxwJuWNubW7qtuknpGl2kwijUw4RD2ItAWtoGktpfko0HjxrVtg7bmwknWQkAkFWDC6sONiPMA11WYiYzw+fqq6ttG9dKcWxtKZ9tbSXCxJHEgaV7RYaFR7TaBQF+6Li/+dbHurshdn4QmZxnOafFSk6GQjNIb8gBYeV++rDcbdgplxuLbrMXKgNyBlhRhcRxrwBsbE+Y7yThN8trnaE/0DDN/V4yDjJV4MQbiFD5jU8x+7r4HiXW/HanlU2067zP3/b3lfBPCPgdPf8AVq3+/wCjE7P2eNozTY/EBgJTlgS9ssKdlSfE24DS9zreo+29BfFnDobhZDEp5ktl18eA9KlLejbCYLDXQANbq4VA0uBYafdUa+4d9RpuTDnxYke5EYeZ73JOUX9Tc19Hh3febak7V4iPk9vr600q00q/u5mU0buwCOCRhwuIl/DCMhH/ADOtrRdvO0s+RAWOmgHeSFFz3XZgK37GAw4VEJ7QQZvFzq59WJrVdwcH9I2nFfVUYyt5R9pT+vJ769Z5addl4MQwxwrwjRUHkqhb/CrqlfHYAEnQDU+QqDnnpCmz47Ekf7Ur+gBD/DWuoKvdpYjrZJJD9t2k/Wxb+dWwFfQ5eSK8kVUNeSKD6grG4j26ya1jZh2vfUlW29CI/wDU1/DN/D/nXRVc99AyX2iTyhlb+9Ev+KuhKyspSlK5ClKUClKUCvjMALngNTX2tf38x/U4Cdr2LL1YI4gyEISPIMW9KDmLpD2scTjZJNbElhfk5LqLeCsi/lreNyNw9mRYKPH7YlAWb9lEXZFyk9knq+27EDNYGwB18InxuI6yR3P2mLW5XN7VMPQ5uRgMdAs+JlM8sTm2G6wZY0BuuePiQzXPcp4c6DE9N25OEwDYeTCDIk2cGMuzgFMhDKWJNjn115c6obr9DGPxUImkZMOrC6LIGMjA8CUHsg+Jv4VuOwlk23tiSfFxdXhtnkosLEECYMRZyOyxujM1tOyg1Gpstk784raW8EKQSuuER3CopYI0SIxaSQDRs1tL8LqBrxCJd5dgzYHEPhsQAJEtqpurAi6spIFwQf5GxFYupF6e8Ysm1nVf7KOONvxWMnykAqOqCS9j75bRx8aYFGSIBLSzqG6wxrZedgTcDS1/AXrasPBh8BhtOxGguzHVmbmfvMdNPIDSol3T3hOClL5M6suVlvlPEEEGx1FvjVXevb2IxRVpFMcRuYk1yG2hbMQM514/KvI1ugtfU7KxFdPmces/f0ep03V6ejpTbnU4+ULbefbr4uYyNoo0jTuVf+54k/yArbeivZ2a7H+0lSP8kd5X9CFK+tR3U5dGuz+riS49iLMfxztcjzCx+5q9WlIpEVrxDzb3m9ptbmV7vpiuyw/15e75jjer/oU2WVaedwL5URe82Yln/hT3Vqm9eIzyKo7zf0JzEH/p+6pT6NMFkwmb77EjyWy/MNXcuW21EPSVv3iI8R9DgKhHVg5y3fL2kbtXsCTyGgIPE6S9XLPSE7xbQlJJP1k4F/udaco9LD3UjkVa8toLmsb/AOIlVjJsesQutiSQBJJHZtNDeInS+hXnYXeB2rGJEaRcyhlLLzAIJGvca27oR8TGRng635E2PuOtVqzu8u3sFPARHCokLLclRcLftEEeg9a18SA99Stsj6xrH4k2PkP9fKr8mspsbdE4g5pJMsbIGsls1muE1IsLqM3fxFLTgbH/AEesNebESfdiVf8AmOT/APTU41HfQ5sH6LHiwdfrljVrWLIkaup98zDzvUiVlPKlKUqBSlKBSlKBUbdPGIK7PUA+1I1/H6mUW97A+lSTUc9PGDL7MLqP2UgY/hZXjPxdaDSP6O+Cw0v05ZFVpSiIAwUnqWziTLfuJKhvy1sO7G60G7kWIx2MxCyOymKIKMpYXzBFBN2dyi+ChSb2ua5/weLkicSRSPG44OjFGHdoym4qrtHak+IIbETSzMNAZZHkIHIFibUE67vzS/8AlvGYuNS2IxbYmWTqwSc0svUuVHEBVBbwsas+i3Yo2RgcRtXHKUdkyxRsLSZL3C2PBpHCgDuCg95tp3R70rzbNgOHMCzxZiyAuY2Qt7QzZWBW+trcSdawu/e/mK2m4M1kiQkxwpfIp4ZiTqzW0ufGwFzQa/tXaEmImknlN3ldpGPdmYkm3Ia6DlVrStr3cwUb4WVCy55sl7FS6os0YVFX77tnAB+6hNgSaDWsHGrSIrtkQsoZrXyqSAzW77C5tW8Q4odUAJ0zRlOtlEmbIDnDyRZ9SwjiiQBBYF2A4i1HF4PDfSEjXDq0bRlmYF+xCmZA6FCMzMYy2Zgbl1W3PE7b2FHCmcOSAiKO8NiOskSUA29gdRIfVOdBj4k+k4vRbCWUnKO5Wa5A8gfhU9bMTJhmbh1jm34RaFD5ZUDetQ30f4YnENKBcxqSv/FfsRj1JtUwbdmWCBY14RqoHiEt87fGrA1CV+txRPcP56j+7lHpU/bHwnVQRx/dUA/it2vjeoS6MsCMRigouQhzsbG2RSLXPjoLcdTyqeagVy50tODjnt+8362Lj4MK6exUuRGf7qlvcL1yhvrL1uPlA1s2S/PqwEv65RQY/ARE2J7gAPADuFZKPCZiF4XIF/PSvsMNhamNlyIWHHgPWtojEIlbGbrbPkQXUAKoF1Nuyote3C9hxqKm3gw7YUYePAoJbsfpTSu0uUuzKCoABIUhe0WFhwqwj23Ml1u63A0uwurC4NuRUgjmCKbLwByq5Fgwuuo1AJW+nDVTofkRWdeVe4xJzqStwXYwsG1IyAfhEahR6Ba0jIAL1IO6Mdovyw38+qVj/HXV0Sjuqv8AVweZY/G38qy9WGwYsuHjH7ub9RLfzq/rNSlKUClKUClKUCrHbmzVxOHlgfhIhXnYkaG3gbH0q+pQcg7Y3TkiZlGjKzKVY96kgqG4XBFrHjxBrA4jCSIbOjL5g/Oui+lPZQikXEhRkl7Egtp1ijsk+aj+541onUwtwJXwBuP0sCKCKKVJuI2HG/dG3muU+8H+VYvE7pRngjL+Bg/8Vj8KDRqVseK3WYezIPJwU+JrHS7CxC/2ZI5rYigo4fas6BVWVwqMHVcxKBgcwYIeze+vCvOIx8jxxxMbpFnyDlnOZrnv1r2NlT/7NvUW+dX2yNhszBpewgP5mtyHLxoN33AwIhjDvxv1jX+/b6tPyg5jyJHKqm821+sOUGsbi9rWGRNAOH+u8163X2RJjMTHCt7ue0fuRjV39Bw5kgd9US70N7G6rCtOws07af8ADjuF97Fz4jLUgVSwuHWNFjQBURQqgcAqiwHuFVagwG/G0xh8HJKe63vv2R6kBfWuZtlwE5pnuSxOW/EjnXS+/uKiTBS9coYMAqKe+S+ZD+UqG/LXP07AmwFgNABWlI9UlSVaSxKwytqD3V6kJCkgXIBIHM2rGbu7LnxkpCHhqzHgK7mcDJ7VH0jKZOKokQKqqnJGMqXsOIUAX5AV8hjAAUcALDyq6xmw5sMQJWUhhdbNfh324gVTUUiI5gW+LBICL7TEKPMmw+JqVNgYXN2V4PKVB/dBEQPujvUX7LlX6UjN7Md5PVBdP7+Wpk3VwR62JB/ZjO5/D/MuR6ZqzvO5Df1UAADgNBX2lK4UpSlApSlApSlApSlBj9vbIjxcEkEt8ri1x7Skaqy37wQDXPG3NkPg53wzMCY8ozAFQwKqykA8NGGlzbhc10vURdNey8ssOJA0cGJz3Z1uyepUv+iu6cpKOlnYd9V49oOKsr0vWnbAy0e1e4iqqTwMdUW/gLfKsJel65mhln2ghtdVGmvP51q2LxJJq5fFslmFyL6jwrHFwx04VxMYV7gjLEaEkmwABJJPAADifCuiOjndAYGDNIAcRIAZDxyDiIlPId57z4AW0Doj3TeWdMXIhEMXajJGkkn2SvNV9rNzAtextN1chSlaB0mb2CJDhom7bD61h9lT9n8RHuHnViMyNP6Sd5fpM+SM3ijuqcmP2n9bWHgPGtKUV9ZixvXorpW8R6OVu+OjBy3177d1XOExpUkxOynvykqfW3GsluZsLZRDNtKaUPeyKgcRgdzFkBYt4aAePd93g2fs+KQfQJZpQb5jIAEHIIcqsfMi3ie6Z3VjpJGdizsWY8SxJPvNUcVJlWqtYrGSlmsLnwAufIAcTVlF3u7sqbETqYoTMEIZ0GaxU3ABKgkai407tbC5rovc7Z8kcOedAk0li63DZQNFUsNDxY6d7EXNqtejndr6Dg1Rh9c/1k34yBZL8lAC+YJ762isJnMuilKVApSlApSlApSlApSlArD73bEGMwkkGgYi8ZP2ZF1Q+VxY+BNZilBytKjKzKwKspKsp4hlNmB8QQRXjNUr9LW5jMTjsOtzb+sIBqQNBKB4CwbwAPcbxJet4nMIqXpeqd6Xqo9Si6kV92DjVgxMMzAFUkRnBGYGO4zi3f2c1eM1W7LYkVJV1slrC1rd1uFu61eq0Loy3tik2eOvlVXw1opCxtdQPqW11N1FuZZWrD73dJtwYsHcDgZODH8I+z5nXwFZRWZlWx7876phVMURBnOhPER+J5tyHqeRhPFYhpGLMSSSSSTcknUknvNeZJGc3Y3J1qjjMQI1zEE93/6e6tYiIhHuQ5VJtewvYd9WWBixs13jgnkQaExQyOgPIsqn419we0y97gDlxrMYLak0Y+qmlj55JHT+EinPAsIXe5V1II4ggqQeRBquBVXEYh5GzSOzseLOzOx82Yk1Y4rFBRYVUecdibaCt46G90uvm+mzL9VE31QI0eYfa8Qn8VvumtY3K3Ul2jiMgusa2M0lvYXkL6F24Ad3E8K6R2fgo4Y0iiUKiKFVR3AfM+PfWdrKuKUpWalKUoFKUoFKUoFKUoFKUoFKUoFRjvr0XLKzTYHKjnVoTpGx7yh+wfD2fw98nUqxOBy1tLZk0D5J43jbk4Iv4g8GHiLirMiuq8VhY5FKSIrqeKuoZT5g6VqW1ujLZ81yqNCx74msP0NdQPICu4umEAEVTkW/nUpbU6H511w88cg5SBo2t5jMCfdWo7T3Lx8H7TCyW+8g61fO8d7DztXWYka1FIQbjyPlyq9jmT7wvyvr7qtZYdTzHEd/+RqkON+8c6ovMXNMD2FFufE+41Ww87WGYa9+lqtVxhHd/Ogxg5GqL8xr90c+AvXokKOVY1sce4V4gilmcIis7t7KICzHyUa0zAr4nHdy1l9zNzsRtCXsgrEp+smI7K/ur99/AcO+2l9y3O6InbLLjzlXj1CNdz4SSDRfJb/iHCpfwmFSJFjiRURRZVUBVUDuAHCs5uLTYOxYcJCsEC5UXXmzMeLse9jbj6cABWRpSs1KUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQWeP2VBOLTQxyfjRX91xpWs7R6MdmS3PUtGeccjr7lJKj3VuVKuRFGO6FYz+wxki/8WNJf4ClWQ6E5e/HIP/jsfh1oqZKVe6RGuzOhvBoQZ5ppuagiJD+m7D0at52PsPDYVcuGhSIHjlXtNbvZuLHxJNZGlTMhSlKgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSg/9k="
              title="ساعة ذكية فاخرة"
              price="899"
              oldPrice="1099"
            />
            <ProductCard
              image="data:image/jpeg;base64,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"
              title="حذاء رياضي عصري"
              price="499"
            />
            <ProductCard
              image="data:image/jpeg;base64,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"
              title="عطر شرقي فاخر"
              price="699"
            />
          </View>
        </ScrollView>
      </View>

    </ScrollView>

  )
}
