import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BagIcon} from '../../../assets/SVGs';
import StyledText from '../styledText';
import {COLORS, SCREEN_SPACING, FONT_SIZE} from '../../../constants';
import {useSelector} from 'react-redux';
import {ChevronLeft} from 'lucide-react-native';
import {SharedStyles} from '../../../shared';
import {useNavigation} from '@react-navigation/native';

const {BLACK, WHITE, YELLOW_DARK} = COLORS;
const ICON_SIZE = 20;

const HomeHeader = ({title = '', showCart = false, onCartPress}) => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.appData?.cart);
  return (
    <View
      style={[
        styles.container,
        showCart ? styles.spaceBetween : styles.center,
      ]}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backIcon}>
        <ChevronLeft size={18} color={BLACK} />
      </TouchableOpacity>
      {!!title && (
        <StyledText
          variant="manropeRegular"
          textStyle={styles.title}
          size={FONT_SIZE.H4}
          color={BLACK}>{`${title}`}</StyledText>
      )}
      {showCart && (
        <TouchableOpacity onPress={onCartPress} style={styles.iconContainer}>
          <BagIcon black />
          {!!cart?.length && (
            <StyledText
              variant="manropeRegular"
              color={WHITE}
              size={FONT_SIZE.BODY_1}
              containerStyle={styles.count}
              textStyle={{top: -2}}>
              {cart?.length || 0}
            </StyledText>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SCREEN_SPACING,
    paddingHorizontal: SCREEN_SPACING,
  },
  center: {
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  backIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: WHITE,
    justifyContent: 'center',
    ...SharedStyles.shadow,
  },
  title: {
    paddingLeft: 20,
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
