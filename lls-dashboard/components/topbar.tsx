"use client"

import { useState, useEffect, useRef } from "react"
import { Home, LogOut, User, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

interface TopbarProps {
  userName: string
  userEmail: string
}

export function Topbar({ userName, userEmail }: TopbarProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Get initials from user name
  const initials = userName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  const handleLogout = () => {
    console.log("Logging out...")
    // In a real app, implement actual logout functionality
    setIsUserMenuOpen(false)
  }

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="topbar">
      <div className="topbar-container">
        {/* Left side - Logo/Brand */}
        <div className="topbar-left">
          <div className="brand">
            <span className="brand-text">LLM</span>
          </div>
        </div>

        {/* Center - Navigation (can be expanded later) */}
        <nav className="topbar-center">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link ">
                Home
              </a>
            </li>
          </ul>
        </nav>

        {/* Right side - Theme toggle and User menu */}
        <div className="topbar-right">
          {/* Theme Toggle */}
          <div className="theme-toggle-wrapper">
            <ThemeToggle />
          </div>

          {/* User Menu */}
          <div className="user-menu" ref={userMenuRef}>
            <button
              className="user-menu-trigger"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              aria-expanded={isUserMenuOpen}
              aria-haspopup="true"
            >
              <div className="user-profile">
                <div className="avatar">{initials}</div>
                <div className="user-info">
                  <span className="user-name">{userName}</span>
                  <span className="user-email">{userEmail}</span>
                </div>
              </div>
              <ChevronDown className={`chevron ${isUserMenuOpen ? "chevron-open" : ""}`} size={16} />
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="user-dropdown">
                <div className="dropdown-header">
                  <div className="avatar-large">{initials}</div>
                  <div className="user-details">
                    <span className="dropdown-user-name">{userName}</span>
                    <span className="dropdown-user-email">{userEmail}</span>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-content">
                  <button className="dropdown-item logout-item" onClick={handleLogout}>
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
