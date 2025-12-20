// import { Tabs } from 'expo-router';
// import React from 'react';

// import { HapticTab } from '@/components/haptic-tab';
// // import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';
// import { Image, ImageSourcePropType, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';

// // import { icons } from '@/constants';


// type IconSymbolProps = {
//   name: string;
//   size?: number;
//   color?: string;
// };

// export const IconSymbol = ({ name, size = 24, color = '#000' }: IconSymbolProps) => {
//   return <Ionicons name={name as any} size={size} color={color} />;
// };



// export default function TabLayout() {



//   const colorScheme = useColorScheme();




//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//       }}>
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: 'الرئيسية',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="home" color={color} />,
//         }}
//       />


//       <Tabs.Screen
//         name="categories"
//         options={{
//           title: "التصنيفات",
//           headerShown: false,
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="grid" color={color} />,
//         }}
//       />

//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: "السله",
//           headerShown: false,
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="wishlist"
//         options={{
//           title: "المحفوظات",
//           headerShown: false,
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="heart" color={color} />,
//         }}
//       />

//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'الحساب',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { HapticTab } from '@/components/haptic-tab';

// --- Rounded Icon Component ---
type TabBarIconProps = {
  name: string;
  focused: boolean;
  color: string;
};

const TabBarIcon = ({ name, focused, color }: TabBarIconProps) => {
  return (
    <View style={[styles.iconContainer, focused && styles.iconFocused]}>
      <Ionicons
        name={name as any}
        size={23}
        color={focused ? '#fff' : color}
      />
    </View>
  );
};

// --- Main Tab Layout ---
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="home" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: 'التصنيفات',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="grid" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'السله',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="cart" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'المحفوظات',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="heart" focused={focused} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'الحساب',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon name="person" focused={focused} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    paddingTop: 3,
    paddingBottom: 2,
    bottom: 35,
    left: 16,
    right: 16,
    height: 70, padding: 0,
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
    borderTopWidth: 0, // remove default top border
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    marginBottom: 2,
  },
  iconFocused: {
    backgroundColor: '#88c1c5',
    shadowColor: '#88c1c5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
});
