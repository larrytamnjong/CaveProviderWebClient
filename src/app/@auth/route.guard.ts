import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { RoleData } from '../@core/interfaces/common/role';
import {  of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { NbRoleProvider } from '@nebular/security';

export function RouteGuard(requiredPermission: string): CanActivateFn {
  return (route, state) => {
    const authService = inject(NbAuthService);
    const roleData = inject(RoleData);
    const router = inject(Router);
    const roleProvider = inject(NbRoleProvider);
   
   
    // roleProvider.getRole()
    // .pipe(
    //   map(role => {
    //     const roles = role instanceof Array ? role : [role];
    //     return roles;
    //   })
    // )
    // .subscribe(roles => {
   
    // });

    return authService.isAuthenticated().pipe(
      switchMap((authenticated) => {
        if (!authenticated) {
          router.navigate(['auth/login']);
          return of(false);
        } else {
          return roleData.getSignedInUserRoles().pipe(
            map((roles: string[]) => {
              if (roles.includes(requiredPermission)) {
                return true;
              } else {
                router.navigate(['pages/404']); 
                return false;
              }
            }),
            catchError(() => {
              router.navigate(['pages/404']);
              return of(false);
            })
          );
        }
      }),
      catchError(() => {
        router.navigate(['pages/404']);
        return of(false);
      })
    );
  };
}
