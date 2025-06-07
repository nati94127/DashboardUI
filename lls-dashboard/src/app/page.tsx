"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { LanguageLearningDashboard } from "../../components/language-learning-dashboard"
import { ThemeProvider } from "../../components/theme-provider";
import { Topbar } from "../../components/topbar";

export default function Home() {
  return (
    
<ThemeProvider defaultTheme="system" storageKey="language-dashboard-theme">
      <div className="app-container">
        <Topbar userName="Alex Johnson" userEmail="alex@example.com" />
        <main className="main-content">
          <LanguageLearningDashboard />
        </main>
      </div>
    </ThemeProvider>
  
  );
}
