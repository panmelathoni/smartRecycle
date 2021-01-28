import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupAddressPage } from './signup-address.page';

describe('SignupAddressPage', () => {
  let component: SignupAddressPage;
  let fixture: ComponentFixture<SignupAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
