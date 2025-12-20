import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "@/global.css"

import { useColorScheme } from '@/hooks/use-color-scheme';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  I18nManager.allowRTL(true);
  

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
        {/* <Stack.Screen name="products" options={{ headerShown: false }} /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
    </SafeAreaProvider>
  );
}
