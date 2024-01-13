import {Dimensions} from 'react-native';

export enum FONTS {
  regular = 'System',
  manropeBold = 'Manrope-bold',
  manropeExtraBold = 'Manrope-ExtraBold',
  manropeLight = 'Manrope-Light',
  manropeExtraLight = 'Manrope-ExtraLight',
  manropeRegular = 'Manrope-Regular',
  manropeMedium = 'Manrope-Medium',
  manropeSemiBold = 'Manrope-SemiBold',
}

const {height, width} = Dimensions.get('window');

export const COLORS = {
  PRIMARY: '#2A4BA0',
  SECONDARY: '#153075',
  YELLOW_DARK: '#F9B023',
  YELLOW_LIGHT: '#FFC83A',
  BORDER_GREY: '#535353',
  TEXT_GREY: '#555555',
  BORDER_RED: '#A90808',
  TEXT_GREY_LIGHT: '#6e6e6e',
  WHITE: 'white',
  BLACK: 'black',
};

export const FONT_SIZE = {
  SM: 12,
  MD: 16,
  LG: 20,
};

export const SCREEN_PADDING = 16;

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};
