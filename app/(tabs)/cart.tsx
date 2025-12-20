// import { icons } from "@/constants";
// import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const cartItems = [
//   {
//     id: 1,
//     title: "Minimal Leather Backpack",
//     price: 129.99,
//     image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     title: "Premium Headphones",
//     price: 199.99,
//     image: "https://images.unsplash.com/photo-1518441902113-f3bca6d1f4b7",
//     quantity: 2,
//   },
// ];

// export default function CartScreen() {
//   return (
//     <View className="flex-1 bg-neutral-50 dark:bg-neutral-900">
//       {/* Header */}
//       <View className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
//         <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
//           Your Cart
//         </Text>
//         <Text className="text-neutral-500 dark:text-neutral-400 mt-1">
//           Review your selected items
//         </Text>
//       </View>

//       {/* Cart Items */}
//       <ScrollView
//         className="flex-1 px-6 pt-6"
//         showsVerticalScrollIndicator={false}
//       >
//         {cartItems.map((item) => (
//           <View
//             key={item.id}
//             className="flex-row bg-white dark:bg-neutral-800 rounded-2xl mb-5 shadow-sm overflow-hidden"
//           >
//             {/* Image */}
//             <Image
//               source={{ uri: item.image }}
//               className="w-28 h-28"
//               resizeMode="cover"
//             />

//             {/* Info */}
//             <View className="flex-1 p-4 justify-between">
//               <View>
//                 <Text
//                   numberOfLines={2}
//                   className="text-base font-semibold text-neutral-900 dark:text-white"
//                 >
//                   {item.title}
//                 </Text>

//                 <Text className="text-lg font-bold text-neutral-900 dark:text-white mt-1">
//                   ${item.price.toFixed(2)}
//                 </Text>
//               </View>

//               {/* Actions */}
//               <View className="flex-row items-center justify-between mt-3">
//                 {/* Quantity */}
//                 <View className="flex-row items-center bg-neutral-100 dark:bg-neutral-700 rounded-full px-3 py-1">
//                   <TouchableOpacity>
//                     <Image source={icons.minus}  />
//                   </TouchableOpacity>

//                   <Text className="mx-3 font-semibold text-neutral-900 dark:text-white">
//                     {item.quantity}
//                   </Text>

//                   <TouchableOpacity>
//                     <Image source={icons.plus}  />
//                   </TouchableOpacity>
//                 </View>

//                 {/* Remove */}
//                 <TouchableOpacity className="p-2">
//                   <Image source={icons.trash}  />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         ))}

//         {/* Order Summary */}
//         <View className="bg-white dark:bg-neutral-800 rounded-2xl p-5 mb-32 shadow-sm">
//           <Text className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
//             Order Summary
//           </Text>

//           <View className="flex-row justify-between mb-2">
//             <Text className="text-neutral-500 dark:text-neutral-400">
//               Subtotal
//             </Text>
//             <Text className="font-medium text-neutral-900 dark:text-white">
//               $529.97
//             </Text>
//           </View>

//           <View className="flex-row justify-between mb-2">
//             <Text className="text-neutral-500 dark:text-neutral-400">
//               Shipping
//             </Text>
//             <Text className="font-medium text-neutral-900 dark:text-white">
//               $12.00
//             </Text>
//           </View>

//           <View className="flex-row justify-between border-t border-neutral-200 dark:border-neutral-700 pt-3 mt-3">
//             <Text className="text-base font-bold text-neutral-900 dark:text-white">
//               Total
//             </Text>
//             <Text className="text-xl font-extrabold text-neutral-900 dark:text-white">
//               $541.97
//             </Text>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Checkout Bar */}
//       <View className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
//         <TouchableOpacity className="bg-black dark:bg-white rounded-2xl py-4">
//           <Text className="text-center text-white dark:text-black text-lg font-bold">
//             Proceed to Checkout
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }





// import { View, Text, Image, ScrollView, TouchableOpacity, I18nManager, SafeAreaView } from "react-native";

// // تفعيل RTL (يفضل مرة واحدة عند بداية التطبيق)
// I18nManager.allowRTL(true);
// I18nManager.forceRTL(true);

// const cartItems = [
//   {
//     id: 1,
//     name: "حقيبة جلدية فاخرة",
//     price: 129.99,
//     image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "سماعات احترافية",
//     price: 199.99,
//     image: "https://images.unsplash.com/photo-1518441902113-f3bca6d1f4b7",
//     quantity: 2,
//   },
// ];

// export default function CartScreen() {
//   return (
//     <SafeAreaView className="flex-1 bg-neutral-50 dark:bg-neutral-900 py-12 pb-20 ">
//       {/* Header */}
//       <View className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
//         <Text className="text-2xl font-extrabold text-neutral-900 dark:text-white text-right">
//           سلة التسوق
//         </Text>
//         <Text className="text-neutral-500 dark:text-neutral-400 mt-1 text-right">
//           راجع المنتجات قبل إتمام الشراء
//         </Text>
//       </View>

