import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from 'react-icons/md';

export const themes = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
];

export const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/user-profile',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export const years = ['2023', '2024'];
