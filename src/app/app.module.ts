import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkosComponent } from './akos/akos.component';
import { HomeComponent } from './home/home.component';
import { VajkComponent } from './vajk/vajk.component';
import { MartinComponent } from './martin/martin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AkosComponent,
    HomeComponent,
    VajkComponent,
    MartinComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
