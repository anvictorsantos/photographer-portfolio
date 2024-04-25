import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

import { SliderData } from './SliderData'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className="mx-auto max-w-[1240px]" id="gallery">
      <h1 className="p-4 text-center text-2xl font-bold">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? 'opacity-100 duration-1000 ease-in'
                  : 'opacity-0'
              }
              key={slide.id}
            >
              <FaArrowCircleLeft
                className="absolute left-[30px] top-1/2 z-[2] cursor-pointer select-none text-white/70"
                onClick={prevSlide}
                size={50}
              />
              {index === current && (
                <Image
                  alt={slide.description}
                  height={600}
                  objectFit="cover"
                  src={slide.image}
                  width={1440}
                />
              )}
              <FaArrowCircleRight
                className="absolute right-[30px] top-1/2 z-[2] cursor-pointer select-none text-white/70"
                onClick={nextSlide}
                size={50}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
