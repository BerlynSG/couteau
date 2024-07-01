import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { GeneroPage } from './genero.page';

describe('FolderPage', () => {
  let component: GeneroPage;
  let fixture: ComponentFixture<GeneroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneroPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
