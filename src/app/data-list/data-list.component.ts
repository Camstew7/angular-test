import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'

@Component ({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})

export class DataListComponent implements OnInit {
  dataList: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {}

  navigateAndPassState(data) {
    this.router.navigateByUrl(`viewer`, {state: data})
  }


  ngOnInit() {
    this.dataList = this.route.snapshot.data.data
  }
}

