import React from 'react'
import { Sidenav } from '../Sidenav';
import { Footer } from '../Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex gap-[10px] p-[10px] ">
      <Sidenav />
      <div className="flex flex-col justify-between w-[100%] h-[100vh]">
        { children }
        <Footer />
      </div>
    </main>
  )
}

export default Layout;
