/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import {
    ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme
} from 'emotion-theming';
import React, { memo, useEffect, useState } from 'react';
import { ColorModeContainer } from 'src/store';
import { Theme } from 'src/types';

const lightTheme: Theme = {
  color: `#30303f`,
  backgroundColor: `#ffffff`,
};

const darkTheme: Theme = {
  color: `#f5f5f5`,
  backgroundColor: `#14141f`,
};

export const useTheme = (): Theme => useEmotionTheme<Theme>();

export const ThemeProvider: React.FCX = memo(({ children }) => {
  const { colorMode } = ColorModeContainer.useContainer();

  const [theme, setTheme] = useState({});
  useEffect(() => {
    const nextTheme = (() => {
      switch (colorMode) {
        case `Light`:
          return lightTheme;
        case `Dark`:
          return darkTheme;
        default:
          return lightTheme;
      }
    })();
    setTheme(nextTheme);
  }, [colorMode]);

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
});
