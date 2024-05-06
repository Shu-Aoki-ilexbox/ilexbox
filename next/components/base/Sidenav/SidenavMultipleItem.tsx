import { ListItem } from "@mui/material";
import Link from "next/link";
import React from "react";

//型エイリアス
type SidenavMultipleItemProps = {
  path: string;
  label: string;
};

export const SidenavMultipleItem: React.FC<SidenavMultipleItemProps> = ({path, label}) => {
  return (
    <ListItem
      sx={{
        ':hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          cursor: 'pointer',
        },
        'a': { width: '100%' }
      }}
    >
      <Link href={path}>{label}</Link>
    </ListItem>
  )
}

export default SidenavMultipleItem
