import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  activeParam: string;
  resultSet = [];
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.queryParams.subscribe(
      (params) => (this.activeParam = params.category)
    );
  }

  ngOnInit() {
    this.searchForListings();
  }

  searchForListings() {
    try {
      this.dataService
        .searchListings({ query: {} })
        .subscribe((dataset: any[]) => {
          this.resultSet = dataset;
          console.log(this.resultSet)
        });
    } catch (error) {
      throw error;
    }
  }
}
