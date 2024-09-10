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
        title: 'Academic Period', 
        link: '/pages/institution-setup/academic-period',
      },
      // {
      //   title: 'Section', 
      //   link: '/pages/institution-setup/section',
      // },
      // {
      //   title: 'Department',
      //   link: '/pages/institution-setup/department',
        
      // },
      // {
      //   title: 'Class',  
      //   link: '/pages/institution-setup/class',
      // },
      // {
      //   title: 'Course',
      //   link: '/pages/institution-setup/course',
      // },
      
    ],
  },
  {
    title: 'Staff', 
    icon: 'people',
    link: '/pages/ui-features',
    data: {
      permission: 'Staff'
    },
    children: [
      
    ],
  },
  {
    title: 'Student', 
    icon: 'people',
    data: {
      permission: 'Student'
    },
    children: [
      
    ],
  },
  {
    title: 'Result', 
    icon: 'edit-2',
    data: {
      permission: 'Result'
    },
    children: [
      
    ],
  },
  
  {
    title: 'Report Card', 
    icon: 'file',
    data: {
      permission: 'Report Card'
    },
    children: [
     
    ],
  },
  {
    title: 'Transcript', 
    icon: 'folder-outline',
    data: {
      permission: 'Transcript'
    },
    children: [
      
    ],
  },
  {
    title: 'Bursary', 
    icon: 'credit-card-outline',
    data: {
      permission: 'Bursary'
    },
    children: [
     
    ],
  },
  {
    title: 'Accounting', 
    icon: 'bar-chart-outline',
    data: {
      permission: 'Accounting'
    },
    children: [
      
    ],
  },

  {
    title: 'Settings', 
    icon: 'person-outline',
    data: {
      permission: 'Settings'
    },
    children: [
     
    ],
  },

  
];
