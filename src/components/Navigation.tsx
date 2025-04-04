"use client";

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold font-mono">
            <span className="text-gradient">angelina.dev</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/resume" className="hover:text-primary transition-colors">Resume</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/stats" className="hover:text-primary transition-colors">Stats</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/resume" className="hover:text-primary transition-colors">Resume</Link>
              <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <Link href="/stats" className="hover:text-primary transition-colors">Stats</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 