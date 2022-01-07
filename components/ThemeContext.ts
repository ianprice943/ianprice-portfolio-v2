import React, { useContext } from 'react';

export type ThemeContext = {
    theme: string,
    setTheme: (newTheme: string) => void
}

export const PageThemeContext = React.createContext<ThemeContext>({
    theme: 'light',
    setTheme: () => {}
});

export const useThemeContext = () => useContext(PageThemeContext);