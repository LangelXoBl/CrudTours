import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './platillas/header/header.component';
import { FooterComponent } from './platillas/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//ruteo
import { RoutingComponent } from './app-routing.module';
//usar api
import {HttpClientModule} from '@angular/common/http';
//usar forms en todo el sistema(se declara en app.component y en los demas components donde se use)
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
