import React, {Fragment} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import StyledText from '../styledText';

const {PRIMARY, BORDER_GREY, WHITE} = COLORS;

const Divider = ({onPress, containerStyles, text}) => {
  return (
    <Fragment>
      <LinearGradient
        // end={{x: 0, y: 1}}
        start={{x: 0, y: 0.1}}
        style={styles.container}
        colors={['rgba(255, 255, 255, 0.1)', PRIMARY]}
      />
    </Fragment>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 2,
    width: '100%',
    marginVertical: 20,
    backgroundColor: BORDER_GREY,
  },
});
