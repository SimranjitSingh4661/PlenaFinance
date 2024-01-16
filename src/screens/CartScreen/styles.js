import {StyleSheet} from 'react-native';
import {SCREEN_SPACING} from '../../constants';

export default StyleSheet.create({
  container: {},
  screenSpacing: {
    paddingHorizontal: SCREEN_SPACING,
  },
  priceContainer: {
    paddingBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
  },
});
