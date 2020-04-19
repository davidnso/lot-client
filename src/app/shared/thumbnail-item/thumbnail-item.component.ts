import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail-item',
  templateUrl: './thumbnail-item.component.html',
  styleUrls: ['./thumbnail-item.component.scss']
})
export class ThumbnailItemComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
