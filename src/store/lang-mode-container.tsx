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
  const langList: LangMode[] = [`en-US`, `ja-JP`];

  useEffect(() => {
    localStorage.setItem(`lang`, langMode);
  }, [langMode]);

  const toggle = useCallback(() => {
    setLangMode((mode) => {
      const nowIndex = langList.indexOf(mode);
      const nextIndex = (nowIndex + 1) % langList.length;
      return langList[nextIndex];
    });
  }, []);

  return { langMode, toggle, setLangMode };
};

export const langModeContainer = createContainer(Store);
