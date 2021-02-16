import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RgpdPage } from './rgpd.page';

describe('RgpdPage', () => {
  let component: RgpdPage;
  let fixture: ComponentFixture<RgpdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgpdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RgpdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
