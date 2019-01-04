import React, { Component } from "react";
import {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  FlatList,
  SectionList
} from "react-native";

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "D", data: ["Devin"] },
            { title: "J", data: ["Jack", "John", "Joe Jack", "Jimmy"] }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247, 247, 247, 1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
