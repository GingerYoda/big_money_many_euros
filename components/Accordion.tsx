import React, { useState } from "react";
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager, } from "react-native";
import { styles } from '@/styles/styles'

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
    <View style={styles.accordionWrapper}>
      <TouchableOpacity style={styles.accordionHeader} onPress={toggle}>
        <Text style={styles.accordionHeaderText}>{title}</Text>
        <Text style={styles.accordionArrow}>{open ? "−" : "+"}</Text>
      </TouchableOpacity>

      {open && <View style={styles.accordionContent}>{children}</View>}
    </View>
  );
}

