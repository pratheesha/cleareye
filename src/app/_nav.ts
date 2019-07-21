interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    divider: true
  },
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'icon-home'
  },
  {
    name: 'Insights',
    url: '',
    icon: 'icon-chart'
  },
  {
    name: 'Settings',
    url: '',
    icon: 'icon-settings'
  },
 
  {
    divider: true
  },  
];
