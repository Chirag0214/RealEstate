import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-black">
      <nav className="flex justify-between items-center h-[70px] text-white ">
        <div className="flex items-center justify-center  gap-2">
          <img
            className="w-[100px] h-[70px]"
            src="/Dream Home (Postcards).png"
            alt="DREAM HOME"
          />
          <h2 className="text-xl font-bold text-left  text-white">
            <i> DREAM HOME</i>{" "}
          </h2>
        </div>
        <ul className="flex items-center font-bold gap-7 text-lg text-white p-2 m-4">
          <li>
            <Link href="/">
            Home
            </Link>
          </li>
          <li>
            <Link href="#about">
            About
            </Link>
          </li>
          <li>
            <Link href="#contact">
            Contact
            </Link>
          </li>
          <li>
            <Link href="#projects">
            Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;