import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Background = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/my-assets/bg.png')}
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
        <View style={{ ...{ flex: 1 }, ...props.style }}>{props.children}</View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    minWidth: 360,
    minHeight: 640,
    height: height,
    width: width,
    aspectRatio: 360 / 640,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Background;
