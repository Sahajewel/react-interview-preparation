import { createContext, useContext, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

type themeContentType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<themeContentType | null>(null);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Use theme must be used inside theme provider");
  }
  return context;
}
function ThemeBox() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        padding: "20px",

        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default function ThemeToggle() {
  return (
    <ThemeProvider>
      <ThemeBox />
    </ThemeProvider>
  );
}
