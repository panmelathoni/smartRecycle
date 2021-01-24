import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClosestRecyclePointsPage } from './closest-recycle-points.page';

describe('ClosestRecyclePointsPage', () => {
  let component: ClosestRecyclePointsPage;
  let fixture: ComponentFixture<ClosestRecyclePointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosestRecyclePointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClosestRecyclePointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
