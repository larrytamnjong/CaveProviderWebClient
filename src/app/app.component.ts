
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InitUserService } from './@theme/services/init-user.service';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private analytics: AnalyticsService,
              private initUserService: InitUserService) {
            
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }

 
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
