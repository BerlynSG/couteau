import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Weather {
  hourly_units: Units;
  hourly: Hourly;
}

interface Hourly {
  time: Array<string>;
  temperature_2m: Array<number>;
  relative_humidity_2m: Array<number>;
  precipitation_probability: Array<number>;
}

interface Units {
  temperature_2m: string;
  relative_humidity_2m: string;
  precipitation_probability: string;
}

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.page.html',
  styleUrls: ['./tiempo.page.scss'],
})
export class TiempoPage implements OnInit {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=19&longitude=-70.6667&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation&timezone=America%2FSanto_Domingo&forecast_days=1';
  public folder!: string;
  public name!: string;
  public w: Weather = {
    hourly_units: {
      temperature_2m: '',
      relative_humidity_2m: '',
      precipitation_probability: ''
    }, hourly: {
      time: [],
      temperature_2m: [],
      relative_humidity_2m: [],
      precipitation_probability: []
    }};
  private http = inject(HttpClient);

  constructor() {}
  
  buscar() {
    this.http.get<any>(`${this.apiUrl}`).subscribe((response: Weather) => {
      this.w = response;
    })
  }

  ngOnInit() {
    this.buscar();
  }
}

