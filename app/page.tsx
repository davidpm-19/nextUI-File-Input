"use client";
import { useState } from 'react';
import { bold, regular} from '#/components/fonts/fonts';
import { Checkbox} from '@nextui-org/react';
import clsx from "clsx"
import FileInput from '#/components/FileInput/FileInput';
import { DarkModeSwitch } from '#/components/darkmodeswitch';
export default function Content() {
  const [isMultiple, setIsMultiple] = useState(false);
  const [accept, setAccept] = useState('');

  const handleMultipleChange = () => {
    setIsMultiple(!isMultiple);
  };

  const handleAcceptChange = () => {
    setAccept(accept ? '' : 'image/*');
  };

  return (
    <main>
      <div className='fixed z-100 top-[1rem] left-[1rem]'>
      <DarkModeSwitch/>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className={clsx("rounded-full text-[3rem] md:text-[4rem] text-foreground text-center", bold.className)}>Check <br className=' block md:hidden'/><span className='bg-clip-text text-transparent bg-gradient-to-tr from-clip_bg_start to-clip_bg_end'>File Input</span> Component</h1>
        <h4 className={clsx("rounded-full text-md text-foreground text-center mb-3", regular.className)}>This is the first version of a NextUI alike File Input featuring multiple selection and type filter </h4>
        <div
          className='flex flex-col gap-2 mb-4 justify-center'
        >
          <h4 className={clsx('text-center', regular.className

          )}>Choose Filters</h4> 
          <div className='flex gap-4 justify-center'>
            <Checkbox checked={isMultiple} onChange={handleMultipleChange} className={clsx(regular.className, 'font-sm [&_span]:before:bg-interactive_bg')}>Multiple Files</Checkbox>
            <Checkbox checked={accept.includes('image/png') || accept.includes('image/jpeg')} onChange={handleAcceptChange} className={clsx(regular.className, 'font-sm [&_span]:before:bg-interactive_bg')}>Images Only</Checkbox>
          </div>
        </div>
        <FileInput multiple={isMultiple} accept={accept}></FileInput>
      </div>
    </main>
  )
}