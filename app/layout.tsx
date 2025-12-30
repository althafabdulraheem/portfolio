import './globals.css'
import { Poppins } from 'next/font/google'
import DarkModeToggle from '@/components/DarkModeToggle';
import type { Metadata } from 'next'
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify desired weights
});

export const metadata: Metadata = {
  title: 'Althaf Abdul Raheem | Portfolio',
  description: 'Portfolio of Althaf Abdul Raheem',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className='light'>
      <body suppressHydrationWarning className={`${poppins.variable}`}>
        {children}
        <DarkModeToggle />
      </body>
    </html>
  )
}