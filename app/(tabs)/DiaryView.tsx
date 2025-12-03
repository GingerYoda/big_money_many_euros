import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";


export default function DiaryView() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {/* Top minimal navigation */}
      <View style={styles.topNav}>
        <View style={styles.navIcon} />
      </View>

      {/* Book header */}
      <View style={styles.header}>
        {/* Book cover placeholder */}
        <View style={styles.coverPlaceholder}>
          <Image
            style={styles.image}
            source={require("../../assets/images/cover_The-Lord-of-the-Rings.jpg")}
            //placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.bookTitle}>The Lord Of The Rings</Text>
          <Text style={styles.author}>J.R.R Tolkien</Text>
        </View>

      </View>

      {/* Progress timeline */}
      <Text style={styles.sectionLabel}>Progress</Text>
      <View style={styles.timelineContainer}>
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <TouchableOpacity key={i} style={styles.timelineBar}>
            <View style={[styles.timelineFill, { height: 20 + i * 8 }]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Dashboard widgets */}
      <View style={styles.dashboardRow}>
        <View style={styles.widget}>
          <Text style={styles.widgetLabel}>Progress</Text>
          <View style={styles.donut} />
        </View>

        <View style={styles.widget}>
          <Text style={styles.widgetLabel}>Avg. Score</Text>
          <View style={styles.donut} />
        </View>
      </View>

      {/* User entries */}
      <View style={styles.sectionBox}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Own latest entries</Text>
          <Text style={styles.plus}>+</Text>
        </View>

        {[1, 2, 3].map((i) => (
          <View key={i} style={styles.entryRow}>
            <View style={styles.entryLine} />
          </View>
        ))}
      </View>

      {/* Friend activity */}
      <View style={styles.sectionBox}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shared friend activity</Text>
          <Text style={styles.plus}>+</Text>
        </View>

        {[1, 2].map((i) => (
          <View key={i} style={styles.entryRow}>
            <View style={styles.entryLine} />
          </View>
        ))}
      </View>

      {/* Bottom spacing */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
  },

  /* --- Header --- */
  topNav: {
    height: 40,
    justifyContent: "center",
  },
  navIcon: {
    width: 25,
    height: 25,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#333",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center"
  },
  author: {
    fontSize: 14,
    marginTop: 5,
    opacity: 0.7,
    textAlign: "center"
  },
  coverPlaceholder: {
    width: 210,
    height: 297,
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
  },

  /* --- Timeline --- */
  sectionLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  timelineContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 30,
  },
  timelineBar: {
    width: 20,
    height: 90,
    borderWidth: 1,
    borderColor: "#aaa",
    justifyContent: "flex-end",
  },
  timelineFill: {
    backgroundColor: "#bbb",
    width: "100%",
  },

  /* --- Dashboard widgets --- */
  dashboardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 35,
  },
  widget: {
    width: "48%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
  },
  widgetLabel: {
    marginBottom: 10,
    fontWeight: "500",
  },
  donut: {
    width: 70,
    height: 70,
    borderWidth: 12,
    borderColor: "#ddd",
    borderRadius: 40,
  },

  /* --- Entry sections --- */
  sectionBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: "600",
  },
  plus: {
    fontSize: 22,
    fontWeight: "600",
  },
  entryRow: {
    paddingVertical: 10,
  },
  entryLine: {
    height: 28,
    backgroundColor: "#eee",
    borderRadius: 6,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
