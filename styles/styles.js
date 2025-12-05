import { StyleSheet } from "react-native";
import { colours } from "./colours"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.bg,
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
    borderWidth: 1,
    borderColor: colours.border,
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
    backgroundColor: colours.primary,
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 6,
  },

  /* --- Timeline --- */
  sectionLabel: {
    fontSize: 16,
    fontWeight: "600",
    borderColor: colours.border,
    backgroundColor: colours.primary,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1
  },
  timelineContainer: {
    flexDirection: "row",
    gap: 1,
    marginBottom: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: colours.border,
    backgroundColor: colours.primary,
    borderRadius: 10,
  },
  timelineBar: {
    width: 20,
    height: 90,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colours.border,
    justifyContent: "flex-end",
  },
  timelineFill: {
    backgroundColor: colours.secondary,
    borderRadius: 10,
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
    borderColor: colours.border,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: colours.primary,
  },
  widgetLabel: {
    marginBottom: 10,
    fontWeight: "600",
  },
  donut: {
    width: 70,
    height: 70,
    borderWidth: 12,
    borderColor: colours.border,
    borderRadius: 40,
  },

  /* --- Entry sections --- */
  sectionBox: {
    borderWidth: 1,
    borderColor: colours.border,
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
    backgroundColor: colours.primary,
    borderRadius: 6,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: colours.primary,
  },
  /* --- Accordion --- */
  accordion: {
      paddingVertical: 8,
      backgroundColor: colours.primary,
      borderRadius: 6
  },

  accordionWrapper: {
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden"
  },
  accordionHeader: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colours.primary
  },
  accordionHeaderText: {
    fontSize: 16,
    fontWeight: "600"
  },
  accordionArrow: {
    fontSize: 22,
    fontWeight: "600"
  },
  accordionContent: {
    padding: 12,
    backgroundColor: colours.bg,
    gap: 10
  },
  button: {
    backgroundColor: colours.primary,
    padding: 10,
    borderRadius: 10
  },
  input: {
    borderWidth: 1,
    borderColor: colours.border,
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
  },
  buttonSmall: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: colours.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
