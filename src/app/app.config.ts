import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';

import { routes } from './app.routes';

import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
  imports: [Header, Footer]
};

