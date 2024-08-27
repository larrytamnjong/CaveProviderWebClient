import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';  
import { RoleData } from '../@core/interfaces/common/role';
import { error } from 'console';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {
  menu = [];

  constructor(  
    private roleData: RoleData
  ) {}

  ngOnInit(): void {
    this.updateMenuVisibility();
  }
  updateMenuVisibility(): void {
    this.roleData.getSignedInUserRoles().subscribe(roles => {
      const userRole = Array.isArray(roles) ? roles.map(roles => roles) : [roles];
      this.menu = this.filterMenuItems(MENU_ITEMS, userRole);
    },
    error => {
      this.menu = this.filterMenuItems(MENU_ITEMS, [])
      alert("Could not connect to the API")
    }
  )
  }


  filterMenuItems(menuItems: any[], userRole: string[]): any[] {
    return menuItems.map(item => {
      let isHidden = false;
      if (item.data && item.data.permission) {
        isHidden = !userRole.includes(item.data.permission);
      }
      if (item.children) {
        item.children = this.filterMenuItems(item.children, userRole);
        if (isHidden) {
          item.children = item.children.map(child => ({ ...child, hidden: true }));
        }
      }
      return {
        ...item,
        hidden: isHidden,
      };
    }).filter(item => !item.hidden);  
  }
}
