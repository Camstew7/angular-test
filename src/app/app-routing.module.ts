import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {DataViewerComponent} from './data-viewer/data-viewer.component'
import {DataListComponent} from './data-list/data-list.component'
import {DataEntryComponent} from './data-entry/data-entry.component'

const routes: Routes = [
  {
    path: 'list',
    component: DataListComponent,
    data: {
      dataList: [{title:'1', content: 1}, {title:'2', content: 2}, {title:'3', content: 3}]
    }
  },
  {
    path: 'viewer',
    component: DataViewerComponent
  },
  {
    path:'add',
    component: DataEntryComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
