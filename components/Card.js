import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

const Card = (props) => {
  const { children, elevation, opacity, cornerRadius } = props;

  const cardStyle = Platform.select({
    ios: () =>
      StyleSheet.create({
        container: {
          shadowRadius: elevation,
          shadowOpacity: opacity,
          shadowOffset: { width: 0, height: elevation },
          borderRadius: cornerRadius,
          backgroundColor: props.backgroundColor,
          width: Dimensions.get('window').width - 40,
        },
      }),
    android: () =>
      StyleSheet.create({
        container: {
          elevation: elevation,
          borderRadius: cornerRadius,
          backgroundColor: props.backgroundColor,
          width: Dimensions.get('window').width - 40,
        },
      }),
  })();

  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[cardStyle.container, props.style]}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

Card.prototype = {
  backgroundColor: PropTypes.string,
  elevation: PropTypes.number,
  cornerRadius: PropTypes.number,
  opacity: PropTypes.number,
};

Card.defaultProps = {
  backgroundColor: '#ffffff',
  elevation: 3,
  cornerRadius: 5,
  opacity: 0.5,
  height: 50,
  width: 50,
};

export default Card;
