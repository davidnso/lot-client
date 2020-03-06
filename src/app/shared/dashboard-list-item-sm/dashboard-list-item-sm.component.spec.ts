import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListItemSmComponent } from './dashboard-list-item-sm.component';

describe('DashboardListItemSmComponent', () => {
  let component: DashboardListItemSmComponent;
  let fixture: ComponentFixture<DashboardListItemSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListItemSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListItemSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
