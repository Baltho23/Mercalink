import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import * as React from "react";
import { Providers } from './providers';
import Nav from './components/nav/nav';
import { AuthProvider } from './services/auth.provider';
import Footer from './components/footer/footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MercaLink',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"/>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      </head>
      
      <body className={inter.className}>
        <AuthProvider>
          <Nav></Nav>
          <Providers>
            {children}
          </Providers>
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  )
}
