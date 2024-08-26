
import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { NbAuthService } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-auth',
  styleUrls: ['./auth.component.scss'],
  templateUrl: './auth.component.html',
})

export class NgxAuthComponent implements OnDestroy {

  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  constructor(protected auth: NbAuthService, protected location: Location) {

    this.subscription = auth.onAuthenticationChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  back() {
    this.location.back();
    return false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
