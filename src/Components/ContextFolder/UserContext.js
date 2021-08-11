const defaultState = {
    dark: false,
    toggleDark: () => {}
}
const ThemeContext = React.createContext(defaultState);

<ThemeContext.Provider value={{dark, toggleDark}}>
{children}
</ThemeContext.Provider>