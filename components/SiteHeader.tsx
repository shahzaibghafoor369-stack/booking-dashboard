"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle.client";

export default function SiteHeader(){
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-teal-500 flex items-center justify-center text-white font-bold">BP</div>
          <div>
            <Link href="/admin"><h1 className="text-lg font-semibold text-slate-800 dark:text-white">BookingPlatform — Admin</h1></Link>
            <p className="text-xs text-slate-500 dark:text-slate-400">Multi-Agent Booking & Commission</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/demo" className="text-slate-600 dark:text-slate-300">Demo</Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
