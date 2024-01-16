import {StyleSheet} from 'react-native';
import {SCREEN_SPACING} from '../../constants';

export default StyleSheet.create({
  container: {},
  screenSpacing: {
    paddingHorizontal: SCREEN_SPACING,
  },
  titleContainer: {
    paddingHorizontal: SCREEN_SPACING,
  },
  brandText: {
    marginTop: 10,
    marginBottom: 5,
  },
  paddingVertical20: {
    paddingVertical: 20,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
  },
  ratingView: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SCREEN_SPACING,
  },
  rating: {
    alignItems: 'flex-start',
  },
  ratingText: {
    marginLeft: 10,
  },
  width48: {
    width: '48%',
    marginBottom: 20,
  },
});
