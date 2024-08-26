import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';  
import { PermissionData } from '../@core/interfaces/common/permission';
import { error } from 'console';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {
  menu = [];

  constructor(  
    private permissionData: PermissionData
  ) {}

  ngOnInit(): void {
    this.updateMenuVisibility();
  }
  updateMenuVisibility(): void {
    this.permissionData.getUserPermissionNames().subscribe(permissions => {
      const userPermissions = Array.isArray(permissions) ? permissions.map(permissions => permissions) : [permissions];
      this.menu = this.filterMenuItems(MENU_ITEMS, userPermissions);
    },
    error => {
      this.menu = this.filterMenuItems(MENU_ITEMS, [])
      alert("Could not connect to the API")
    }
  )
  }


  filterMenuItems(menuItems: any[], userPermissions: string[]): any[] {
    return menuItems.map(item => {
      let isHidden = false;
      if (item.data && item.data.permission) {
        isHidden = !userPermissions.includes(item.data.permission);
      }
      if (item.children) {
        item.children = this.filterMenuItems(item.children, userPermissions);
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
