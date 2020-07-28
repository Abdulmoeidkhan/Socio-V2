import React, { createContext } from "react";
import { useImmerReducer } from "use-immer"




export const ThemeContext = createContext(null);
export const ThemeContextChanger = createContext(null);




let themeChanger = (draft, action) => {
    switch (action.type) {
        case "theme1":
            draft.colors = {
                color1: "#08979C",
                color2: "#fff",
                color3: "#00474f",
                color4: "#fadb14",
                type: "light"
            }
            sessionStorage.setItem("colors", JSON.stringify(draft))
            return;
        default:
            draft.colors = initialState.colors
            return;
    }
}


let initialState = JSON.parse(sessionStorage.getItem("colors")) || {
    colors: {
        color1: "#08979C",
        color2: "#fff",
        color3: "#00474f",
        color4: "#fadb14",
        type: "light",
    }
}

export let ThemeWrapper = (props) => {
    let [color, dispatch] = useImmerReducer(themeChanger, initialState)
    return (
        <ThemeContextChanger.Provider value={{ dispatch }}>
            <ThemeContext.Provider value={color}>
                {props.children}
            </ThemeContext.Provider>
        </ThemeContextChanger.Provider>
    )
}


