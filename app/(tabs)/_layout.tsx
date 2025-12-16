import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
// import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Image, ImageSourcePropType, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// import { icons } from '@/constants';


type IconSymbolProps = {
  name: string;
  size?: number;
  color?: string;
};

export const IconSymbol = ({ name, size = 24, color = '#000' }: IconSymbolProps) => {
  return <Ionicons name={name as any} size={size} color={color} />;
};



export default function TabLayout() {



  const colorScheme = useColorScheme();




  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="home" color={color} />,
        }}
      />


      <Tabs.Screen
        name="categories"
        options={{
          title: "التصنيفات",
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="grid" color={color} />,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "السله",
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "المحفوظات",
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="heart" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'الحساب',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
