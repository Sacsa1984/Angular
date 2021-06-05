import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { InfoCerteficatComponent } from './info-certeficat/info-certeficat.component';
import { CertificatComponent } from './certificat/certificat.component';
import { MyFotoComponent } from './my-foto/my-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInfoComponent,
    
    InfoCerteficatComponent,
    CertificatComponent,
    MyFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
