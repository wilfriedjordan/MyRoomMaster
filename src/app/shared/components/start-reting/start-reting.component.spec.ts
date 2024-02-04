import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRetingComponent } from './start-reting.component';

describe('StartRetingComponent', () => {
  let component: StartRetingComponent;
  let fixture: ComponentFixture<StartRetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartRetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartRetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
