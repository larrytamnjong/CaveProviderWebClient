import {NgxLoginComponent, NgxRegisterComponent,NgxAuthComponent} from './components';

import {NbAlertModule,NbCardModule,NbIconModule,NbLayoutModule,NbCheckboxModule,NbInputModule,NbButtonModule,} from '@nebular/theme';

import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsModule } from '../@components/components.module';
import { authOptions } from './auth.settings';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpRequest } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NbAuthJWTInterceptor,
  NbAuthModule,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbTokenLocalStorage,
} from '@nebular/auth';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { authSettings } from './access.settings';
import { AuthPipe } from './auth.pipe';
import { RoleProvider } from './role.provider';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { RoleData } from '../@core/interfaces/role';
import { useAnimation } from '@angular/animations';
import { RoleService } from '../@core/services/role.service';



const GUARDS = [AuthGuard];
const PIPES = [AuthPipe];
const COMPONENTS = [
  NgxLoginComponent,
  NgxAuthComponent,
  NgxRegisterComponent,
];

const NB_MODULES = [
  NbIconModule,
  NbLayoutModule,
  NbCardModule,
  NbAlertModule,
  NbCheckboxModule,
  NbInputModule,
  NbButtonModule,
];

export function filterInterceptorRequest(req: HttpRequest<any>): boolean {
  return ['/auth/login', '/auth/sign-up']
    .some(url => req.url.includes(url));
}

@NgModule({
  declarations: [...PIPES, ...COMPONENTS],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentsModule,
    ...NB_MODULES,
    NbAuthModule.forRoot(authOptions),
  ],
  exports: [...PIPES],
  providers: [
    NbSecurityModule.forRoot({
      accessControl: authSettings,
    }).providers,
    {provide: NbRoleProvider, useClass: RoleProvider},
    {provide: NbTokenLocalStorage, useClass: NbTokenLocalStorage},
    {provide: RoleData, useClass: RoleService}, 
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: filterInterceptorRequest },
        { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
    };
  }
}
