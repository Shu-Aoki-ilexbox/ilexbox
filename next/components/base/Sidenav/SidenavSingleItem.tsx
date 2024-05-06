import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import React from 'react';

//型エイリアス
type SidenavSingleItemProps = {
  path: string;
  label: string;
  icon: IconProp | undefined;
  isOpen: boolean;
};

export const SidenavSingleItem: React.FC<SidenavSingleItemProps> = ({path, label, icon, isOpen}) => {
  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: isOpen ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <Link href={path} className='flex items-center'>
          {icon && (
            <FontAwesomeIcon icon={icon} className='w-[24px]'/>
          )}
          <ListItemText primary={label}
            sx={{
              opacity: isOpen ? 1 : 0,
              width: isOpen ? 'auto' : 0,
              marginLeft: isOpen ? '10px' : 0,
            }}
          />
        </Link>
      </ListItemButton>
    </ListItem>
  )
}

export default SidenavSingleItem;
