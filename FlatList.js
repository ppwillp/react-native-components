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
  FlatList
} from "react-native";

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jack" },
            { key: "James" },
            { key: "Will" },
            { key: "Lauren" },
            { key: "Bean" },
            { key: "Egg" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
