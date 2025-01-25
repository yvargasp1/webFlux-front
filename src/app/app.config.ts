import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';
import { provideStore } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './state/effects/products.effects';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { provideStorage, getStorage } from '@angular/fire/storage'
import { environment } from '../environments/environtment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule),httpInterceptorProviders,provideStore(ROOT_REDUCERS),provideStoreDevtools({
    name :'TEST'
  }),provideEffects([ProductsEffects]),
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
]
};
