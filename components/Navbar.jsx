import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-10 w-full duration-300 ease-in">
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-4 text-white">
        <Link href="/">
          <h1 className="text-4xl font-bold">Captur</h1>
        </Link>
        <ul className="gap-4 font-bold sm:flex">
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
        <div className="z-10 block sm:hidden">
          <AiOutlineMenu size={20} />
        </div>
        {/* Mobile Menu */}
        <div className="absolute inset-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden">
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/portfolio">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
