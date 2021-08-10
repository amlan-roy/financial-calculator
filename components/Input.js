import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Dimensions } from 'react-native';

const height = Dimensions.get('screen').height;
const Input = (props) => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text style={{ ...styles.title, ...props.titleStyle }}>
        {props.inputTitle ? props.inputTitle : 'Title'}
      </Text>
      <TextInput
        onChangeText={(input) => setText(input)}
        defaultValue={text}
        placeholder="Enter the value"
        keyboardType={props.keyboardType}
        style={{
          ...styles.textInput,
          ...props.inputStyle,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 12,
    paddingHorizontal: 10,
    width: '100%',
  },
  title: {
    height: height * 0.04,
  },
});

export default Input;
