import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import CardComponent from '../components/CardComponent';
import Colors from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import DATA from '../data/Data';
import Background from '../components/Background';

const MainScreen = (props) => {
  const windowWidth = Dimensions.get('window').width;

  const toCalculator = (title, description, id, url) => {
    props.navigation.navigate('Calculator', {
      title: title,
      description: description,
      id: id,
      url: url,
    });
  };

  const renderItem = (itemData) => {
    return (
      <CardComponent
        style={styles.cardStyle}
        imageUrl={itemData.item.imageUrl}
        title={itemData.item.title}
        description={itemData.item.description}
        onButtonPress={toCalculator.bind(
          this,
          itemData.item.title,
          itemData.item.description,
          itemData.item.id,
          itemData.item.imageUrl,
        )}
      />
    );
  };

  return (
    <Background>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle} numberOfLines={2}>
          Select what you want to calculate
        </Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          snapToInterval={260}
          snapToAlignment={'center'}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={{ width: windowWidth + 5, height: '100%' }}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%',
    alignItems: 'stretch',
    paddingTop: 25,
  },
  backgroundImage: {
    minWidth: 360,
    minHeight: 640,
    height: '100%',
    width: '100%',
    aspectRatio: 360 / 640,
  },
  cardStyle: {
    backgroundColor: Colors.Cream,
    height: 300,
    width: 225,
    borderRadius: 35,
    marginHorizontal: 25,
    marginVertical: 10,
    marginTop: 60,
  },
  textContainer: { paddingTop: '5%', paddingHorizontal: '10%' },
  // title: {
  //   color: 'white',
  //   paddingVertical: 20,
  //   fontSize: 20,
  //   fontFamily: 'open-sans',
  // },
  subTitle: {
    color: 'white',
    width: 200,
    fontSize: 20,
    fontFamily: 'open-sans-light',
    paddingVertical: '20%',
  },
});

export default MainScreen;
