import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecycleBonusOptionsPage } from './recycle-bonus-options.page';

describe('RecycleBonusOptionsPage', () => {
  let component: RecycleBonusOptionsPage;
  let fixture: ComponentFixture<RecycleBonusOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleBonusOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecycleBonusOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
