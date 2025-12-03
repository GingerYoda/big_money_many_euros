import { Text, View, Button } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello mum.</Text>
      <Button
        title="Go to ass"
        onPress={() => navigation.navigate('LandingPage')}
      />
    </View>
  );
}
