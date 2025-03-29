import { parseToRgb, rgba } from 'polished';

const theme = {
  fonts: {
    heading: "'K2D', sans-serif",
    paragraph: "'Baloo Da 2', sans-serif",
  },
  colors: {
    black: '#3a3a3a',
    fadedBlack: '#3a3a3a99',
    dark: '#745d57',
    darkAccent: '#445835',
    white: '#f5f5f5',
    fog: '#d6d6d6cc',
  },
  colorInverses: {
    black: 'white',
    fadedBlack: 'white',
    dark: 'white',
    darkAccent: 'white',
    white: 'black',
    fog: 'black',
  },
  padding: {
    mediumSection: '13%',
    largeSection: '7%',
    fullWidthSection: '20px',
  },
  /**
   * getColorInverse: Returns an inverse color that can be used as a background for or writing on top of given color
   * @param {string} color - Color theme to get inverse of
   * @returns {string} - Inverse color hex
   */
  getColorInverse: (color) => theme.colors[theme.colorInverses[color]],
  /**
   * withOpacity: Adjusts the opacity of a color
   * @param {string} color - Original color in hex format
   * @param {number} opacity - Opacity value between 0 and 1 (decimal)
   * @returns {string} - Adjusted color in hex format with opacity added
   */
  withOpacity: (color, opacity) => {
    // Check if color is in #RRGGBBAA format
    if (color.length === 9) {
      color = color.slice(0, 7); // Strip existing alpha
    }
    // Convert decimal opacity to a hexadecimal value
    const opacityHex = Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0');
    return `${color}${opacityHex}`;
  },
  /**
   * Calculates the correct color once an opacity is applied to it with a certain background color
   * @param {string} targetColor - The original color
   * @param {number} opacity - The opacity to apply
   * @param {string} backgroundColor - The background color
   * @returns {string}
   */
  withCorrectedOpacity: (
    targetColor,
    opacity = 1,
    backgroundColor = '#ffffff'
  ) => {
    // This correctly uses parseToRgb from polished
    const target = parseToRgb(targetColor);
    const background = parseToRgb(backgroundColor);

    // Calculate each channel
    const r = Math.max(
      0,
      Math.min(
        255,
        Math.round((target.red - background.red * (1 - opacity)) / opacity)
      )
    );
    const g = Math.max(
      0,
      Math.min(
        255,
        Math.round((target.green - background.green * (1 - opacity)) / opacity)
      )
    );
    const b = Math.max(
      0,
      Math.min(
        255,
        Math.round((target.blue - background.blue * (1 - opacity)) / opacity)
      )
    );

    // convert rgba to string
    return rgba(r, g, b, opacity);
  },
};

export default theme;
