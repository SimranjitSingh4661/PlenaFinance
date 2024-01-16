import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BagIcon} from '../../../assets/SVGs';
import StyledText from '../styledText';
import {COLORS, SCREEN_SPACING, FONT_SIZE} from '../../../constants';
import {useSelector} from 'react-redux';

const {PRIMARY, WHITE, YELLOW_DARK} = COLORS;
const ICON_SIZE = 20;

const HomeHeader = ({name, onCartPress}) => {
  const cart = useSelector(state => state.appData?.cart);

  return (
    <View style={styles.container}>
      <StyledText variant='manropeRegular' size={FONT_SIZE.H2} color={WHITE}>
        {name || ''}
      </StyledText>
      <TouchableOpacity onPress={onCartPress} style={styles.iconContainer}>
        <BagIcon />
        {!!cart?.length && (
          <StyledText
          variant='manropeRegular'
            color={WHITE}
            size={FONT_SIZE.BODY_1}
            containerStyle={styles.count}
            textStyle={{top: -2}}>
            {cart?.length}
          </StyledText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: PRIMARY,
    paddingVertical: SCREEN_SPACING,
    paddingHorizontal: SCREEN_SPACING,
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'relative',
  },
  count: {
    top: -6,
    right: -5,
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: 20,
    paddingBottom: 2,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: YELLOW_DARK,
  },
});
