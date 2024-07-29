import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdosoFormComponent } from './idoso-form.component';

describe('IdosoFormComponent', () => {
  let component: IdosoFormComponent;
  let fixture: ComponentFixture<IdosoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdosoFormComponent]
    });
    fixture = TestBed.createComponent(IdosoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
