import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeButton from '@/components/HomeButton';
import DonutProgress from '@/components/DonutProgress';

export default function DiaryView() {
  const total_pages = 1200;
  const entry_pages = [10, 20, 120, 30, 40, 50, 80, 100, 10, 20, 120, 30, 40, 50, 80, 100];
  const entry_reaction = [5, 2, 3, 3, 5, 2, 4, 5, 5, 5, 3, 1, 5, 5, 4, 5];
  const diary_entries = entry_pages.length;
  let read_pages = entry_pages.reduce(function (x,y) {return x + y;}, 0) 
  let progress = read_pages / total_pages * 100;

  let ratings_avg = entry_reaction.reduce((x,y) => x + y, 0) / diary_entries;
  let ratings_percent = ratings_avg / 5 * 100;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {/* Top minimal navigation */}
      <View style={styles.topNav}>
      {/*<Ionicons name="home" size={32} color="green" />*/}
        <HomeButton />
      </View>

      {/* Book header */}
      <View style={styles.header}>
        {/* Book cover placeholder */}
        <View style={styles.coverPlaceholder}>
          <Image
            style={styles.image}
            source={require("../../assets/images/cover_The-Lord-of-the-Rings.jpg")}
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
        {entry_pages.map((item, i) => (
          <Pressable key={i} style={[styles.timelineBar, { width: entry_pages[i]/total_pages*100 + "%" }]}>
            <View style={[styles.timelineFill, { height: entry_reaction[i]/5*100+"%"}]} />
          </Pressable>
        ))}
      </View>

      {/* Dashboard widgets */}
      <View style={styles.dashboardRow}>
        <View style={styles.widget}>
        <DonutProgress label="Progress"
                       percent={progress}
                       value={progress}
                       max={total_pages}/>
        </View>

        <View style={styles.widget}>
        <DonutProgress label="avg.rating"
                       mode="rating"
                       percent={ratings_percent}
                       value={ratings_avg}
                       max={5}/>
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
    gap: 1,
    marginBottom: 30,
    width: '100%',
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 18,
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
