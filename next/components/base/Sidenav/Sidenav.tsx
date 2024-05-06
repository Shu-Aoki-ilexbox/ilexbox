import React from 'react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CssBaseline, Divider, Drawer, IconButton, List } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SIDENAV_ITEMS } from '@/data/sideNav';
import SidenavSingleItem from './SidenavSingleItem';
import SidenavMultiple from './SidenavMultiple';
import SidenavMultipleItem from './SidenavMultipleItem';


export const Sidenav = () => {
// サイドメニューの開閉設定
const [isOpen, setIsOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setIsOpen(true);
};

const handleDrawerClose = () => {
  setIsOpen(false);
};

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          width: isOpen ? 220 : 64,
          '.MuiPaper-root': {
            width: isOpen ? 220 : 64,
            position: 'relative',
            borderRadius: '10px',
            backgroundColor: '#ffffffcc',
            }
          }}
        >
        {/* 開閉ボタン */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isOpen ? 'flex-end' : 'center',
            paddingInline: '8px',
            minHeight: 64,
          }}
        >
          <IconButton onClick={isOpen ? handleDrawerClose : handleDrawerOpen}>
            <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
          </IconButton>
        </div>
        {/* 開閉ボタン end */}
        <Divider />
        <List>
          {SIDENAV_ITEMS.map((item) => {
            return (
              <>
                {item.subMenu ? (
                  <SidenavMultiple key={item.label} label={item.label} icon={item.icon} isOpen={isOpen}>
                    {item.subMenuItems?.map((subItem) => {
                      return (
                        <SidenavMultipleItem key={subItem.label} path={subItem.path} label={subItem.label} />
                      );
                    })}
                  </SidenavMultiple>
                ) : (
                  <SidenavSingleItem key={item.label} path={item.path} label={item.label} icon={item.icon} isOpen={isOpen} />
                )}
              </>
            )
          })}
        </List>
      </Drawer>
    </>
  )
}

export default Sidenav;