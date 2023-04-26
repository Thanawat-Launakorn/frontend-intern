import React, { useState, useEffect } from "react";

// const getInitialTheme = (): string => {
//   if (typeof window !== "undefined" && window.localStorage) {
//     const storedPrefs = window.localStorage.getItem("theme");
//     if (typeof storedPrefs === "string") {
//       return storedPrefs;
//     }

//     const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
//     if (userMedia.matches) {
//       return "dark";
//     }
//   }

//   // If you want to use light theme as the default, return "light" instead
//   return "light";
// };

type ThemeProviderProps = {
  initialTheme?: string;
  children: React.ReactNode;
};

interface ThemeContextProps {
  useTheme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({});

export default function ThemeProvider({
  initialTheme,
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  console.log(value);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement; //rootElement
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => rawSetTheme(theme), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
