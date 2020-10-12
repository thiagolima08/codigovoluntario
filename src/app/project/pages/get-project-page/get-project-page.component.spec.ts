import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProjectPageComponent } from './get-project-page.component';

describe('GetProjectPageComponent', () => {
  let component: GetProjectPageComponent;
  let fixture: ComponentFixture<GetProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProjectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
