import { Stack } from "expo-router";

export default function Layout() {
  return (
      <Stack
      style={{backgroundColor:"blue"}}
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