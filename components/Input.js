import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  Keyboard,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../constants/Colors';
import { NUMERIC_INPUT, DROPDOWN_INPUT } from '../data/Data';

const height = Dimensions.get('screen').height;
var dropDownHeight = height * 0.05;

const Input = (props) => {
  const [text, setText] = useState('');
  const [value, setValue] = useState(
    props.dropDownData !== null ? props.dropDownData[0].value : '',
  );
  const [isEmpty, setIsEmpty] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const changeHandler = (input) => {
    setIsTouched(true);
    if (input.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    if (props.type == NUMERIC_INPUT) {
      setText(input);
    } else {
      setValue(input);
    }
  };
  //two useEffects handlers for passing the values to the calculator screen

  useEffect(() => {
    Keyboard.dismiss();
  }, [props.dismiss]);
  useEffect(() => {
    props.onValueChange(props.index, text);
  }, [text]);
  useEffect(() => {
    props.onValueChange(props.index, value);
  }, [value]);
  useEffect(() => {
    if (props.type === NUMERIC_INPUT) {
      props.onValueChange(props.index, text);
    } else {
      props.onValueChange(props.index, value);
    }
  }, []);

  if (props.type == NUMERIC_INPUT) {
    return (
      <View style={{ zIndex: -5 }}>
        <Text style={{ ...styles.title, ...props.titleStyle }}>
          {props.inputTitle ? props.inputTitle : 'Title'}
        </Text>
        <TextInput
          onChangeText={changeHandler}
          defaultValue={text}
          placeholder="Enter the value"
          keyboardType={props.keyboardType}
          style={{
            ...styles.textInput,
            ...props.inputStyle,
          }}
          maxLength={9}
        />

        {isEmpty && isTouched && (
          <Text style={styles.errorMessage}>Input can not be Empty</Text>
        )}
      </View>
    );
  } else {
    const [items, setItems] = useState(props.dropDownData);
    const [open, setOpen] = useState(false);
    if (open) {
      dropDownHeight = 35 * (props.dropDownData.length + 1);
    } else {
      dropDownHeight = 35;
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
            changeHandler(value);
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
  errorMessage: {
    fontFamily: 'open-sans',
    fontSize: 12,
    color: 'red',
  },
});

export default Input;
