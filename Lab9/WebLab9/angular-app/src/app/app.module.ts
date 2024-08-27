import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransportСompanyModule } from './transportсompany/transportсompany.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TransportСompanyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
