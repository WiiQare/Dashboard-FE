import { useTheme } from 'next-themes';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkMode = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [isDarkMode, setDarkMode] = React.useState(theme === "light" ? false : true);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    let state: boolean;
    currentTheme == "dark" ? state = true : state = false;
    // setDarkMode({ state })
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
        isDarkMode ? setTheme(`light`) : setTheme("dark")
    };
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
        />
    );
}
export default DarkMode

