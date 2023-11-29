import { ReactNode, createContext, useState } from "react";

export const useTheme = createContext("dark");

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <useTheme.Provider value={theme}>
                <button className="button__theme" onClick={toggleTheme}>Changer le thème: {theme}</button>
                {children}
            </useTheme.Provider>
        </>
    )
}