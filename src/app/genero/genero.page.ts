import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Gender {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  private apiUrl = 'https://api.genderize.io/?name=';
  public folder!: string;
  public name!: string;
  public res!: string;
  private http = inject(HttpClient);

  @ViewChild('resp') resp!: ElementRef;

  constructor() {}
  
  buscar() {
    console.log(this.name);
    this.http.get<any>(`${this.apiUrl}${encodeURIComponent(this.name)}`).subscribe((response: Gender) => {
      this.resp.nativeElement.classList.remove("male");
      this.resp.nativeElement.classList.remove("female");
      this.resp.nativeElement.classList.add(response.gender);
      var r = "<div>";
      r += "<p>genero: " + (response.gender == "male" ? "masculino" : "femenino") + "</p>";
      r += "<p>probabilidad: " + (response.probability * 100) + "/100</p>";
      r += "</div>";
      this.res = r;
    })
  }

  ngOnInit() {
  }
}

