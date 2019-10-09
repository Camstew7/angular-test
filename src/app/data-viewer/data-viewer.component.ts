import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
// import state from '../stateMap.js'

@Component ({
  selector: 'data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.css']
})

export class DataViewerComponent implements OnInit {
  data: any;
  index: any;

  constructor(
    private route: ActivatedRoute,
  ) {}


  ngOnInit() {
    this.data = window.history.state
    this.index = window.history.state.index
  }
}

