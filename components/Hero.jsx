import React from 'react'

export const Hero = () => {
  return (
    <div className="custom-img mb-12 flex h-screen items-center justify-center bg-cover bg-fixed bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 z-[2] bg-black/70"></div>
      <div className="z-[2] -ml-40 -mt-40 p-5 text-white">
        <h2 className="text-5xl font-bold">Heading</h2>
        <p className="py-5 text-xl">Message</p>
        <button className="border px-8 py-2">Book</button>
      </div>
    </div>
  )
}
