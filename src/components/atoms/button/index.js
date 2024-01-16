import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import StyledText from '../styledText';
import {COLORS, FONT_SIZE} from '../../../constants';

const Button = ({
  onPress,
  title = '',
  bgBlue = false,
  containerStyles = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        containerStyles,
        {
          backgroundColor: bgBlue ? COLORS.PRIMARY : COLORS.WHITE,
        },
      ]}>
      <StyledText
        variant="manropeBold"
        textStyle={styles.title}
        size={FONT_SIZE.BODY_1}
        color={bgBlue ? COLORS.WHITE : COLORS.PRIMARY}>
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.PRIMARY,
  },
  title: {
    paddingVertical: 20,
  },
});
