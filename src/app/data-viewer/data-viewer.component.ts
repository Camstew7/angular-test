import {Component, Inject, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Title} from '@angular/platform-browser'

@Component ({
  selector: 'data-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.compionent.css']
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

