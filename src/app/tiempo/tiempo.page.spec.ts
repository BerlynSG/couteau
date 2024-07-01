import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TiempoPage } from './tiempo.page';

describe('FolderPage', () => {
  let component: TiempoPage;
  let fixture: ComponentFixture<TiempoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiempoPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
