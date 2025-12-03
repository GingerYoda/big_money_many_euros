import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet
} from "react-native";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.header} onPress={toggle}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.arrow}>{open ? "−" : "+"}</Text>
      </TouchableOpacity>

      {open && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden"
  },
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0"
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600"
  },
  arrow: {
    fontSize: 22,
    fontWeight: "600"
  },
  content: {
    padding: 12,
    backgroundColor: "#fff",
    gap: 10
  }
});
