import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UsersService } from '../../../@core/services/users.service';
import { UserData } from '../../../@core/interfaces/common/users';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  defaultPicture = 'assets/images/default-profile.jpg';

  

  currentTheme = 'default';

  userMenu = [
    { title: 'Profile'},
    { title: 'Log out', link: '/auth/logout' },
  ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private userService: UserData,
              private breakpointService: NbMediaBreakpointsService) {

        
  }

  ngOnInit() {

    this.userService.getSignedInUserDetails().subscribe((user) => {
      this.user = user;
    },
    error => {
      alert("Could not connect to the API")
    }

  );

    this.currentTheme = this.themeService.currentTheme;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

  
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

 
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    this.menuService.collapseAll();
    return false;
  }
}
