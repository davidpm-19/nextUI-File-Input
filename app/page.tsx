"use client";
import localFont from 'next/font/local'
import clsx from "clsx"
import StarsCanvas from '#/components/Background/StarBackground';
const myFont = localFont({ src: '../components/fonts/font.ttf' })
export default function Content() {
  return (
      <main>
        <StarsCanvas />
        <div>
          <h1 className={clsx("rounded-full text-[4rem] text-[#E3E3E3]", myFont.className)}>Coming Soon</h1> 
        </div> 
      </main>
  )
}