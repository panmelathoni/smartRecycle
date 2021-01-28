import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecycleCategoriesPage } from './recycle-categories.page';

describe('RecycleCategoriesPage', () => {
  let component: RecycleCategoriesPage;
  let fixture: ComponentFixture<RecycleCategoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleCategoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecycleCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
