import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {DataViewerComponent} from './data-viewer/data-viewer.component'
import {DataListComponent} from './data-list/data-list.component'
import {DataEntryComponent} from './data-entry/data-entry.component'
import {GetAllResolver} from './common/resolvers/getAll.resolver'

const routes: Routes = [
  {
    path: 'list',
    component: DataListComponent,
    resolve: {
      data: GetAllResolver
    }
  },
  {
    path: 'viewer',
    component: DataViewerComponent,
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
