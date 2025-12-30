import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SafeView from '@/components/SafeView'
 const user = {
  name: "أحمد محمد",
  email: "ahmed@email.com",
  phone: "+966 55 123 4567",
  avatar:
    "data:image/jpeg;base64,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",
};

const menuItems = [
  {
    title: "طلباتي",
    icon: "receipt-outline",
    route: "/(order)/orders",
  },
  {
    title: "المفضلة",
    icon: "heart-outline",
    route: "/favorites",
  },
  {
    title: "العناوين",
    icon: "location-outline",
    route: "/addresses",
  },
  {
    title: "طرق الدفع",
    icon: "card-outline",
    route: "/payments",
  },
  {
    title: "الإعدادات",
    icon: "settings-outline",
    route: "/settings",
  },
];

export default function ProfileScreen() {
  return (
    <SafeView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-8 pb-6">
          <Text
            className="text-2xl font-extrabold text-neutral-900 dark:text-white"
            style={{ writingDirection: "rtl" }}
          >
            حسابي
          </Text>
        </View>

        {/* User Card */}
        <View className="mx-6 bg-white dark:bg-neutral-800 rounded-3xl p-5 shadow-sm flex-row items-center">
          <Image
            source={{ uri: user.avatar }}
            className="w-20 h-20 rounded-full"
          />

          <View className="flex-1 mx-4">
            <Text
              className="text-lg font-bold text-neutral-900 dark:text-white"
              style={{ writingDirection: "rtl" }}
            >
              {user.name}
            </Text>

            <Text className="text-neutral-500 dark:text-neutral-400 mt-1">
              {user.email}
            </Text>
          </View>

          <TouchableOpacity className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-full">
            <Ionicons name="pencil" size={18} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Info */}
        <View className="mx-6 mt-6 bg-white dark:bg-neutral-800 rounded-3xl p-5">
          <ProfileRow label="رقم الهاتف" value={user.phone} />
          <ProfileRow label="البريد الإلكتروني" value={user.email} />
        </View>

        {/* Menu */}
        <View className="mx-6 mt-6 bg-white dark:bg-neutral-800 rounded-3xl overflow-hidden">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center px-5 py-4 border-b border-neutral-200 dark:border-neutral-700"
            >
              <Ionicons
                name={item.icon as any}
                size={22}
                color="#88c1c5"
              />

              <Text
                className="flex-1 mx-4 text-base font-medium text-neutral-900 dark:text-white"
                style={{ writingDirection: "rtl" }}
              >
                {item.title}
              </Text>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <View className="mx-6 mt-10 mb-20">
          <TouchableOpacity className="bg-red-500 rounded-2xl py-4">
            <Text
              className="text-center text-white font-extrabold text-lg"
              style={{ writingDirection: "rtl" }}
            >
              تسجيل الخروج
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeView>
  );
}

/* ---------------- Reusable Row ---------------- */

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between py-3">
      <Text
        className="text-neutral-500 dark:text-neutral-400"
        style={{ writingDirection: "rtl" }}
      >
        {label}
      </Text>

      <Text className="font-semibold text-neutral-900 dark:text-white">
        {value}
      </Text>
    </View>
  );
}
