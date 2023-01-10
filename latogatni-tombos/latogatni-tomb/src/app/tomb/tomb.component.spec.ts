import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TombComponent } from './tomb.component';

describe('GitComponent', () => {
  let component: TombComponent;
  let fixture: ComponentFixture<TombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TombComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
