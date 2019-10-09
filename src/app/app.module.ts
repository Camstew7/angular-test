import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';

//components

import {DataViewerComponent} from './data-viewer/data-viewer.component'
import {DataListComponent} from './data-list/data-list.component'
import {DataEntryComponent} from './data-entry/data-entry.component'

@NgModule({
  declarations: [
    AppComponent,
    DataViewerComponent,
    DataListComponent,
    DataEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
