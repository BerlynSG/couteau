import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UniversidadPage } from './universidad.page';

describe('FolderPage', () => {
  let component: UniversidadPage;
  let fixture: ComponentFixture<UniversidadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversidadPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UniversidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
