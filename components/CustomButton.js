import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Text } from 'react-native';

const CustomButton = (props) => {
  return (
    <View style={styles.touchable}>
      <TouchableNativeFeedback onPress={props.onPress} useForeground>
        <View style={{ ...styles.button, ...props.buttonStyle }}>
          <Text style={{ ...styles.text, ...props.textStyle }}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    borderWidth: 0,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'open-sans',
    textAlign: 'center',
  },
  touchable: {
    borderWidth: 0,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default CustomButton;
