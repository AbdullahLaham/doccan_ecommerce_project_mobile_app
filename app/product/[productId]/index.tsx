
// import { useLocalSearchParams } from "expo-router";
// import { useCartStore } from "@/store/cartStore";
// import SafeView from "@/components/SafeView";
// import Toast from "react-native-toast-message";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");

// export default function ProductDetailsPage() {
//   const params = useLocalSearchParams();
//   const productId = params.id;
// const mockProduct = {
//   id: '1',
//   name: 'حقيبة جلدية فاخرة',
//   price: 199.99,
//   oldPrice: 249.99,
//   images: [
//     "data:image/jpeg;base64,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",
//     "data:image/jpeg;base64,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",
//     'data:image/jpeg;base64,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'
//       ,'data:image/jpeg;base64,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2',


// ],
//   description: 'حقيبة جلدية مصممة بأحدث التقنيات لتوفير أفضل تجربة للمستخدم.',
// };


//   const [product, setProduct] = useState<any>(mockProduct);
//   const [quantity, setQuantity] = useState(1);
//   const addToCart = useCartStore((state) => state.addItem);

//   const scrollY = new Animated.Value(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://your-api.com/products/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchProduct();
//   }, [productId]);

// //   if (!product) {
// //     return (
// //       <View className="flex-1 justify-center items-center bg-gray-100">
// //         <Text className="text-red-500 text-lg">المنتج غير متوفر</Text>
// //       </View>
// //     );
// //   }

//   // Parallax image height
//   const HEADER_MAX_HEIGHT = 400;
//   const HEADER_MIN_HEIGHT = 100;
//   const headerHeight = scrollY.interpolate({
//     inputRange: [0, HEADER_MAX_HEIGHT],
//     outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
//     extrapolate: "clamp",
//   });

//   const addCart = (item: any) => {
//     addToCart(item);
//     Toast.show({
//       type: 'success',
//       text1: "success",
//       text2: 'تمت الإضافة إلى السلة بنجاح',
//     });
//   }

//   return (
//     <SafeView className="flex-1 bg-gray-100">
//       <StatusBar barStyle="dark-content" />
//       <Animated.ScrollView
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//       >
//         {/* Parallax Image */}
//         <Animated.View style={{ height: headerHeight }}>
//           <FlatList
//             data={product.images}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <Image
//                 source={{ uri: item }}
//                 style={{ width: SCREEN_WIDTH, height: HEADER_MAX_HEIGHT }}
//                 resizeMode="cover"
//               />
//             )}
//           />
//         </Animated.View>

//         {/* Product Card */}
//         <View className="bg-white rounded-t-3xl -mt-12 px-6 pt-6 pb-24 shadow-lg">
//           <Text className="text-3xl font-bold text-gray-900 mb-2" style={{ writingDirection: "rtl" }}>
//             {product.name}
//           </Text>
//           <Text className="text-gray-500 mb-2" style={{ writingDirection: "rtl" }}>
//             {product.category}
//           </Text>
//           <Text className="text-2xl font-bold text-gray-900 mb-4">
//             {product.discount ? (
//               <>
//                 <Text className="line-through text-gray-400 mr-2">{product.price} $</Text>
//                 <Text>{product.discountedPrice} $</Text>
//               </>
//             ) : (
//               <Text>{product.price} $</Text>
//             )}
//           </Text>

//           {/* Description */}
//           <Text className="text-gray-700 mb-6" style={{ writingDirection: "rtl" }}>
//             {product.description}
//           </Text>

//           {/* Quantity selector */}
//           <View className="flex-row items-center mb-6">
//             <Pressable
//               onPress={() => setQuantity(Math.max(1, quantity - 1))}
//               className="px-4 py-2 bg-gray-200 rounded-l-full"
//             >
//               <Text className="text-lg font-bold">−</Text>
//             </Pressable>
//             <View className="px-6 py-2 bg-gray-100">
//               <Text className="text-lg font-semibold">{quantity}</Text>
//             </View>
//             <Pressable
//               onPress={() => setQuantity(quantity + 1)}
//               className="px-4 py-2 bg-gray-200 rounded-r-full"
//             >
//               <Text className="text-lg font-bold">+</Text>
//             </Pressable>
//           </View>

//           {/* Reviews */}
//           {product.reviews?.length > 0 && (
//             <View className="mt-4">
//               <Text className="text-lg font-bold mb-2" style={{ writingDirection: "rtl" }}>
//                 التقييمات
//               </Text>
//               {product.reviews.slice(0, 3).map((review: any, index: number) => (
//                 <View key={index} className="mb-2 bg-gray-50 rounded-xl p-3 shadow-sm">
//                   <Text className="text-gray-900 font-semibold" style={{ writingDirection: "rtl" }}>
//                     {review.user}
//                   </Text>
//                   <Text className="text-gray-700" style={{ writingDirection: "rtl" }}>
//                     {review.comment}
//                   </Text>
//                 </View>
//               ))}
//             </View>
//           )}
//         </View>
//       </Animated.ScrollView>

