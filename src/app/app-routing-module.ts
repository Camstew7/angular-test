import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {DataViewer} from './data-viewer/data-viewer.component'
import {DataList} from './data-list/data-list.component'
import {DataEntry} from './data-entry/data-entry.component'

const routes: Routes = [
  {
    path: '',
    component: DataList
  },
  {
    path: '',
    component: DataViewer
  },
  {
    path:'',
    component: DataEntry
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
