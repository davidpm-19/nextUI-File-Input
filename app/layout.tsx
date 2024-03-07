import { Providers } from "#/app/provider";
import "#/styles/main.css";
import "@theme-toggles/react/css/Classic.css"
import type { Metadata } from 'next';
type LayoutProps = { children: React.ReactNode; }

export const metadata: Metadata = {
  title: 'File Input Component',
  description: 'FileInput NextUI Component',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers> 
          {children}
        </Providers>
      </body>
    </html>
  )
}
