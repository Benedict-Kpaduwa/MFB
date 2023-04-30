import Link from "next/link";
import Image from "next/image";
import {useState, useEffect } from 'react'

const { AnimatePresence, motion } = require("framer-motion");

const Navbar = () => {
  return (
    <div className='border-b-2 py-4 bg-black top-0 left-0 fixed w-full z-10'>
      <h1 className="flex justify-center text-gray-100 mx-auto">MB TOKENS</h1>
    </div>
  );
};

export default Navbar;
