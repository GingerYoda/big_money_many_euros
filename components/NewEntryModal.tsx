import React, { useState } from "react";
import { colours } from '@/styles/colours'
import { styles } from '@/styles/styles'
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";

export default function NewEntryModal({ visible, onClose, onSave }) {
  const [startPage, setStartPage] = useState("");
  const [endPage, setEndPage] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSave = () => {
    const entry = {
      startPage: Number(startPage),
      endPage: Number(endPage),
      rating: Number(rating),
      comment,
    };

    onSave(entry);    // ← send to parent
    onClose();        // ← close modal
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
    {/*Background*/}
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
        onPress={onClose}
      >
    {/*Actual modal*/}
        <Pressable
          style={{
            backgroundColor: colours.bg,
            padding: 20,
            borderRadius: 12,
            minWidth: 220,
            elevation: 4,
          }}
          onPress={(e) => e.stopPropagation()} // prevent closing when clicking content
        >
         {/* --- CONTENT STACK --- */}
          <TextInput
            placeholder="Start Page"
            keyboardType="numeric"
            style={styles.input}
            value={startPage}
            onChangeText={setStartPage}
          />

          <TextInput
            placeholder="End Page"
            keyboardType="numeric"
            style={styles.input}
            value={endPage}
            onChangeText={setEndPage}
          />

          <TextInput
            placeholder="Rating (0-5)"
            keyboardType="numeric"
            style={styles.input}
            value={rating}
            onChangeText={setRating}
          />

          <TextInput
            placeholder="Comment"
            style={[styles.input, { height: 80 }]}
            multiline
            value={comment}
            onChangeText={setComment}
          />

          {/* Buttons */}
          <View style={styles.row}>
            <Pressable
              style={[styles.buttonSmall, { backgroundColor: colours.bg2, marginTop: 10 }]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>

            <Pressable
              style={[styles.buttonSmall, { backgroundColor: colours.secondary, marginTop: 10 }]}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
