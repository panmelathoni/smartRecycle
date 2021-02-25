import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecycleBonusHistoryPage } from './recycle-bonus-history.page';

describe('RecycleBonusHistoryPage', () => {
  let component: RecycleBonusHistoryPage;
  let fixture: ComponentFixture<RecycleBonusHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleBonusHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecycleBonusHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
