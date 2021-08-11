import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import Input from '../components/Input';
import Background from '../components/Background';
import DropDownPicker from 'react-native-dropdown-picker';
import ResultCard from '../components/ResultCard';
import CustomButton from '../components/CustomButton';
import DATA from '../data/Data';
import Colors from '../constants/Colors';

const renderItem = (itemData) => {
  return (
    <View style={styles.inputContainer}>
      <Input
        inputTitle={itemData.item.title}
        titleStyle={styles.inputTitle}
        inputStyle={styles.inputText}
        keyboardType="decimal-pad"
        type={itemData.item.type}
        dropDownData={itemData.item.dropDownData}
        dropDownStyle={styles.dropDownStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        dropDownDisabledStyle={styles.dropDownDisabledStyle}
        dropDownTextStyle={styles.dropDownTextStyle}
      />
    </View>
  );
};

const CalculatorScreen = (props) => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const description = props.route.params.description;
  const id = props.route.params.id;
  const Data = DATA[id - 1].inputs;

  const onValueChange = () => {};
  //item pickers configs

  return (
    <Background>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle} numberOfLines={4}>
          {description}
        </Text>
      </View>
      <View style={styles.imageAndLearnMoreContainer}>
        <Image
          style={styles.imageStyle}
          source={{ uri: props.route.params.url }}
        />
        <View style={styles.learnMoreContainer}>
          <CustomButton
            title="?"
            onPress={() => {}}
            buttonStyle={styles.learnMoreButton}
          />
          <Text style={styles.learnMoreText}>Learn More</Text>
        </View>
      </View>
      <View style={styles.inputListContainer}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          numColumns={2}
          style={styles.flatList}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Calculate"
          onPress={() => {
            setButtonPressed((state) => !state);
          }}
          buttonStyle={styles.button}
          textStyle={{ color: 'black' }}
        />
      </View>
      {buttonPressed && <ResultCard />}
    </Background>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingTop: '25%',
    paddingHorizontal: '10%',
    paddingBottom: '7%',
  },
  title: {
    color: 'white',
    paddingVertical: 20,
    fontSize: 20,
    fontFamily: 'open-sans',
  },
  subTitle: {
    color: 'white',
    width: '90%',
    fontSize: 15,
    fontFamily: 'open-sans-light',
  },
  learnMoreContainer: {
    alignItems: 'center',
    paddingLeft: '30%',
  },
  learnMoreButton: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: Colors.Peach,
    borderColor: 'black',
    borderWidth: 1,
  },
  learnMoreText: {
    fontSize: 10,
    fontFamily: 'open-sans',
  },
  imageAndLearnMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 50,
    paddingHorizontal: '10%',
  },
  inputListContainer: {
    paddingHorizontal: '5%',
    marginBottom: 30,
  },
  inputContainer: {
    width: '45%',
    margin: 5,
    padding: 5,
  },
  inputTitle: {
    fontSize: 12,
  },
  inputText: {
    backgroundColor: Colors.Cream,
  },
  imageStyle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonContainer: {
    width: '40%',
    height: '5%',
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.Peach,
  },
});

export default CalculatorScreen;
