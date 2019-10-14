import {Component, OnInit, Input} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../common/services/data.service';

@Component ({
  selector: 'data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.css']
})

export class DataViewerComponent implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  @Input ()
    title: any = ''
    content: any = ''

  handleDataEdit(event) {
    event.preventDefault()
    
    let dataChanges = {
      title: this.title,
      content: this.content
    }
    // this.dataService.editData(dataChanges)

  }

  ngOnInit() {
    this.data = window.history.state
    console.log(this.data)
  }
}

