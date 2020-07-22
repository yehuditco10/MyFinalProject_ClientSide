import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationEmailComponent } from './verification-email.component';

describe('VerificationEmailComponent', () => {
  let component: VerificationEmailComponent;
  let fixture: ComponentFixture<VerificationEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
