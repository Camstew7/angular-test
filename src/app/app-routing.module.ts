import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {DataViewerComponent} from './data-viewer/data-viewer.component'
import {DataListComponent} from './data-list/data-list.component'
// import {DataEntry} from './data-entry/data-entry.component'

const routes: Routes = [
  {
    path: 'list',
    component: DataListComponent,
    data: {
      dataList: [{title:'1', data: 1}, {title:'2', data: 2}, {title:'3', data: 3}]
    }
  },
  {
    path: 'viewer/:id',
    component: DataViewerComponent,
    data: {}
  },
  // {
  //   path:'',
  //   component: DataEntry
  // },
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
