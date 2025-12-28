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
    "https://i.pravatar.cc/300",
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
