import React from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type Props = {
    label: string;
    percent: number;
    value: number;
    max: number
    mode: "percent"
};

export default function DonutProgress({label, percent, value, max, mode}: Props) {
  return (
    <View style={{ alignItems: "center" }}>
      <AnimatedCircularProgress
        size={120}
        width={14}
        fill={percent}               
        tintColor="#4c8bf5"
        backgroundColor="#e0e0e0"
        rotation={0}
        lineCap="round"
        duration={800}
      >
        {fill => (
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            {mode === "rating" ? value.toFixed(1) : Math.round(fill)+"%"}
          </Text>
        )}
      </AnimatedCircularProgress>

      <Text style={{ marginTop: 10 }}>{label}</Text>
    </View>
  );
}
