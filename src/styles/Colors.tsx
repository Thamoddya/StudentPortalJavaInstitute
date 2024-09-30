let isDark = true;
const ColorsDark = {
  PRIMARY_BLACK: '#1E1E1E',
  PRIMARY_WHITE: '#FFFFFF',
  PRIMARY_RED: '#FF0000',

  GRAY_100: '#F6F6F6',
  GRAY_200: '#E4E4E4',
  GRAY_300: '#CDCDCD',
  GRAY_400: '#BABABA',
  GRAY_500: '#8C8C8C',
  GRAY_600: '#767676',
  GRAY_700: '#57595B',
  GRAY_800: '#28292A',

  SUB_1: '#F1C40F',
  SUB_2: '#1C6D78',

  BG_DARK: 'rgba(25, 25, 25, 0.60)',
};
const ColorsWhite = {
  PRIMARY_BLACK: '#FFFFFF',
  PRIMARY_WHITE: '#1E1E1E',
  PRIMARY_RED: '#FF0000',

  GRAY_100: '#28292A',
  GRAY_200: '#57595B',
  GRAY_300: '#767676',
  GRAY_400: '#8C8C8C',
  GRAY_500: '#BABABA',
  GRAY_600: '#CDCDCD',
  GRAY_700: '#E4E4E4',
  GRAY_800: '#F6F6F6',

  SUB_1: '#F1C40F',
  SUB_2: '#1C6D78',

  BG_DARK: 'rgba(255, 255, 255, 0.60)',
};
const Colors = isDark ? ColorsDark : ColorsWhite;
export default Colors;
