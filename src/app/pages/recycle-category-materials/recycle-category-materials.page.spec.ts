import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecycleCategoryMaterialsPage } from './recycle-category-materials.page';

describe('RecycleCategoryMaterialsPage', () => {
  let component: RecycleCategoryMaterialsPage;
  let fixture: ComponentFixture<RecycleCategoryMaterialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleCategoryMaterialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecycleCategoryMaterialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
