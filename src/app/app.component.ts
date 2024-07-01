import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder', icon: 'home' },
    { title: 'Género', url: '/genero', icon: 'heart' },
    { title: 'Edad', url: '/edad', icon: 'alarm' },
    { title: 'Universidades', url: '/universidad', icon: 'book' },
    { title: 'Tiempo', url: '/tiempo', icon: 'cloud' },
    { title: 'Contrátame', url: '/contratame', icon: 'bag' },
  ];
  public labels = [];
  constructor() {}
}
