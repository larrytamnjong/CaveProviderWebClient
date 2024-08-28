import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MODULES',
    group: true,
  },
  {
    title: 'Institution Setup', 
    icon: 'settings-2-outline',
    data: {
      permission: 'Institution Setup'
    },
    children: [
      {
        title: 'Institution Info',
        link: '/pages/institution-setup/institution-information',
      },
      {
        title: 'Academic Period', //'Tabs',
        link: '/pages/layout/tabs',
      },
      {
        title: 'Section', // 'List'
        link: '/pages/layout/list',
      },
      {
        title: 'Department',//'Infinite List'
        link: '/pages/layout/infinite-list',
        
      },
      {
        title: 'Class',  //'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Course', //'Tabs',
        link: '/pages/layout/tabs',
      },
      
    ],
  },
  {
    title: 'Staff', // title: 'UI Features',
    icon: 'people',
    link: '/pages/ui-features',
    data: {
      permission: 'Staff'
    },
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Student', // title: 'Maps',
    icon: 'people',
    data: {
      permission: 'Student'
    },
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Result', //title: 'Forms',
    icon: 'edit-2',
    data: {
      permission: 'Result'
    },
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  
  {
    title: 'Report Card', //title: 'Modal & Overlays',
    icon: 'file',
    data: {
      permission: 'Report Card'
    },
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Transcript', //title: 'Extra Components',
    icon: 'folder-outline',
    data: {
      permission: 'Transcript'
    },
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Bursary', //Charts
    icon: 'credit-card-outline',
    data: {
      permission: 'Bursary'
    },
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Accounting', //Charts
    icon: 'bar-chart-outline',
    data: {
      permission: 'Accounting'
    },
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },

  {
    title: 'Settings', //Charts
    icon: 'person-outline',
    data: {
      permission: 'Settings'
    },
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },

  
];
