import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "Bitter-Bold": require("../assets/fonts/Bitter-Bold.ttf"),
        "Bitter-ExtraBold": require("../assets/fonts/Bitter-ExtraBold.ttf"),
        "Bitter-Light": require("../assets/fonts/Bitter-Light.ttf"),
        "Bitter-Medium": require("../assets/fonts/Bitter-Medium.ttf"),
        "Bitter-Regular": require("../assets/fonts/Bitter-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
