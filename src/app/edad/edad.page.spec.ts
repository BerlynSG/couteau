import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EdadPage } from './edad.page';

describe('FolderPage', () => {
  let component: EdadPage;
  let fixture: ComponentFixture<EdadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdadPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EdadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
