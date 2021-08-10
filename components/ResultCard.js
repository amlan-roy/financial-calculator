import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Card from './Card';

//needs an array of objects, with the following properties
//title and result
//[{title: "dfsdf", result: "hfhf"},{title: "hfsda", result: "jhfj"},{title: "hfsda", result: "jhfj"}]

const dummyData = [
  { title: 'title', result: '123.4' },
  { title: 'title', result: '123.4' },
  { title: 'title', result: '123.4' },
  { title: 'title', result: '123.4' },
];

const renderItem = (itemData) => {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.resultTitle}>{itemData.item.title} : </Text>
      <Text style={styles.resultResult}>{itemData.item.result.toString()}</Text>
    </View>
  );
};

const ResultCard = (props) => {
  return (
    <Card style={styles.card}>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: Colors.Cream,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  resultItem: {
    flexDirection: 'row',
    width: '45%',
    margin: '2%',
    padding: '2%',
  },
  resultTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
  },
  resultResult: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: Colors.Gray,
  },
});

export default ResultCard;
