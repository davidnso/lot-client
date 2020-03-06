import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailItemSummaryComponent } from './thumbnail-item-summary.component';

describe('ThumbnailItemSummaryComponent', () => {
  let component: ThumbnailItemSummaryComponent;
  let fixture: ComponentFixture<ThumbnailItemSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailItemSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailItemSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
