import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from './browse/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lot-client';

  user = null;
  searchIcon = faSearch;
  constructor(
    private eRef: ElementRef,
    private auth: AuthService,
    private search: SearchService
  ) {
    this.user = auth.currentUserValue;
  }
  ngOnInit(): void {
    this.user =
      localStorage.getItem('user') !== null
        ? localStorage.getItem('user')
        : null;
  }

  submitSearch(query: string) {
    try {

      console.log(query);
      this.search.submitSearchQuerybyCategory({
        text: query,
        category: 'footwear',
      });
    } catch (error) {
      throw error;
    }
  }
}
