import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component ({
  selector: 'data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.css']
})

export class DataViewerComponent implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.data = this.route.snapshot.data.data
  }
}

