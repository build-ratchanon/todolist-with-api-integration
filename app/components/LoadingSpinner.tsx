"use client"

import React from 'react'

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-12 h-12 border-4 border-[#eaddc5] border-t-[#a0522d] rounded-full animate-spin"></div>
    </div>
  )
}
