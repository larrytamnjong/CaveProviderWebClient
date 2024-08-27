
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthSocialLink, NbAuthService, NbAuthResult, NbTokenStorage } from '@nebular/auth';
import { getDeepFromObject } from '../../helpers';
import { EMAIL_PATTERN, NUMBERS_PATTERN} from '../constants';

@Component({
  selector: 'ngx-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxRegisterComponent implements OnInit {

  
  minLength: number = this.getConfigValue('forms.validation.password.minLength');
  maxLength: number = this.getConfigValue('forms.validation.password.maxLength');
  isFamilyNameRequired: boolean = this.getConfigValue('forms.validation.familyName.required');
  isGivenNameRequired: boolean = this.getConfigValue('forms.validation.givenName.required');
  isPhoneNumberRequired: boolean = this.getConfigValue('forms.validation.phoneNumber.required');
  isUserNameRequired: boolean = this.getConfigValue('forms.validation.userNameRequired.required');
  isEmailRequired: boolean = this.getConfigValue('forms.validation.email.required');
  isPasswordRequired: boolean = this.getConfigValue('forms.validation.password.required');
  redirectDelay: number = this.getConfigValue('forms.register.redirectDelay');
  showMessages: any = this.getConfigValue('forms.register.showMessages');
  strategy: string = this.getConfigValue('forms.register.strategy');
  socialLinks: NbAuthSocialLink[] = this.getConfigValue('forms.login.socialLinks');

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  registerForm: FormGroup;
  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    private tokenStorageService: NbTokenStorage,
    private fb: FormBuilder,
    protected router: Router) {
  }

  get familyName() { return this.registerForm.get('familyName'); }
  get givenName() { return this.registerForm.get('givenName'); }
  get phoneNumber() { return this.registerForm.get('phoneNumber'); }
  get userName() { return this.registerForm.get('userName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  
  ngOnInit(): void {
    const requiredValidators = [
      Validators.required,
    ];
    const passwordValidators = [
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
      ];
      const emailValidators = [
        Validators.pattern(EMAIL_PATTERN),
      ];

      const phoneNumberValidators = [
        Validators.pattern(NUMBERS_PATTERN),
      ]


    this.isFamilyNameRequired && requiredValidators.push(Validators.required);
    this.isGivenNameRequired && requiredValidators.push(Validators.required);
    this.isPhoneNumberRequired && phoneNumberValidators.push(Validators.required);
    this.isUserNameRequired && requiredValidators.push(Validators.required);
    this.isEmailRequired && emailValidators.push(Validators.required);
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.registerForm = this.fb.group({
      familyName: this.fb.control('', [...requiredValidators]),
      givenName: this.fb.control('', [...requiredValidators]),
      phoneNumber: this.fb.control('', [...phoneNumberValidators]),
      userName: this.fb.control('', [...requiredValidators]),
      email: this.fb.control('', [...emailValidators]),
      password: this.fb.control('', [...passwordValidators]),
      confirmPassword: this.fb.control('', [...passwordValidators]),
    });
  }

  register(): void {
    this.tokenStorageService.clear();
    this.user = this.registerForm.value;
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.register(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
