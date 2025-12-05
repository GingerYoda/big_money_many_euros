import React, { useState } from "react";
import { View, Text, ScrollView, Image, Pressable, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeButton from '@/components/HomeButton';
import DonutProgress from '@/components/DonutProgress';
import Accordion from '@/components/Accordion';
import { styles } from '@/styles/styles';
import { colours } from '@/styles/colours';
import EntryModal from '@/components/EntryModal';
import NewEntryModal from '@/components/NewEntryModal';
import { sampleEntries } from '@/helpers/samples';



export default function DiaryView() {
  const totalPages = 1200;
  const friend_entries = []
  const diary_entries = sampleEntries.length;

  let initialPagesRead = sampleEntries.reduce((sum, x) => sum + x.endPage - x.startPage, 0);
  let initialProgress = initialPagesRead / totalPages * 100;
  let initialRating = sampleEntries.reduce((sum, x) => sum + (x.endPage - x.startPage)/totalPages* x.rating, 0);
  let initialRatingPercent = initialRating / 5 * 100;

  const [entryModalOpen, entryModalSetOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [newEntryModalOpen, setNewEntryModalOpen] = useState(false);

  const [entries, setEntries] = useState(sampleEntries);
  const [progress, setProgress] = useState(initialProgress);
  const [rating, setRating] = useState(initialRating);
  const [ratingPercent, setRatingPercent] = useState(initialRatingPercent);

  const handleSaveEntry = (newEntry) => {
    setEntries((prev) => {
        const updated = [...prev, newEntry];
        let readPages = updated.reduce((sum, x) => sum + x.endPage - x.startPage, 0);
        let newProgress = (readPages / totalPages) * 100;
        setProgress(newProgress);
        let newRating = updated.reduce((sum, x) => sum + x.rating, 0) / updated.length;
        setRating(newRating);
        let newRatingPercent = newRating / 5 * 100;
        setRatingPercent(newRatingPercent);
        return updated;
    })
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      {/* Top minimal navigation */}
      <View style={styles.topNav}>
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

      {/* timeline */}
      <View style ={styles.row}>
        <Text style={styles.sectionLabel}>Progress</Text>
         <Pressable style={[styles.button, {backgroundColor: colours.secondary}]} onPress={() => setNewEntryModalOpen(true)}>
           <View style={styles.row}>
             <Text style={styles.buttonText}>New Entry</Text>
             <Ionicons name="add" size={16} color="black" />
           </View >
        </Pressable>
      </View>
      <NewEntryModal visible={newEntryModalOpen}
                     onClose={() => setNewEntryModalOpen(false)}
                     onSave={handleSaveEntry}
                     />

      <View style={styles.timelineContainer}>
        {[...entries].map((item, i) => (
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
                       percent={ratingPercent}
                       value={rating}
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

