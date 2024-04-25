import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#FFFFFF')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#FFFFFF')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-10 w-full duration-300 ease-in"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-4 text-white">
        <Link href="/">
          <h1 className="text-4xl font-bold" style={{ color: `${textColor}` }}>
            Captur
          </h1>
        </Link>
        <ul className="hidden gap-4 sm:flex" style={{ color: `${textColor}` }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Movbile Button */}
        <div className="z-10 block sm:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'absolute inset-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden'
              : 'absolute inset-y-0 -left-full right-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden'
          }
        >
          <ul>
            <li
              className="p-4 text-4xl hover:text-gray-500"
              onClick={handleNav}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className="p-4 text-4xl hover:text-gray-500"
              onClick={handleNav}
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              className="p-4 text-4xl hover:text-gray-500"
              onClick={handleNav}
            >
              <Link href="/portfolio">Work</Link>
            </li>
            <li
              className="p-4 text-4xl hover:text-gray-500"
              onClick={handleNav}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
