import {StyleSheet, Platform} from 'react-native';
import {COLORS, SCREEN_SPACING} from '../../../constants';

export default StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.WHITE,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
  },
  errorContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  errorText: {
    fontSize: 14,
    marginLeft: 7,
    maxWidth: '95%',
    lineHeight: 18,
    color: COLORS.brandRed,
  },
  placeHolderText: {},
  digitCount: {
    opacity: 0.7,
    fontSize: 13,
    lineHeight: 16,
    paddingTop: 11,
    textAlign: 'right',
    color: COLORS.textGray,
  },
});
