

import { NbAuthService, NbAuthOAuth2JWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PermissionData } from '../@core/interfaces/common/permission';

@Injectable()
export class RoleProvider extends NbRoleProvider {

  constructor(private authService: NbAuthService, private permissionData: PermissionData) {
    super();
  }

  getRoles(roles: any): string | string[] {
    if (Array.isArray(roles)) {
      roles = roles.map(element => {
        return element;
      });
    } else {
      roles = roles;
    }
    return roles;
  }

  getRole(): Observable<string | string[]> {
    return this.authService.getToken()
      .pipe(
        map((token: NbAuthOAuth2JWTToken) => {
          const payload = token.getAccessTokenPayload();
          console.log(payload);

          const roleClaim = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          return !!(token.isValid() && roleClaim) ? this.getRoles(roleClaim) : 'guest';
        }),
      );
  }
}
