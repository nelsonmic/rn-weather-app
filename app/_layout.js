import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {
      const [fontsLoaded] = useFonts({
            Raleway: require("../assets/fonts/Raleway/static/Raleway-Regular.ttf")
          });
        
          if (!fontsLoaded) {
            return null;
          }
      return (
            <Stack
                  screenOptions={{
                        headerStyle: {
                        backgroundColor: "#1E213A",
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                        },
                        headerShadowVisible: false,
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                        fontWeight: "bold",
                  },
            }}>
            <Stack.Screen
            name="search"
            options={{
            presentation: "modal",
            headerShown: false
            }}
            />
      </Stack>
      )
}