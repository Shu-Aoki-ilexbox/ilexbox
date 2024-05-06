import { SidenavItems } from '@/types/sideNav'
import { faCake, faDashboard, faEarth, faHouse, faSnowflake } from '@fortawesome/free-solid-svg-icons';

export const SIDENAV_ITEMS: SidenavItems[] = [
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
