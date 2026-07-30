import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "How It Works",
    newTab: false,
    path: "/how-it-works",
  },
  {
    id: 3,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Updates",
        newTab: false,
        path: "/updates",
      },
      {
        id: 32,
        title: "Family Health Blog",
        newTab: false,
        path: "/blog",
      },
      {
        id: 33,
        title: "About",
        newTab: false,
        path: "/about",
      },
      {
        id: 34,
        title: "Careers",
        newTab: false,
        path: "/careers",
      },
      {
        id: 35,
        title: "Policies & Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 36,
        title: "Support",
        newTab: false,
        path: "/support",
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
