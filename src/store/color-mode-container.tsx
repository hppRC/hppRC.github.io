import { useCallback, useEffect, useMemo, useState } from 'react';
import { ColorMode } from 'src/types';
import { createContainer } from 'unstated-next';

const Store = () => {
  const initialMode = useMemo(() => {
    if (typeof localStorage !== `undefined`) {
      const stored = localStorage.getItem(`color`);
      return stored ?? `Light`;
    }
    return `Light`;
  }, []) as ColorMode;

  const [colorMode, setColorMode] = useState<ColorMode>(initialMode);

  useEffect(() => {
    localStorage.setItem(`color`, colorMode);
  }, [colorMode]);

  const toggle = useCallback(() => {
    setColorMode((mode) => (mode === `Light` ? `Dark` : `Light`));
  }, []);

  return { colorMode, toggle, setColorMode };
};

export const ColorModeContainer = createContainer(Store);
