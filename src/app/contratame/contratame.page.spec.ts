import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ContratamePage } from './contratame.page';

describe('FolderPage', () => {
  let component: ContratamePage;
  let fixture: ComponentFixture<ContratamePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContratamePage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ContratamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
