import { PixelRatio } from 'react-native'

colors = {
  buttonBackground: '#d57564',
  buttonText: '#FFF',
  white: '#FFF',
  black: '#000',
  transparent: 'rgba(0,0,0,0)',
  text: '#514637'
}

metrics = {
  buttonBorderRadius: '0px',
  buttonHeight: '25px',
  buttonWidth: '90px',
  M1: `${PixelRatio.get() * 1.5}px`,
  M2: `${PixelRatio.get() * 2.5}px`,
  M3: `${PixelRatio.get() * 4}px`,
  M4: `${PixelRatio.get() * 5}px`,
  M5: `${PixelRatio.get() * 6}px`,
  M6: `${PixelRatio.get() * 7.5}px`
}

fonts = {
  small: `font-size: ${PixelRatio.getFontScale() * 11}`,
  medium: `font-weight: bold; font-size: ${PixelRatio.getFontScale() * 11};`,
  large: `font-weight: bold; font-size: ${PixelRatio.getFontScale() * 12};`,
  xLarge: `font-weight: bold; font-size: ${PixelRatio.getFontScale() * 16};`
}

export default { colors, metrics, fonts }
