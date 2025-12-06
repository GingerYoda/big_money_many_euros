import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView, } from 'react-native-gesture-handler';
import { styles } from '@/styles/styles';
import { colours } from '@/styles/colours';

export default function VotingView() {
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);
  let alpha = useSharedValue(0.0);

  const [hlColour, setHlColour] = useState("rgba(0, 0, 0, 0.0)");
  const [voting, setVoting] = useState(true);

  const red = 'rgba(255, 0, 0, 0.3)';
  const green = 'rgba(0, 255, 0, 0.3)';

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = event.translationX;
      alpha = Math.abs(event.translationX) % 255 / 255;
      event.translationX < 0.0 ? setHlColour(red) : setHlColour(green);
    })
    .onFinalize(() => {
      if (Math.abs(offset.value) > 200) {
          setVoting(false);
      }
      else {
          offset.value = withSpring(0);
          pressed.value = false;
          setHlColour("rgba(0, 0, 0, 0.0)");
      }
    });

  const animatedStyles = useAnimatedStyle(() => ({
      transform: [
          { translateX: offset.value },
          { scale: withTiming(pressed.value ? 1.2 : 1) },
      ],
  }));

  return (
      voting &&
    <GestureHandlerRootView style={localstyles.container}>
      <View style={styles.votingHeader}>
      <Text style={styles.bookTitle}> Hello mom </Text>
      <Text> Voted items 4/5 </Text>
      </View>
      <View style={localstyles.container}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[localstyles.card, animatedStyles]}>
            <View style={localstyles.coverPlaceholder}>
              <Image
                style={localstyles.card}
                source={require("../../assets/images/cover_The-Lord-of-the-Rings.jpg")}
                resizeMode="contain"
              />
              <View style={[localstyles.overlay, { backgroundColor: hlColour}]}/>
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const cardWidth = 200;
const cardHeight = cardWidth * 1.4;
const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  card: {
    position: 'absolute',
    height: cardHeight,
    width: cardWidth,
    borderRadius: 10,
    cursor: 'grab',
    marginBottom: 50,
  },
  overlay: {
    position: 'absolute',
    height: cardHeight,
    width: cardWidth,
    borderRadius: 10,
  }
});
