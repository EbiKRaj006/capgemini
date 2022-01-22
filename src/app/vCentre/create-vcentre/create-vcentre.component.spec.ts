import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVcentreComponent } from './create-vcentre.component';

describe('CreateVcentreComponent', () => {
  let component: CreateVcentreComponent;
  let fixture: ComponentFixture<CreateVcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVcentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
