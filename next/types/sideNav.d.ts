import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type SidenavItems= {
  path: string;
  label: string;
  icon?: IconProp;
  subMenu?: boolean;
  subMenuItems?: SidenavItems[];
};