//       {/* Items */}
//       <ScrollView
//         className="flex-1 px-6 pt-6"
//         showsVerticalScrollIndicator={false}
//       >
//         {cartItems.map((item) => (
//           <View
//             key={item.id}
//             className="flex-row-reverse bg-white dark:bg-neutral-800 rounded-2xl mb-5 shadow-sm overflow-hidden"
//           >
//             {/* Image */}
//             <Image
//               source={{ uri: item.image }}
//               className="w-28 h-28"
//               resizeMode="cover"
//             />

//             {/* Info */}
//             <View className="flex-1 p-4 justify-between">
//               <View>
//                 <Text
//                   numberOfLines={2}
//                   className="text-base font-semibold text-neutral-900 dark:text-white text-right"
//                 >
//                   {item.name}
//                 </Text>

//                 <Text className="text-lg font-bold text-neutral-900 dark:text-white mt-1 text-right">
//                   {item.price.toFixed(2)} $
//                 </Text>
//               </View>

//               {/* Quantity */}
//               <View className="flex-row-reverse items-center justify-between mt-3">
//                 <View className="flex-row items-center bg-neutral-100 dark:bg-neutral-700 rounded-full px-4 py-1">
//                   <TouchableOpacity>
//                     <Text className="text-lg font-bold">+</Text>
//                   </TouchableOpacity>

//                   <Text className="mx-4 font-semibold text-neutral-900 dark:text-white">
//                     {item.quantity}
//                   </Text>

//                   <TouchableOpacity>
//                     <Text className="text-lg font-bold">−</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <TouchableOpacity>
//                   <Text className="text-red-500 font-medium">حذف</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         ))}

//         {/* Summary */}
//         <View className="bg-white dark:bg-neutral-800 rounded-2xl p-5 mb-32 shadow-sm">
//           <Text className="text-lg font-extrabold text-neutral-900 dark:text-white mb-4 text-right">
//             ملخص الطلب
//           </Text>

//           <View className="flex-row-reverse justify-between mb-2">
//             <Text className="text-neutral-500 dark:text-neutral-400">
//               المجموع الفرعي
//             </Text>
//             <Text className="font-medium text-neutral-900 dark:text-white">
//               529.97 $
//             </Text>
//           </View>

//           <View className="flex-row-reverse justify-between mb-2">
//             <Text className="text-neutral-500 dark:text-neutral-400">
//               الشحن
//             </Text>
//             <Text className="font-medium text-neutral-900 dark:text-white">
//               12.00 $
//             </Text>
//           </View>

//           <View className="flex-row-reverse justify-between border-t border-neutral-200 dark:border-neutral-700 pt-3 mt-3">
//             <Text className="text-base font-bold text-neutral-900 dark:text-white">
//               الإجمالي
//             </Text>
//             <Text className="text-xl font-extrabold text-neutral-900 dark:text-white">
//               541.97 $
//             </Text>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Checkout */}
//       <View className="px-6 py-12 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
//         <TouchableOpacity className="bg-black dark:bg-white rounded-2xl py-4">
//           <Text className="text-center text-white dark:text-black text-lg font-extrabold">
//             إتمام الشراء
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }



import { useCartStore } from "@/store/cartStore";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import SafeView from "@/components/SafeView";
// const cartItems = [
//   {
//     id: 1,
//     name: "حقيبة جلدية فاخرة",
//     price: 129.99,
//     image: "data:image/jpeg;base64,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",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "سماعات احترافية",
//     price: 199.99,
//     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhAPEBIQDxAXFRYVEhAQEhAPFRcVFhUWFhUVFhcYHSggGRolGxUVITEhJSkrLi4vFyAzODMuNygtLisBCgoKDg0OGhAQGjYmHyUrLS03LS01LS8tLzUtKysvLS8tNy0rNzUrListLS0rKy8tLS0tLy0tLSstNSwtLS0tLf/AABEIAPsAyAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAUGAwj/xABOEAABAwIDBAYECAcOBwAAAAABAAIDBBESITEFBkFRBxMiYXGBFDKRsSNCUnKSocHRCDNigrKz8BUWJCVDU2SDoqPC0uHxFzQ1VHOTlP/EABkBAQADAQEAAAAAAAAAAAAAAAABAwUCBP/EACcRAQACAgEDAwMFAAAAAAAAAAABAgMRBBIhMQUT4UJRoRUyQWGR/9oADAMBAAIRAxEAPwCakREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEWp2/vLR0LQ+sqI4Li7WuJL3Aa4WNu53kFzkHS5shzsPpL252xPgnDfM4cvNB3KLG2dtCGoYJaeWOeM6Pie2Rt+IuOPcslAREQEREBERAREQEREBERAREQEREBERAREQFGfTJvy+hYylppTDUyNx9Y1jZHBt7ADEQGXs7tWJFhYZ3EmL50/CEH8ZRn+jRfpzfcg43arnz3rnTyVbsXwxmxNlZ2yItXHE0tA9UnDobZE6SZ9yTcm5vc6nvPeths93wVW3nEw+YqIh7nFe2wqOGRz+vcA0MJF+t1uM7sDi23PC7XTkHnu3vHU0EonpJXROyxN1Y8D4r26OGvhwsV9O7g76w7TpuvFopWkNniJya86FpOrTw9i+V6mna1xaDiAOThcg+BIB9oCsYxxtG25DnA4eBIBsfIEoPtRF8wbhdIFXs2WOOV75qK4EkDyXYW6Yor+q4chkdDzH05DK17WvYQ5jgHNcNC0i4I8igvREQEREBERAREQEREBERARFg7b2rFSQS1U7sMUbcTjxPANHNxJAA5kIL9qbThpo3T1MrIIm6vebDuA5k8AMyos2506QsNqOlfUNuR1sz+oBIt6rAHOIzG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",
//     quantity: 2,
//   }
// ];

