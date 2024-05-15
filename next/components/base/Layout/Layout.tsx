import React from 'react';
import { Sidenav } from '../Sidenav';
import { Footer } from '../Footer';
import { PageTopButton } from '../PageTopButton';
import { Box } from '@mui/material';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  // サイドメニューの開閉設定
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main className="flex gap-[10px] p-[10px] h-[100vh]">
      <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box className="bg-white rounded-[10px] w-[100%] overflow-y-scroll scrollable-content">
        <div className='flex flex-col justify-between h-[150vh]'>
          { children }
        </div>
        <div>
          <PageTopButton />
          <Footer />
        </div>
      </Box>
    </main>
  )
};

export default Layout;
