"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(()=> {
    setMounted(true);
    const prefer = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefer ? "dark" : "light");
  },[]);
  if (!mounted) return null;
  return (
    <button
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }}
      className="px-2 py-1 rounded border"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}
