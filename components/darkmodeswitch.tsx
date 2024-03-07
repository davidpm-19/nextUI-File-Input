"use client";

import React, { useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { regular } from '#/components/fonts/fonts';
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"


export const DarkModeSwitch = () => {
  const { setTheme, resolvedTheme } = useNextTheme();
  const [isToggled, setToggle] = useState(false)


  return (
    <>
      <Classic placeholder={null} className="[&_svg]:w-[2rem] [&_svg]:h-[2rem]" toggled={resolvedTheme === "dark" ? true : false} toggle={(e: any) => setTheme(e ? "dark" : "light")} />
    </>
  );
};

