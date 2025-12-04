import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeButton from '@/components/HomeButton';
import DonutProgress from '@/components/DonutProgress';
import Accordion from '@/components/Accordion';
import { styles } from '@/styles/styles'

export default function DiaryView() {
  const total_pages = 1200;
  const entry_pages = [10, 20, 120, 30, 40, 50, 80, 100, 10, 20, 120, 30, 40, 50, 80, 100];
  const entry_reaction = [5, 2, 3, 3, 5, 2, 4, 5, 5, 5, 3, 1, 5, 5, 4, 5];
  const friend_entries = []
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

      {/* USER ENTRY HISTORY */}
      <Accordion title="Own latest entries">
      {entry_pages.map((e, i) => (
          <View key={i} style={styles.accordion} >
              <Text>Entry #{i + 1}</Text>
          </View>
      ))}
      </Accordion>

      {/* SHARED FRIEND ACTIVITY */}
      <Accordion title="Shared friend activity">
      {friend_entries.map((f, i) => (
          <View key={i} style={accordion}>
              <Text>{f.friendName}</Text>
              <Text>Entry: {f.title}</Text>
          </View>
      ))}
      </Accordion>

      {/* Bottom spacing */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

