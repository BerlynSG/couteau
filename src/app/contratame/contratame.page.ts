import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface University {
  name: string;
  domains: Array<String>;
  web_pages: Array<String>;
}

@Component({
  selector: 'app-contratame',
  templateUrl: './contratame.page.html',
  styleUrls: ['./contratame.page.scss'],
})
export class ContratamePage implements OnInit {
  private apiUrl = 'http://universities.hipolabs.com/search?country=';
  public folder!: string;
  public name!: string;
  public uni!: Array<University>;
  private http = inject(HttpClient);

  constructor() {}
  
  buscar() {
    this.http.get<any>(`${this.apiUrl}${encodeURIComponent(this.name)}`).subscribe((response: Array<University>) => {
      this.uni = response;
    })
  }

  ngOnInit() {
  }
}