export default function CartScreen() {

  const {
    items: cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    subtotal,
  } = useCartStore();

  const shipping = cartItems.length > 0 ? 12 : 0
  const total = subtotal() + shipping


  return (
    <SafeView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <View className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
        <Text
          className="text-2xl font-extrabold text-neutral-900 dark:text-white "
          style={{ writingDirection: "rtl" }}
        >
          سلة التسوق
        </Text>
        <Text
          className="text-neutral-500 dark:text-neutral-400 mt-1 "
          style={{ writingDirection: "rtl" }}
        >
          راجع المنتجات قبل إتمام الشراء
        </Text>
      </View>

      {/* Items */}
      <ScrollView
        className="flex-1 px-6 pt-6"
        showsVerticalScrollIndicator={false}
      >
        {cartItems.map((item, i) => (
          <View
            key={i}
            className="flex flex-row bg-white dark:bg-neutral-800 rounded-2xl mb-5 shadow-sm overflow-hidden"
          >
            {/* Image */}
            <Image
              source={{ uri: item.image }}
              className="w-28 h-28"
              resizeMode="cover"
            />

            {/* Info */}
            <View className="flex-1 p-4 justify-between">
              <View>
                <Text
                  numberOfLines={2}
                  className="text-base font-semibold text-neutral-900 dark:text-white"
                  style={{ writingDirection: "rtl" }}
                >
                  {item.name}
                </Text>

                <Text className="text-lg font-bold text-neutral-900 dark:text-white mt-1">
                  {/* {item.price.toFixed(2)} $ */}
                </Text>
              </View>

              {/* Quantity */}
              <View className="flex flex-row items-center justify-between mt-3">
                <View className="flex flex-row items-center bg-neutral-100 dark:bg-neutral-700 rounded-full px-4 py-1">
                  <TouchableOpacity onPress={() => increaseQty(item.id)}>
                    <Text className="text-2xl font-bold">+</Text>
                  </TouchableOpacity>

                  <Text className="mx-4 font-semibold text-neutral-900 dark:text-white">
                    {item.quantity}
                  </Text>

                  <TouchableOpacity onPress={() => decreaseQty(item.id)}>
                    <Text className="text-2xl font-bold">−</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Text
                    className="text-red-500 font-medium"
                    style={{ writingDirection: "rtl" }}
                  >
                    حذف
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Summary */}
        <View className="bg-white dark:bg-neutral-800 rounded-2xl p-5 shadow-sm">
          <Text
            className="text-lg font-extrabold text-neutral-900 dark:text-white mb-4"
            style={{ writingDirection: "rtl" }}
          >
            ملخص الطلب
          </Text>

          <View className="flex flex-row justify-between mb-2">
            <Text
              className="text-neutral-500 dark:text-neutral-400"
              style={{ writingDirection: "rtl" }}
            >
              المجموع الفرعي
            </Text>
            <Text className="font-medium text-neutral-900 dark:text-white">
              {total.toFixed(2)} $
            </Text>
          </View>

          <View className="flex flex-row justify-between mb-2">
            <Text
              className="text-neutral-500 dark:text-neutral-400"
              style={{ writingDirection: "rtl" }}
            >
              الشحن
            </Text>
            <Text className="font-medium text-neutral-900 dark:text-white">
              {shipping.toFixed(2)} $
            </Text>
          </View>

          <View className="flex flex-row justify-between border-t border-neutral-200 dark:border-neutral-700 pt-3 mt-3">
            <Text
              className="text-base font-bold text-neutral-900 dark:text-white"
              style={{ writingDirection: "rtl" }}
            >
              الإجمالي
            </Text>
            <Text className="text-xl font-extrabold text-neutral-900 dark:text-white">
              {(total + shipping).toFixed(2)} $
            </Text>
          </View>
        </View>



        <View className="  px-6 py-6 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 mb-[80px]">
          <TouchableOpacity className="bg-black dark:bg-white rounded-2xl py-4">
            <Text
              className="text-center text-white dark:text-black text-lg font-extrabold"
              style={{ writingDirection: "rtl" }}
            >
              إتمام الشراء
            </Text>
          </TouchableOpacity>
        </View>


      </ScrollView>

      {/* Checkout */}

    </SafeView>
  );
}
