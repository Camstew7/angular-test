import {Component, OnInit, Input} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {DataService} from '../common/services/data.service'
import { DataFormat } from '../common/models/data.model'

@Component ({
  selector: 'data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})


export class DataEntryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  @Input()
  title: any = ''
  type: any = ''
  content: any = ''

  handleDataSubmit(event) {
    event.preventDefault()
    const dataToAdd = {
      title: this.title,
      type: this.type,
      content: this.content
    }
    this.dataService.addData(new DataFormat(dataToAdd))
  }


  ngOnInit() {
  }
}