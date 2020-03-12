import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  activeParam: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => this.activeParam = params.category)
  }

  ngOnInit() {
  }

}
