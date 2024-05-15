import React from 'react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CssBaseline, Divider, Drawer, IconButton, List } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidenavSingleItem from './SidenavSingleItem';
import SidenavMultiple from './SidenavMultiple';
import SidenavMultipleItem from './SidenavMultipleItem';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCake, faDashboard, faEarth, faHouse, faSnowflake } from '@fortawesome/free-solid-svg-icons';


export type SidenavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type SidenavItems = {
  path: string;
  label: string;
  icon?: IconProp;
  subMenu?: boolean;
  subMenuItems?: SidenavItems[];
};

const SIDENAV_ITEMS: SidenavItems[] = [
  {
    path: "aaa",
    label: "AAA",
    icon: faHouse,
  },
  {
    path: "bbb",
    label: "BBB",
    icon: faSnowflake,
  },
  {
    path: "ccc",
    label: "CCC",
    icon: faEarth,
  },
  {
    path: "ddd",
    label: "DDD",
    icon: faCake,
    subMenu: true,
    subMenuItems: [
      { path: "qqq", label: "QQQ" },
      { path: "www", label: "WWW" },
      { path: "ppp", label: "PPP" },
    ]
  },
  {
    path: "eee",
    label: "EEE",
    icon: faDashboard,
    subMenu: true,
    subMenuItems: [
      { path: "zzz", label: "ZZZ" },
      { path: "xxx", label: "XXX" },
      { path: "yyy", label: "YYY" },
    ]
  },
];

export const Sidenav = ({isOpen, setIsOpen}: SidenavProps) => {
// サイドメニューの開閉設定
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
          // height: 'calc(100vh - 20px)',
          // position: 'fixed',
          '.MuiPaper-root': {
            width: isOpen ? 220 : 64,
            borderRadius: '10px',
            backgroundColor: '#ffffffcc',
            position: 'relative',
            borderRight: 'none',
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