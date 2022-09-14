import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcomponentComponent } from './fcomponent.component';

describe('FcomponentComponent', () => {
  let component: FcomponentComponent;
  let fixture: ComponentFixture<FcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
