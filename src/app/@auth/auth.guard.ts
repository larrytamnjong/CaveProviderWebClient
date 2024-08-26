
import { inject } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Router, CanActivateFn} from '@angular/router';

import { tap } from 'rxjs/operators';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(NbAuthService);
  const router = inject(Router);
  return authService.isAuthenticated()
  .pipe(
    tap(authenticated => {
      if (!authenticated) {
        router.navigate(['auth/login']);
        return false;
      }
    }),
  );
};



