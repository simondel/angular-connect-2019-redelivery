import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { injectMocks, Scenarios } from 'data-mocks';

if (environment.production) {
  enableProdMode();
}

if (!environment.production) {
  const scenarios: Scenarios = {
    default: [
      {
        url: /login/,
        method: 'GET',
        response: {},
        responseCode: 200,
        delay: 10000
      },
      {
        url: /users\/dave/,
        method: 'GET',
        response: { name: 'dave', username: 'dave@domain.dev' },
        responseCode: 200,
        delay: 300
      }
    ],
    usersFound: [
      {
        url: /users\/dave/,
        method: 'GET',
        response: { name: 'dave', username: 'dave@domain.dev', age: 30 },
        responseCode: 200,
        delay: 300
      },
      {
        url: /users\/freddy/,
        method: 'GET',
        response: { name: 'freddy', username: 'freddy@domain.dev', age: 48 },
        responseCode: 200,
        delay: 300
      }
    ]
  }
  injectMocks(scenarios, 'usersFound');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
