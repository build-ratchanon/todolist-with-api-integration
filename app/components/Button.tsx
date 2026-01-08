"use client"

import React from 'react'

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  className?: string
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg text-white font-semibold transition-all ${className}`}
    >
      {children}
    </button>
  )
}
