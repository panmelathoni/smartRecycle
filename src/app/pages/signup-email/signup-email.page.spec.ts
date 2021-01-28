import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupEmailPage } from './signup-email.page';

describe('SignupEmailPage', () => {
  let component: SignupEmailPage;
  let fixture: ComponentFixture<SignupEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
