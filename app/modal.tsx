import { Link, Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ModalScreen() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <View style={styles.outerContainer}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={{ color: "white" }}>
          This is a modal
        </ThemedText>
        <Link href="/" dismissTo style={styles.link}>
          <ThemedText type="link" style={{ color: "white" }}>
            Go to home screen
          </ThemedText>
        </Link>
      </ThemedView>

      {/* This initially shows up in the top header, but after clicking the button, it moves to the bottom toolbar. */}
      <Stack.SearchBar />
      <Stack.Toolbar placement="bottom">
        {/* The search bar shows in the slot once the button is clicked. */}
        <Stack.Toolbar.SearchBarSlot hidden={!showSearchBar} />
        <Stack.Toolbar.Spacer />
        <Stack.Toolbar.Button
          icon={showSearchBar ? "xmark" : "magnifyingglass"}
          onPress={() => setShowSearchBar(!showSearchBar)}
        />
      </Stack.Toolbar>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ff000080",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
