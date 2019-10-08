import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component ({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})

export class DataListComponent implements OnInit {
  dataList: any;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.dataList = this.route.snapshot.data.dataList
  }
}

