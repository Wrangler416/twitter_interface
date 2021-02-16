import React from "react"

export const themes = {
    dark: {
        color: "white",
        background: "darkblue"
    },
    
    light: {
        color: "black",
        background: "lightblue"
    }
};

const ThemeContext = React.createContext(themes.light)

export default ThemeContext 