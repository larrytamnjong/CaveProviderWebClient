
import { Observable } from 'rxjs';
import { User, UserData } from '../../@core/interfaces/users';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NbJSThemesRegistry, NbThemeService } from '@nebular/theme';

@Injectable()
export class InitUserService {
    constructor(
        protected usersService: UserData,
        protected jsThemes: NbJSThemesRegistry,
        protected themeService: NbThemeService) { }

}
