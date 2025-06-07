"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={18} />
      case "dark":
        return <Moon size={18} />
      case "system":
        return <Monitor size={18} />
      default:
        return <Sun size={18} />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light"
      case "dark":
        return "Dark"
      case "system":
        return "System"
      default:
        return "Light"
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="topbar-theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
      title={`Current: ${getLabel()}`}
    >
      {getIcon()}
    </button>
  )
}
