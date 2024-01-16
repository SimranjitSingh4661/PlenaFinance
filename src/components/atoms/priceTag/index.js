import React from 'react';
import {StyleSheet, View} from 'react-native';
import StyledText from '../styledText';
import {COLORS, FONT_SIZE, STRINGS} from '../../../constants';

const PriceTag = () => {
  return (
    <View style={styles.container}>
      <StyledText
        variant="manropeRegular"
        textStyle={{fontWeight: 'bold'}}
        size={FONT_SIZE.BODY_1}>{`$${'10'}`}</StyledText>
      <View style={styles.label}>
        <StyledText
          variant="manropeRegular"
          color={COLORS.WHITE}
          textStyle={styles.labelText}
          size={FONT_SIZE.B1}>{`$${'10'} ${STRINGS.OFF}`}</StyledText>
      </View>
    </View>
  );
};

export default PriceTag;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  labelText: {
    paddingVertical: 2,
    paddingHorizontal: 20,
  },
});
