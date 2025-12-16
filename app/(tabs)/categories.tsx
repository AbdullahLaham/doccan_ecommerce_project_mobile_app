import { View, Text, FlatList, TouchableOpacity } from "react-native";

const categories = [
  {
    id: "1",
    title: "إلكترونيات",
    count: 24,
    icon: "📱",
  },
  {
    id: "2",
    title: "أزياء",
    count: 45,
    icon: "👗",
  },
  {
    id: "3",
    title: "تجميل",
    count: 18,
    icon: "💄",
  },
  {
    id: "4",
    title: "رياضة",
    count: 12,
    icon: "⚽",
  },
  {
    id: "5",
    title: "ألعاب",
    count: 10,
    icon: "🧸",
  },
  {
    id: "6",
    title: "اكسسوارات",
    count: 10,
    icon: "⌚",
  },
   {
    id: "7",
    title: "ألعاب",
    count: 10,
    icon: "🧸",
  },
  {
    id: "8",
    title: "رياضة",
    count: 12,
    icon: "⚽",
  },
];

export default function CategoriesScreen() {
  return (
    <View className="flex-1 bg-[#F4FAFF] px-4 pt-12">
      {/* Header */}
      <Text className="text-2xl font-bold text-gray-600 text-center mb-6 ">
        التصنيفات
      </Text>

      {/* Grid */}
      <View className="py-3 flex-1">
        <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white w-[48%] mb-4 rounded-2xl p-4 shadow-lg shadow-black "
          >
            <View className="items-center">
              {/* Icon Text */}
              <View className="w-16 h-16 rounded-full bg-[#EAF6FF] items-center justify-center mb-3">
                <Text className="text-3xl">
                  {item.icon}
                </Text>
              </View>

              <Text className="text-base font-semibold">
                {item.title}
              </Text>

              <Text className="text-gray-400 text-sm mt-1">
                {item.count} منتج
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
    </View>
  );
}
