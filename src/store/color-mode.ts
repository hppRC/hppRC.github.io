import { atom, selector } from 'recoil';
import { ColorMode, Theme } from 'src/types';

const lightTheme: Theme = {
  color: `#30303f`,
  backgroundColor: `#ffffff`,
};

const darkTheme: Theme = {
  color: `#f5f5f5`,
  backgroundColor: `#14141f`,
};

const defaultTheme = lightTheme;

const initialColorMode: ColorMode = `theme-light`;

export const colorMode = atom<ColorMode>({
  key: `color-mode`,
  default: initialColorMode,
});

export const colorTheme = selector<Theme>({
  key: `color-theme`,
  get: ({ get }) => {
    switch (get(colorMode)) {
      case `theme-light`:
        return lightTheme;
      case `theme-dark`:
        return darkTheme;
      default:
        return defaultTheme;
    }
  },
});
