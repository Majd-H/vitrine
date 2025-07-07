import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.config';
import { appConfig } from './app/app.config';
import { Header } from './app/shared/header/header';
import { Footer } from './app/shared/footer/footer';

bootstrapApplication(AppComponent, appConfig);

