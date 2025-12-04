import React, { useState } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeButton from '@/components/HomeButton';
import DonutProgress from '@/components/DonutProgress';
import Accordion from '@/components/Accordion';
import { styles } from '@/styles/styles';
import EntryModal from '@/components/EntryModal';
import { sampleEntries } from '@/helpers/samples';


export default function DiaryView() {
  const totalPages = 1200;
  const friend_entries = []
  const diary_entries = sampleEntries.length;
  let read_pages = sampleEntries.reduce((sum, x) => sum + x.endPage - x.startPage, 0) 
  let progress = read_pages / totalPages * 100;

  let ratings_avg = sampleEntries.reduce((sum, x) => sum + x.rating, 0) / diary_entries;
  let ratings_percent = ratings_avg / 5 * 100;

  const [entryModalOpen, entryModalSetOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

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
        {sampleEntries.map((item, i) => (
          <Pressable key={i} style={[styles.timelineBar, { width: (item.endPage-item.startPage)/totalPages*100 + "%" }]}
          onPress={() => {
              entryModalSetOpen(true);
              setModalData({
                  startPage: item.startPage,
                  endPage: item.endPage,
                  rating: item.rating,
                  comment: item.comment,
              })
          }}>
            <View style={[styles.timelineFill, { height: item.rating/5*100+"%"}]} />
          </Pressable>
        ))}
        {modalData && (
            <EntryModal visible={entryModalOpen} onClose={() => entryModalSetOpen(false)}
            startPage={modalData.startPage}
            endPage={modalData.endPage}
            rating={modalData.rating}
            comment={modalData.comment}
            />
        )}
      </View>

      {/* Dashboard widgets */}
      <View style={styles.dashboardRow}>
        <View style={styles.widget}>
        <DonutProgress label="Progress"
                       percent={progress}
                       value={progress}
                       max={totalPages}/>
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
      {sampleEntries.map((e, i) => (
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

