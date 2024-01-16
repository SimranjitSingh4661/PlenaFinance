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
  TEXT_GREY: '#8891a5',
  BORDER_RED: '#A90808',
  TEXT_GREY_LIGHT: '#6e6e6e',
  LIKE: '#FF8181',
  WHITE: 'white',
  BLACK: 'black',
  blue: '#1C568C',
  lightBlue: '#F1F5F9',
  white: '#FFF',
  red: '#EC1C24',
  golden: '#FFC05A',
  textInputBlack: '#04131F',
  textGray: '#878997',
  brandRed: '#FB4D58',
};

export const FONT_SIZE = {
  H1: 30,
  H2: 26,
  H3: 20,
  H4: 18,
  BODY_1: 16,
  BODY_2: 14,
  Label: 12,
  B1: 14,
  B2: 12,
};

export const SCREEN_PADDING = 16;
export const SCREEN_SPACING = 20;

export const DELIVERY_FEE = 2;

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};
