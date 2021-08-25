import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const DetailsScreen = (props) => {
  const title = props.route.params.title;
  const body = props.route.params.body;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.bodyText}>{body}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    paddingHorizontal: '5%',
  },
  bodyText: {
    fontFamily: 'open-sans-light',
    fontSize: 15,
  },
});

export default DetailsScreen;
