"use client"

import { Providers } from "#/app/provider";
import "#/styles/main.css";

type LayoutProps = { children: React.ReactNode; }

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <html>
        <body>
        <Providers>
          {children}
        </Providers>
        </body>
      </html>
    </>
  );
}