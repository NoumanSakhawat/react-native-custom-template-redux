import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


const sizes = {
    height: {
        _0: 0,
        _1: responsiveHeight(0.5),
        _2: responsiveHeight(0.6),
        _3: responsiveHeight(0.7),
        _4: responsiveHeight(0.8),
        _5: responsiveHeight(0.9),
        _6: responsiveHeight(1.0),
        _7: responsiveHeight(1.1),
        _8: responsiveHeight(1.2),
        _9: responsiveHeight(1.3),
        _10: responsiveHeight(1.4),
        _11: responsiveHeight(1.5),
        _12: responsiveHeight(1.6),
        _13: responsiveHeight(1.7),
        _14: responsiveHeight(1.8),
        _15: responsiveHeight(1.9),
        _16: responsiveHeight(2.0),
        _17: responsiveHeight(2.1),
        _18: responsiveHeight(2.2),
        _19: responsiveHeight(2.3),
        _20: responsiveHeight(2.4),
        _21: responsiveHeight(2.5),
        _22: responsiveHeight(2.6),
        _23: responsiveHeight(2.7),
        _24: responsiveHeight(2.8),
        _25: responsiveHeight(2.9),
        _26: responsiveHeight(3.0),
        _27: responsiveHeight(3.1),
        _28: responsiveHeight(3.2),
        _29: responsiveHeight(3.3),
        _30: responsiveHeight(3.4),
        _31: responsiveHeight(3.5),
        _32: responsiveHeight(3.6),
        _33: responsiveHeight(3.7),
        _34: responsiveHeight(3.8),
        _35: responsiveHeight(3.9),
        _36: responsiveHeight(4.0),
        _37: responsiveHeight(4.1),
        _38: responsiveHeight(4.2),
        _39: responsiveHeight(4.3),
        _40: responsiveHeight(4.4),
        _41: responsiveHeight(4.5),
        _42: responsiveHeight(4.6),
        _43: responsiveHeight(4.7),
        _44: responsiveHeight(4.8),
        _45: responsiveHeight(4.9),
        _46: responsiveHeight(5.0),
        _47: responsiveHeight(5.1),
        _48: responsiveHeight(5.2),
        _49: responsiveHeight(5.3),
        _50: responsiveHeight(5.4),
        _51: responsiveHeight(5.5),
        _52: responsiveHeight(5.6),
        _53: responsiveHeight(5.7),
        _54: responsiveHeight(5.8),
        _55: responsiveHeight(5.9),
        _56: responsiveHeight(6.0),
        _57: responsiveHeight(6.1),
        _58: responsiveHeight(6.2),
        _59: responsiveHeight(6.3),
        _60: responsiveHeight(6.4),
        _61: responsiveHeight(6.5),
        _62: responsiveHeight(6.6),
        _63: responsiveHeight(6.7),
        _64: responsiveHeight(6.8),
        _65: responsiveHeight(6.9),
        _66: responsiveHeight(7.0),
        _67: responsiveHeight(7.1),
        _68: responsiveHeight(7.2),
        _69: responsiveHeight(7.3),
        _70: responsiveHeight(7.4),
        _71: responsiveHeight(7.5),
        _72: responsiveHeight(7.6),
        _73: responsiveHeight(7.7),
        _74: responsiveHeight(7.8),
        _75: responsiveHeight(7.9),
        _76: responsiveHeight(8.0),
        _77: responsiveHeight(8.1),
        _78: responsiveHeight(8.2),
        _79: responsiveHeight(8.3),
        _80: responsiveHeight(8.4),
        _81: responsiveHeight(8.5),
        _82: responsiveHeight(8.6),
        _83: responsiveHeight(8.7),
        _84: responsiveHeight(8.8),
        _85: responsiveHeight(8.9),
        _86: responsiveHeight(9.0),
        _87: responsiveHeight(9.1),
        _88: responsiveHeight(9.2),
        _89: responsiveHeight(9.3),
        _90: responsiveHeight(9.4),
        _91: responsiveHeight(9.5),
        _92: responsiveHeight(9.6),
        _93: responsiveHeight(9.7),
        _94: responsiveHeight(9.8),
        _95: responsiveHeight(9.9),
        _96: responsiveHeight(10.0),
        _97: responsiveHeight(10.1),
        _98: responsiveHeight(10.2),
        _99: responsiveHeight(10.3),
        _100: responsiveHeight(10.4),
    },
    width: {
        _0: 0,
        _1: responsiveWidth(0.5),
        _2: responsiveWidth(0.6),
        _3: responsiveWidth(0.7),
        _4: responsiveWidth(0.8),
        _5: responsiveWidth(0.9),
        _6: responsiveWidth(1.0),
        _7: responsiveWidth(1.1),
        _8: responsiveWidth(1.2),
        _9: responsiveWidth(1.3),
        _10: responsiveWidth(1.4),
        _11: responsiveWidth(1.5),
        _12: responsiveWidth(1.6),
        _13: responsiveWidth(1.7),
        _14: responsiveWidth(1.8),
        _15: responsiveWidth(1.9),
        _16: responsiveWidth(2.0),
        _17: responsiveWidth(2.1),
        _18: responsiveWidth(2.2),
        _19: responsiveWidth(2.3),
        _20: responsiveWidth(2.4),
        _21: responsiveWidth(2.5),
        _22: responsiveWidth(2.6),
        _23: responsiveWidth(2.7),
        _24: responsiveWidth(2.8),
        _25: responsiveWidth(2.9),
        _26: responsiveWidth(3.0),
        _27: responsiveWidth(3.1),
        _28: responsiveWidth(3.2),
        _29: responsiveWidth(3.3),
        _30: responsiveWidth(3.4),
        _31: responsiveWidth(3.5),
        _32: responsiveWidth(3.6),
        _33: responsiveWidth(3.7),
        _34: responsiveWidth(3.8),
        _35: responsiveWidth(3.9),
        _36: responsiveWidth(4.0),
        _37: responsiveWidth(4.1),
        _38: responsiveWidth(4.2),
        _39: responsiveWidth(4.3),
        _40: responsiveWidth(4.4),
        _41: responsiveWidth(4.5),
        _42: responsiveWidth(4.6),
        _43: responsiveWidth(4.7),
        _44: responsiveWidth(4.8),
        _45: responsiveWidth(4.9),
        _46: responsiveWidth(5.0),
        _47: responsiveWidth(5.1),
        _48: responsiveWidth(5.2),
        _49: responsiveWidth(5.3),
        _50: responsiveWidth(5.4),
        _51: responsiveWidth(5.5),
        _52: responsiveWidth(5.6),
        _53: responsiveWidth(5.7),
        _54: responsiveWidth(5.8),
        _55: responsiveWidth(5.9),
        _56: responsiveWidth(6.0),
        _57: responsiveWidth(6.1),
        _58: responsiveWidth(6.2),
        _59: responsiveWidth(6.3),
        _60: responsiveWidth(6.4),
        _61: responsiveWidth(6.5),
        _62: responsiveWidth(6.6),
        _63: responsiveWidth(6.7),
        _64: responsiveWidth(6.8),
        _65: responsiveWidth(6.9),
        _66: responsiveWidth(7.0),
        _67: responsiveWidth(7.1),
        _68: responsiveWidth(7.2),
        _69: responsiveWidth(7.3),
        _70: responsiveWidth(7.4),
        _71: responsiveWidth(7.5),
        _72: responsiveWidth(7.6),
        _73: responsiveWidth(7.7),
        _74: responsiveWidth(7.8),
        _75: responsiveWidth(7.9),
        _76: responsiveWidth(8.0),
        _77: responsiveWidth(8.1),
        _78: responsiveWidth(8.2),
        _79: responsiveWidth(8.3),
        _80: responsiveWidth(8.4),
        _81: responsiveWidth(8.5),
        _82: responsiveWidth(8.6),
        _83: responsiveWidth(8.7),
        _84: responsiveWidth(8.8),
        _85: responsiveWidth(8.9),
        _86: responsiveWidth(9.0),
        _87: responsiveWidth(9.1),
        _88: responsiveWidth(9.2),
        _89: responsiveWidth(9.3),
        _90: responsiveWidth(9.4),
        _91: responsiveWidth(9.5),
        _92: responsiveWidth(9.6),
        _93: responsiveWidth(9.7),
        _94: responsiveWidth(9.8),
        _95: responsiveWidth(9.9),
        _96: responsiveWidth(10.0),
        _97: responsiveWidth(10.1),
        _98: responsiveWidth(10.2),
        _99: responsiveWidth(10.3),
        _100: responsiveWidth(10.4),
    },
    text: {
        _01: responsiveFontSize(0.3),
        _02: responsiveFontSize(0.4),
        _03: responsiveFontSize(0.5),
        _04: responsiveFontSize(0.6),
        _05: responsiveFontSize(0.7),
        _06: responsiveFontSize(0.8),
        _07: responsiveFontSize(0.9),
        _08: responsiveFontSize(1.0),
        _09: responsiveFontSize(1.1),
        _10: responsiveFontSize(1.2),
        _11: responsiveFontSize(1.3),
        _12: responsiveFontSize(1.4),
        _13: responsiveFontSize(1.5),
        _14: responsiveFontSize(1.6),
        _15: responsiveFontSize(1.7),
        _16: responsiveFontSize(1.8),
        _17: responsiveFontSize(1.9),
        _18: responsiveFontSize(2.0),
        _19: responsiveFontSize(2.1),
        _20: responsiveFontSize(2.2),
        _21: responsiveFontSize(2.3),
        _22: responsiveFontSize(2.4),
        _23: responsiveFontSize(2.5),
        _24: responsiveFontSize(2.6),
        _25: responsiveFontSize(2.7),
        _26: responsiveFontSize(2.8),
        _27: responsiveFontSize(2.9),
        _28: responsiveFontSize(3.0),
        _29: responsiveFontSize(3.1),
        _30: responsiveFontSize(3.2),
        _31: responsiveFontSize(3.3),
        _32: responsiveFontSize(3.4),
        _33: responsiveFontSize(3.5),
        _34: responsiveFontSize(3.6),
        _35: responsiveFontSize(3.7),
        _36: responsiveFontSize(3.8),
        _37: responsiveFontSize(3.9),
        _38: responsiveFontSize(4.0),
        _39: responsiveFontSize(4.1),
        _40: responsiveFontSize(4.2),
        _41: responsiveFontSize(4.3),
        _42: responsiveFontSize(4.4),
        _43: responsiveFontSize(4.5),
        _44: responsiveFontSize(4.6),
        _45: responsiveFontSize(4.7),
        _46: responsiveFontSize(4.8),
        _47: responsiveFontSize(4.9),
        _48: responsiveFontSize(5.0),
        _49: responsiveFontSize(5.1),
        _50: responsiveFontSize(5.2),
        _51: responsiveFontSize(5.3),
        _52: responsiveFontSize(5.4),
        _53: responsiveFontSize(5.5),
        _54: responsiveFontSize(5.6),
        _55: responsiveFontSize(5.7),
        _56: responsiveFontSize(5.8),
        _57: responsiveFontSize(5.9),
        _58: responsiveFontSize(6.0),
        _59: responsiveFontSize(6.1),
        _60: responsiveFontSize(6.2),
        _61: responsiveFontSize(6.3),
        _62: responsiveFontSize(6.4),
        _63: responsiveFontSize(6.5),
        _64: responsiveFontSize(6.6),
        _65: responsiveFontSize(6.7),
        _66: responsiveFontSize(6.8),
        _67: responsiveFontSize(6.9),
        _68: responsiveFontSize(7.0),
        _69: responsiveFontSize(7.1),
        _70: responsiveFontSize(7.2),
        _71: responsiveFontSize(7.3),
        _72: responsiveFontSize(7.4),
        _73: responsiveFontSize(7.5),
        _74: responsiveFontSize(7.6),
        _75: responsiveFontSize(7.7),
        _76: responsiveFontSize(7.8),
        _77: responsiveFontSize(7.9),
        _78: responsiveFontSize(8.0),
        _79: responsiveFontSize(8.1),
        _80: responsiveFontSize(8.2),
        _81: responsiveFontSize(8.3),
        _82: responsiveFontSize(8.4),
        _83: responsiveFontSize(8.5),
        _84: responsiveFontSize(8.6),
        _85: responsiveFontSize(8.7),
        _86: responsiveFontSize(8.8),
        _87: responsiveFontSize(8.9),
        _88: responsiveFontSize(9.0),
        _89: responsiveFontSize(9.1),
        _90: responsiveFontSize(9.2),
        _91: responsiveFontSize(9.3),
        _92: responsiveFontSize(9.4),
        _93: responsiveFontSize(9.5),
        _94: responsiveFontSize(9.6),
        _95: responsiveFontSize(9.7),
        _96: responsiveFontSize(9.8),
        _97: responsiveFontSize(9.9),
        _98: responsiveFontSize(10.0),
        _99: responsiveFontSize(10.1),
        _100: responsiveFontSize(10.2),
    },

    imageHeight: {
        _01: responsiveHeight(1.0),
        _02: responsiveHeight(2.0),
        _03: responsiveHeight(3.0),
        _04: responsiveHeight(4.0),
        _05: responsiveHeight(5.0),
        _06: responsiveHeight(6.0),
        _07: responsiveHeight(7.0),
        _08: responsiveHeight(8.0),
        _09: responsiveHeight(9.0),
        _10: responsiveHeight(10.0),
        _11: responsiveHeight(11.0),
        _12: responsiveHeight(12.0),
        _13: responsiveHeight(13.0),
        _14: responsiveHeight(14.0),
        _15: responsiveHeight(15.0),
        _16: responsiveHeight(16.0),
        _17: responsiveHeight(17.0),
        _18: responsiveHeight(18.0),
        _19: responsiveHeight(19.0),
        _20: responsiveHeight(20.0),
        _21: responsiveHeight(21.0),
        _22: responsiveHeight(22.0),
        _23: responsiveHeight(23.0),
        _24: responsiveHeight(24.0),
        _25: responsiveHeight(25.0),
        _26: responsiveHeight(26.0),
        _27: responsiveHeight(27.0),
        _28: responsiveHeight(28.0),
        _29: responsiveHeight(29.0),
        _30: responsiveHeight(30.0),
        _31: responsiveHeight(31.0),
        _32: responsiveHeight(32.0),
        _33: responsiveHeight(33.0),
        _34: responsiveHeight(34.0),
        _35: responsiveHeight(35.0),
        _36: responsiveHeight(36.0),
        _37: responsiveHeight(37.0),
        _38: responsiveHeight(38.0),
        _39: responsiveHeight(39.0),
        _40: responsiveHeight(40.0),
        _41: responsiveHeight(41.0),
        _42: responsiveHeight(42.0),
        _43: responsiveHeight(43.0),
        _44: responsiveHeight(44.0),
        _45: responsiveHeight(45.0),
        _46: responsiveHeight(46.0),
        _47: responsiveHeight(47.0),
        _48: responsiveHeight(48.0),
        _49: responsiveHeight(49.0),
        _50: responsiveHeight(50.0),
        _51: responsiveHeight(51.0),
        _52: responsiveHeight(52.0),
        _53: responsiveHeight(53.0),
        _54: responsiveHeight(54.0),
        _55: responsiveHeight(55.0),
        _56: responsiveHeight(56.0),
        _57: responsiveHeight(57.0),
        _58: responsiveHeight(58.0),
        _59: responsiveHeight(59.0),
        _60: responsiveHeight(60.0),
        _61: responsiveHeight(61.0),
        _62: responsiveHeight(62.0),
        _63: responsiveHeight(63.0),
        _64: responsiveHeight(64.0),
        _65: responsiveHeight(65.0),
        _66: responsiveHeight(66.0),
        _67: responsiveHeight(67.0),
        _68: responsiveHeight(68.0),
        _69: responsiveHeight(69.0),
        _70: responsiveHeight(70.0),
        _71: responsiveHeight(71.0),
        _72: responsiveHeight(72.0),
        _73: responsiveHeight(73.0),
        _74: responsiveHeight(74.0),
        _75: responsiveHeight(75.0),
        _76: responsiveHeight(76.0),
        _77: responsiveHeight(77.0),
        _78: responsiveHeight(78.0),
        _79: responsiveHeight(79.0),
        _80: responsiveHeight(80.0),
        _81: responsiveHeight(81.0),
        _82: responsiveHeight(82.0),
        _83: responsiveHeight(83.0),
        _84: responsiveHeight(84.0),
        _85: responsiveHeight(85.0),
        _86: responsiveHeight(86.0),
        _87: responsiveHeight(87.0),
        _88: responsiveHeight(88.0),
        _89: responsiveHeight(89.0),
        _90: responsiveHeight(90.0),
        _91: responsiveHeight(91.0),
        _92: responsiveHeight(92.0),
        _93: responsiveHeight(93.0),
        _94: responsiveHeight(94.0),
        _95: responsiveHeight(95.0),
        _96: responsiveHeight(96.0),
        _97: responsiveHeight(97.0),
        _98: responsiveHeight(98.0),
        _99: responsiveHeight(99.0),
        _100: responsiveHeight(100.0),
    },
    imageWidth: {
        _01: responsiveWidth(1.0),
        _02: responsiveWidth(2.0),
        _03: responsiveWidth(3.0),
        _04: responsiveWidth(4.0),
        _05: responsiveWidth(5.0),
        _06: responsiveWidth(6.0),
        _07: responsiveWidth(7.0),
        _08: responsiveWidth(8.0),
        _09: responsiveWidth(9.0),
        _10: responsiveWidth(10.0),
        _11: responsiveWidth(11.0),
        _12: responsiveWidth(12.0),
        _13: responsiveWidth(13.0),
        _14: responsiveWidth(14.0),
        _15: responsiveWidth(15.0),
        _16: responsiveWidth(16.0),
        _17: responsiveWidth(17.0),
        _18: responsiveWidth(18.0),
        _19: responsiveWidth(19.0),
        _20: responsiveWidth(20.0),
        _21: responsiveWidth(21.0),
        _22: responsiveWidth(22.0),
        _23: responsiveWidth(23.0),
        _24: responsiveWidth(24.0),
        _25: responsiveWidth(25.0),
        _26: responsiveWidth(26.0),
        _27: responsiveWidth(27.0),
        _28: responsiveWidth(28.0),
        _29: responsiveWidth(29.0),
        _30: responsiveWidth(30.0),
        _31: responsiveWidth(31.0),
        _32: responsiveWidth(32.0),
        _33: responsiveWidth(33.0),
        _34: responsiveWidth(34.0),
        _35: responsiveWidth(35.0),
        _36: responsiveWidth(36.0),
        _37: responsiveWidth(37.0),
        _38: responsiveWidth(38.0),
        _39: responsiveWidth(39.0),
        _40: responsiveWidth(40.0),
        _41: responsiveWidth(41.0),
        _42: responsiveWidth(42.0),
        _43: responsiveWidth(43.0),
        _44: responsiveWidth(44.0),
        _45: responsiveWidth(45.0),
        _46: responsiveWidth(46.0),
        _47: responsiveWidth(47.0),
        _48: responsiveWidth(48.0),
        _49: responsiveWidth(49.0),
        _50: responsiveWidth(50.0),
        _51: responsiveWidth(51.0),
        _52: responsiveWidth(52.0),
        _53: responsiveWidth(53.0),
        _54: responsiveWidth(54.0),
        _55: responsiveWidth(55.0),
        _56: responsiveWidth(56.0),
        _57: responsiveWidth(57.0),
        _58: responsiveWidth(58.0),
        _59: responsiveWidth(59.0),
        _60: responsiveWidth(60.0),
        _61: responsiveWidth(61.0),
        _62: responsiveWidth(62.0),
        _63: responsiveWidth(63.0),
        _64: responsiveWidth(64.0),
        _65: responsiveWidth(65.0),
        _66: responsiveWidth(66.0),
        _67: responsiveWidth(67.0),
        _68: responsiveWidth(68.0),
        _69: responsiveWidth(69.0),
        _70: responsiveWidth(70.0),
        _71: responsiveWidth(71.0),
        _72: responsiveWidth(72.0),
        _73: responsiveWidth(73.0),
        _74: responsiveWidth(74.0),
        _75: responsiveWidth(75.0),
        _76: responsiveWidth(76.0),
        _77: responsiveWidth(77.0),
        _78: responsiveWidth(78.0),
        _79: responsiveWidth(79.0),
        _80: responsiveWidth(80.0),
        _81: responsiveWidth(81.0),
        _82: responsiveWidth(82.0),
        _83: responsiveWidth(83.0),
        _84: responsiveWidth(84.0),
        _85: responsiveWidth(85.0),
        _86: responsiveWidth(86.0),
        _87: responsiveWidth(87.0),
        _88: responsiveWidth(88.0),
        _89: responsiveWidth(89.0),
        _90: responsiveWidth(90.0),
        _91: responsiveWidth(91.0),
        _92: responsiveWidth(92.0),
        _93: responsiveWidth(93.0),
        _94: responsiveWidth(94.0),
        _95: responsiveWidth(95.0),
        _96: responsiveWidth(96.0),
        _97: responsiveWidth(97.0),
        _98: responsiveWidth(98.0),
        _99: responsiveWidth(99.0),
        _100: responsiveWidth(100.0),
    },
}


export const marginSizesHeight = sizes.height;

export const marginSizesWidth = sizes.width;

export const imageSizesHeight = sizes.imageHeight;

export const imageSizesWidth = sizes.imageWidth;

export const heightSize = sizes.imageHeight;

export const widthSize = sizes.imageWidth;


export const fontSizes = sizes.text;
