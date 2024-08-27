import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportCenterComponent } from './transport-center.component';

describe('TransportCenterComponent', () => {
  let component: TransportCenterComponent;
  let fixture: ComponentFixture<TransportCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportCenterComponent]
    });
    fixture = TestBed.createComponent(TransportCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
