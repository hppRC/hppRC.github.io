import { useCallback, useEffect, useMemo, useState } from 'react';
import { LangMode } from 'src/types';
import { createContainer } from 'unstated-next';

const Store = () => {
  const initialMode = useMemo(() => {
    if (typeof localStorage !== `undefined`) {
      const stored = localStorage.getItem(`lang`);
      return stored ?? `en-US`;
    }
    return `en-US`;
  }, []) as LangMode;

  const [langMode, setLangMode] = useState<LangMode>(initialMode);

  useEffect(() => {
    localStorage.setItem(`lang`, langMode);
  }, [langMode]);

  const toggle = useCallback(() => {
    setLangMode((mode) => (mode === `en-US` ? `ja-JP` : `en-US`));
  }, []);

  const setLang = (lang: LangMode) => {
    const nextLang = (() => {
      switch (lang) {
        case `en-US`:
          return `en-US`;
        case `ja-JP`:
          return `ja-JP`;
        default:
          return `en-US`;
      }
    })();
    setLangMode(nextLang);
  };

  return { langMode, toggle, setLang };
};

export const langModeContainer = createContainer(Store);
