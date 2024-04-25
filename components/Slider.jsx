import React from 'react'
import Image from 'next/image'

import { SliderData } from './SliderData'

const Slider = ({ slides }) => {
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {SliderData.map((slide) => {
          return (
            <Image
              src={slide.image}
              width={500}
              height={500}
              key={slide.id}
              alt={slide.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Slider
