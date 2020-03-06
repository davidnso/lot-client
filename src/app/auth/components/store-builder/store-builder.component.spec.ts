import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBuilderComponent } from './store-builder.component';

describe('StoreBuilderComponent', () => {
  let component: StoreBuilderComponent;
  let fixture: ComponentFixture<StoreBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
