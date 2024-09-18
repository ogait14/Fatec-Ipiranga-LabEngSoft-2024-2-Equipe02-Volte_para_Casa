import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSideBarComponent } from './responsive-side-bar.component';

describe('ResponsiveSideBarComponent', () => {
  let component: ResponsiveSideBarComponent;
  let fixture: ComponentFixture<ResponsiveSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveSideBarComponent]
    });
    fixture = TestBed.createComponent(ResponsiveSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
