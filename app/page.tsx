"use client";
import { useState } from 'react';
import { bold, regular} from '#/components/fonts/fonts';
import { Checkbox} from '@nextui-org/react';
import clsx from "clsx"
import FileInput from '#/components/FileInput/FileInput';
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
      <div>
        <h1 className={clsx("rounded-full text-[4rem] text-[#E3E3E3] text-center", bold.className)}>Check <span className='bg-clip-text text-transparent bg-gradient-to-tr from-[#00c6ff] to-[#0072ff]'>File Input</span> Component</h1>
        <h4 className={clsx("rounded-full text-md text-[#E3E3E3] text-center mb-3", regular.className)}>This is the first version of a NextUI alike File Input featuring multiple selection and type filter </h4>
        <div
          className='flex flex-col gap-2 mb-4 justify-center'
        >
          <h4 className={clsx('text-center', regular.className

          )}>Choose Filters</h4>
          <div className='flex gap-4 justify-center'>
            <Checkbox checked={isMultiple} onChange={handleMultipleChange} className={clsx(regular.className, 'font-sm [&_span]:before:bg-[#2A2B2C]')}>Multiple Files</Checkbox>
            <Checkbox checked={accept.includes('image/png') || accept.includes('image/jpeg')} onChange={handleAcceptChange} className={clsx(regular.className, 'font-sm [&_span]:before:bg-[#2A2B2C]')}>Images Only</Checkbox>
          </div>
        </div>
        <FileInput multiple={isMultiple} accept={accept}></FileInput>
      </div>
    </main>
  )
}