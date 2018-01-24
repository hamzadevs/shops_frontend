import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefferedshopComponent } from './prefferedshop.component';

describe('PrefferedshopComponent', () => {
  let component: PrefferedshopComponent;
  let fixture: ComponentFixture<PrefferedshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefferedshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefferedshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
