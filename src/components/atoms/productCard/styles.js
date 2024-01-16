import {StyleSheet} from 'react-native';
import {COLORS, SCREEN_SPACING, SCREEN} from '../../../constants';
import {SharedStyles} from '../../../shared';

const {PRIMARY, WHITE} = COLORS;
const {WIDTH, HEIGHT} = SCREEN;

export default StyleSheet.create({
  container: {
    width: WIDTH / 2.3,
    marginBottom: 20,
    borderRadius: 20,
    ...SharedStyles.shadow,
    backgroundColor: WHITE,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    height: HEIGHT / 5,
    width: WIDTH / 2.3,
    resizeMode: 'stretch',
  },
  likeBtn: {
    top: 10,
    left: 10,
    zIndex: 10,
    position: 'absolute',
  },
  priceView: {
    paddingTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingBottom: SCREEN_SPACING,
  },
  addBtn: {
    width: 26,
    height: 26,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY,
    justifyContent: 'center',
  },
});
