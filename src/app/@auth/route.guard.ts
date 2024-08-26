import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { PermissionData } from '../@core/interfaces/common/permission';
import {  of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

export function RouteGuard(requiredPermission: string): CanActivateFn {
  return (route, state) => {
    const authService = inject(NbAuthService);
    const permissionData = inject(PermissionData);
    const router = inject(Router);

    return authService.isAuthenticated().pipe(
      switchMap((authenticated) => {
        if (!authenticated) {
          router.navigate(['auth/login']);
          return of(false);
        } else {
          return permissionData.getUserPermissionNames().pipe(
            map((permissions: string[]) => {
              if (permissions.includes(requiredPermission)) {
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
