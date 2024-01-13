import {StyleSheet, Platform} from 'react-native';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  container: {
    // borderRadius: 8,
    // borderWidth: 1,
    // overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
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
    color: COLORS.textGray,
    textAlign: 'right',
  },
});
