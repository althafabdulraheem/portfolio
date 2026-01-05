import './globals.css'
import { Poppins } from 'next/font/google'
import DarkModeToggle from '@/components/DarkModeToggle';
import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify desired weights
});

export const metadata: Metadata = {
  title: 'Althaf Abdul Raheem | Portfolio',
  description:
    'Portfolio of Althaf Abdul Raheem, a Full Stack Developer specializing in Laravel, PHP, and React.',
  keywords: [
    'Althaf Abdul Raheem',
    'Full Stack Developer',
    'Laravel Developer',
    'PHP Developer',
    'React Developer',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',

  },
  metadataBase: new URL('https://atfar.netlify.app/'),

  alternates: {
    canonical: 'https://atfar.netlify.app/',
  },

  openGraph: {
    title: 'Althaf Abdul Raheem | Full Stack Developer',
    description:
      'Explore projects and experience of Full Stack Developer Althaf Abdul Raheem.',
    url: 'https://atfar.netlify.app/',
    siteName: 'Althaf Portfolio',
    images: [
      {
        url: '/og-img.png',
        width: 1200,
        height: 630,
        alt: 'Althaf Abdul Raheem Portfolio',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-img.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className='light'>
      <body suppressHydrationWarning className={`${poppins.variable}  dark:bg-zinc-950`}>
        {children}
        <DarkModeToggle />
        <GoogleTagManager gtmId="G-60C7DPWKC9" />
      </body>
    </html>
  )
}