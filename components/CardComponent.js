import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Card from './Card';
import CustomButton from './CustomButton';
import Colors from '../constants/Colors';

const CardComponent = (props) => {
  //props needed
  //imageUri, title,description
  return (
    <Card style={{ ...styles.cardStyle, ...props.style }}>
      <Image source={{ uri: props.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Calculate"
          onPress={props.onButtonPress}
          buttonStyle={styles.button}
          textStyle={{ color: 'black' }}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: Colors.Peach,
    borderRadius: 35,
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  image: {
    height: '50%',
    width: '85%',
    minHeight: 125,
    minWidth: 125,
    aspectRatio: 1 / 1,
  },
  textContainer: {
    alignItems: 'center',
    height: '35%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    paddingVertical: 5,
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 12,
    color: Colors.Gray,
    maxWidth: '85%',
    paddingBottom: 5,
  },
  buttonContainer: {
    width: '60%',
    height: '12%',
  },
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.Peach,
  },
});

// Main Card containing component
// {
//     flex: 1,
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     paddingHorizontal: 5,
//   }

export default CardComponent;