//       {/* Sticky Buy Bar */}
//       <View className="flex-row p-4 bg-white shadow-lg rounded-t-3xl">
//         <Pressable
//           onPress={() =>
//             addCart({
//               id: product.id,
//               name: product.name,
//               price: product.discount ? product.discountedPrice : product.price,
//               quantity,
//               image: product.images[0],
//             })
//           }
//           className="flex-1 mr-2 bg-[#88c1c5] rounded-2xl py-4 items-center"
//         >
//           <Text className="text-white font-bold text-lg">أضف إلى السلة</Text>
//         </Pressable>
//         <Pressable className="flex-1 ml-2 bg-black rounded-2xl py-4 items-center">
//           <Text className="text-white font-bold text-lg">اشتري الآن</Text>
//         </Pressable>
//       </View>
//     </SafeView>
//   );
// }

import React, { useRef } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");
const IMAGE_HEIGHT = 280;

export default function ProductDetailsPage() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const imageTranslate = scrollY.interpolate({
    inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
    outputRange: [-IMAGE_HEIGHT / 2, 0, IMAGE_HEIGHT * 0.75],
  });

 const imageScale = scrollY.interpolate({
  inputRange: [-IMAGE_HEIGHT, 0],
  outputRange: [1.15, 1],
  extrapolate: "clamp",
});


  return (
    <View className="flex-1 bg-gray-100">
      {/* Scroll */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* HERO IMAGE */}
        <View className="overflow-hidden">
          <Animated.Image
            source={{ uri: "data:image/jpeg;base64,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" }}
            style={{
              width: "400",
              height: "300",
              transform: [{ translateY: imageTranslate }, { scale: imageScale }],
            }}
            resizeMode="cover"
          />

          {/* Back + Favorite */}
          <View className="absolute top-14 left-4 right-4 flex-row justify-between">
            <Pressable className="bg-white/90 p-3 rounded-full" onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={22} />
            </Pressable>

            <Pressable className="bg-white/90 p-3 rounded-full">
              <Ionicons name="heart-outline" size={22} />
            </Pressable>
          </View>
        </View>

        {/* CONTENT CARD */}
        <View className="-mt-8 rounded-t-[32px] bg-white px-6 pt-8 pb-32">
          {/* Title */}
          <Text className="text-3xl font-extrabold text-gray-900">
            ساعة ذكية فاخرة
          </Text>

          {/* Price */}
          <View className="flex-row items-center gap-3 mt-3">
            <Text className="text-2xl font-extrabold text-[#88c1c5]">
              249 $
            </Text>
            <Text className="text-gray-400 line-through">299 $</Text>
          </View>

          {/* Rating */}
          <View className="flex-row items-center gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Ionicons key={i} name="star" size={16} color="#facc15" />
            ))}
            <Text className="text-gray-500 text-sm ml-2">(4.8)</Text>
          </View>

          {/* Description */}
          <Text className="mt-5 text-gray-600 leading-7">
            ساعة ذكية بتصميم عصري، مقاومة للماء، تدعم تتبع اللياقة البدنية،
            بطارية طويلة العمر، مناسبة للاستخدام اليومي والرياضي.
          </Text>

          {/* FEATURES */}
          <View className="mt-6 gap-3">
            {[
              "مقاومة للماء",
              "بطارية تدوم 7 أيام",
              "شحن سريع",
              "ضمان سنتين",
              "مقاومة للماء",
              "بطارية تدوم 7 أيام",
              "شحن سريع",
              "ضمان سنتين",
            ].map((item, i) => (
              <View
                key={i}
                className="flex-row items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl"
              >
                <Ionicons name="checkmark-circle" size={20} color="#22c55e" />
                <Text className="font-semibold text-gray-700">{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="h-20" />
      </Animated.ScrollView>

      {/* STICKY BUY BAR */}
      <View className="absolute bottom-12 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 flex-row items-center gap-4">
        <View>
          <Text className="text-xs text-gray-500">السعر</Text>
          <Text className="text-xl font-extrabold">249 $</Text>
        </View>

        <Pressable className="flex-1 bg-[#88c1c5] py-4 rounded-2xl active:scale-95">
          <Text className="text-white text-center font-extrabold text-lg">
            أضف إلى السلة
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
