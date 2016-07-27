import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { HTTP_BINDINGS } from '@angular/http';
import { provide }    from '@angular/core';

bootstrap(AppComponent, [HTTP_PROVIDERS,HTTP_BINDINGS]);