import { useCallback, useEffect, useMemo, useState } from 'react';
import { ColorMode } from 'src/types';
import { createContainer } from 'unstated-next';

const Store = () => {
  const initialMode: ColorMode = useMemo(() => {
    if (typeof localStorage !== `undefined`) {
      const stored = localStorage.getItem(`color`);
      // eslint-disable-next-line no-console
      console.log(stored);
      return stored ?? `theme-base`;
    }
    return `theme-base`;
  }, []) as ColorMode;

  const [colorMode, setColorMode] = useState<ColorMode>(initialMode);
  const colorList: ColorMode[] = [`theme-base`, `theme-light`, `theme-dark`];

  useEffect(() => {
    localStorage.setItem(`color`, colorMode);
  }, [colorMode]);

  const toggle = useCallback(() => {
    setColorMode((mode) => {
      const nowIndex = colorList.indexOf(mode);
      const nextIndex = (nowIndex + 1) % colorList.length;
      return colorList[nextIndex];
    });
  }, []);

  return { colorMode, toggle, setColorMode };
};

export const ColorModeContainer = createContainer(Store);
