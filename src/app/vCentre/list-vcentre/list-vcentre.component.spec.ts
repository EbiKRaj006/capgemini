import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVcentreComponent } from './list-vcentre.component';

describe('ListVcentreComponent', () => {
  let component: ListVcentreComponent;
  let fixture: ComponentFixture<ListVcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVcentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
