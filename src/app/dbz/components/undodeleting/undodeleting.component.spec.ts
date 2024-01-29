import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndodeletingComponent } from './undodeleting.component';

describe('UndodeletingComponent', () => {
  let component: UndodeletingComponent;
  let fixture: ComponentFixture<UndodeletingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndodeletingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndodeletingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
