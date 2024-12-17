import { Slot } from 'expo-router';
import AuthProvider from '../contexts/auth-provider';
import { I18nextProvider } from 'react-i18next';
import i18n from '@translations/i18n';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ThemeProvider from '@contexts/theme-provider';
import '../unistyles';
import { Header } from '@components/molecules';
import { Icon } from '@components/atoms';
import { spacings } from '@design/spacings';
import { View } from 'react-native';
import { colors } from '@design/colors';
import { QueryClientProvider } from '@contexts/query-client.context';

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider>
            <AuthProvider>
              <SafeAreaProvider>
                <View
                  style={{
                    backgroundColor: colors.background,
                    height: '100%',
                  }}
                >
                  <Header
                    avatar="https://i.pinimg.com/564x/ec/b3/d1/ecb3d1d08927b6cec14f34b4e3b19d2b.jpg"
                    sideElements={<Icon name="search" />}
                    style={{
                      paddingHorizontal: spacings.regular,
                      position: 'absolute',
                      top: insets.top + spacings.small,
                      zIndex: 1,
                    }}
                  />

                  <Slot />
                </View>
              </SafeAreaProvider>
            </AuthProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
