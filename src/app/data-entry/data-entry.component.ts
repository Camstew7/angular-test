import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

@Component ({
  selector: 'data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})

export class DataEntryComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  }
}