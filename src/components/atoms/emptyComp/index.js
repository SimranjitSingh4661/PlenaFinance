import React from 'react';
import {StyleSheet, View} from 'react-native';
import {STRINGS} from '../../../constants';
import StyledText from '../styledText';

const EmptyComponent = () => {
  return (
    <View style={styles.view}>
      <StyledText variant='manropeRegular'>{STRINGS.NO_DATA_FOUND}</StyledText>
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
});
