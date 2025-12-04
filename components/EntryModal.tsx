import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import { colours } from '@/styles/colours'

export default function EntryModal({ visible, onClose, startPage, endPage, rating, comment }) {
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
          <Text style={{ fontSize: 16, marginBottom: 8 }}>
            <Text style={{ fontWeight: "bold" }}>Pages:</Text> {startPage}–{endPage}
          </Text>

          <Text style={{ fontSize: 16, marginBottom: 8 }}>
            <Text style={{ fontWeight: "bold" }}>Rating:</Text> {rating}
          </Text>

          <Text style={{ fontSize: 16 }}>
            <Text style={{ fontWeight: "bold" }}>Comment:</Text> {comment}
          </Text>
         {/* --- Button --- */}
          <Pressable
            style={{
              marginTop: 15,
              padding: 10,
              backgroundColor: colours.primary,
              borderRadius: 8,
              alignSelf: "center",
            }}
            onPress={onClose}
          >
            <Text>Close</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
