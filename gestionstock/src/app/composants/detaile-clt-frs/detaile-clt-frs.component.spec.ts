import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileCltFrsComponent } from './detaile-clt-frs.component';

describe('DetaileCltFrsComponent', () => {
  let component: DetaileCltFrsComponent;
  let fixture: ComponentFixture<DetaileCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaileCltFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
