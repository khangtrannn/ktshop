import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QrCodeComponent } from './components/header/components/qr-code/qr-code.component';
import { NotifyComponent } from './components/header/components/notify/notify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QrCodeComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
