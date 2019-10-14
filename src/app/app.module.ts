import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';

import {HttpClientModule, HttpClient} from '@angular/common/http'
//components

import {DataViewerComponent} from './data-viewer/data-viewer.component'
import {DataListComponent} from './data-list/data-list.component'
import {DataEntryComponent} from './data-entry/data-entry.component'

//resolvers

import {GetAllResolver} from './common/resolvers/getAll.resolver'

//service

import {DataService} from './common/services/data.service'
@NgModule({
  declarations: [
    AppComponent,
    DataViewerComponent,
    DataListComponent,
    DataEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetAllResolver,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
