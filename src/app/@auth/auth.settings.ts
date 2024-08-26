

import { NbAuthOAuth2JWTToken, NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from '../../environments/environment';

export const authOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      baseEndpoint: environment.identityUrl,
      name: 'email',
      token: {
        class: NbAuthOAuth2JWTToken,
        key: 'data',
      },
      login: {
        endpoint: '/Authentication/signin',
        method: 'post',
      },
      register: {
        endpoint: '/Authentication/signup',
        method: 'post',
      },
      errors: {
        key: 'errors',
      },
      messages: {
        key: 'messages'
      },
      logout: {
        endpoint: '/Authentication/signout',
        method: 'post',
      },
      // requestPass: {
      //   endpoint: '/auth/request-pass',
      //   method: 'post',
      // },
      // resetPass: {
      //   endpoint: '/auth/reset-pass',
      //   method: 'post',
      // },
      // refreshToken: {
      //   endpoint: '/auth/refresh-token',
      //   method: 'post',
      // },
    }),
  ],
  forms: {
    validation: {
      fullName: {
        required: true,
        minLength: 6,
        maxLength: 20,
      },
    },
  },
};
