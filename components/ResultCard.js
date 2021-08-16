import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Card from './Card';

//needs an array of objects, with the following properties
//title and result
//[{title: "dfsdf", result: "hfhf"},{title: "hfsda", result: "jhfj"},{title: "hfsda", result: "jhfj"}]

const renderItem = (itemData) => {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.resultTitle}>{itemData.item.title}</Text>
      <Text style={styles.resultResult}>{itemData.item.result.toString()}</Text>
    </View>
  );
};

const ResultCard = (props) => {
  return (
    <Card style={styles.card}>
      <FlatList
        data={props.resultData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: Colors.Cream,
    padding: 10,
    margin: 20,
    alignItems: 'flex-start',
  },
  resultItem: {
    flex: 1,
    flexDirection: 'row',
    width: '95%',
    padding: 5,
  },
  resultTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 13,
    width: '60%',
    textAlign: 'left',
  },
  resultResult: {
    fontFamily: 'open-sans',
    fontSize: 13,
    color: Colors.Gray,
    paddingHorizontal: 5,
  },
});

export default ResultCard;
