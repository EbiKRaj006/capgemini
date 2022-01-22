import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVcentreComponent } from './update-vcentre.component';

describe('UpdateVcentreComponent', () => {
  let component: UpdateVcentreComponent;
  let fixture: ComponentFixture<UpdateVcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVcentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
