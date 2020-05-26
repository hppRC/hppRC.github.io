import React from 'react';
import { ColorModeContainer } from 'src/store';

export const ThemeProvider: React.FC = ({ children }) => {
  const { colorMode } = ColorModeContainer.useContainer();

  return (
    <div id='theme-provider' className={colorMode}>
      {children}
    </div>
  );
};
