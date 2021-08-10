import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../constants/Colors';
import { NUMERIC_INPUT, DROPDOWN_INPUT } from '../data/Data';

const height = Dimensions.get('screen').height;
var dropDownHeight = height * 0.05;
const Input = (props) => {
  if (props.type == NUMERIC_INPUT) {
    const [text, setText] = useState('');
    return (
      <View style={{ zIndex: -5 }}>
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
  } else {
    const [value, setValue] = useState(props.dropDownData[0].value);
    const [items, setItems] = useState(props.dropDownData);
    const [open, setOpen] = useState(false);
    if (open) {
      dropDownHeight = dropDownHeight * (props.dropDownData.length + 1);
    } else {
      dropDownHeight = height * 0.05;
    }
    return (
      <View>
        <Text style={{ ...styles.title, ...props.titleStyle }}>
          {props.inputTitle ? props.inputTitle : 'Title'}
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={{ height: dropDownHeight }}
          onChangeValue={(value) => {
            console.log(value);
          }}
          style={styles.dropDownStyle}
          textStyle={styles.dropDownTextStyle}
          labelStyle={styles.labelStyle}
          disabledStyle={styles.disabledStyle}
        />
      </View>
    );
  }
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
  dropDownStyle: {
    height: height * 0.039,
    backgroundColor: Colors.Cream,
  },
  dropDownTextStyle: {
    fontFamily: 'open-sans',
    fontSize: 12,
    color: Colors.Gray,
  },
  labelStyle: {
    backgroundColor: Colors.Cream,
  },
  disabledStyle: {
    backgroundColor: Colors.Cream,
  },
});

export default Input;
