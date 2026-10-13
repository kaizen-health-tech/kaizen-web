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
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "How Kaizen works",
        newTab: false,
        path: "/how-it-works",
      },
      {
        id: 22,
        title: "Product updates",
        newTab: false,
        path: "/updates",
      },
    ],
  },
  {
    id: 3,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Family health blog",
        newTab: false,
        path: "/blog",
      },
      {
        id: 32,
        title: "Free caregiver tools",
        newTab: false,
        path: "/tools",
      },
      {
        id: 33,
        title: "Support center",
        newTab: false,
        path: "/support",
      },
    ],
  },
  {
    id: 4,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Kaizen Health",
        newTab: false,
        path: "/about",
      },
      {
        id: 42,
        title: "Careers",
        newTab: false,
        path: "/careers",
      },
      {
        id: 43,
        title: "Contact us",
        newTab: false,
        path: "/contact",
      },
    ],
  },
  {
    id: 5,
    title: "Legal",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Policies & docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 52,
        title: "Privacy policy",
        newTab: false,
        path: "/docs/privacy",
      },
      {
        id: 53,
        title: "Terms & conditions",
        newTab: false,
        path: "/docs/terms",
      },
    ],
  },
];

export default menuData;
