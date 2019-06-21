import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LightboxModule, SplitButtonModule,DataTableModule } from 'primeng/primeng';
import { GalleriaModule,DropdownModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HTTP_INTERCEPTORS, HttpHandler,HttpClientModule  } from '@angular/common/http';
import { CacheInterceptorService } from './cache-interceptor.service';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { DetailPageComponent } from './main-page/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    HttpModule,
    FormsModule ,
    DropdownModule,
    LightboxModule, SplitButtonModule,GalleriaModule ,PickListModule,DataTableModule, AppRoutingModule],
  providers: [    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
