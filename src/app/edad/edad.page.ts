import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Age {
  count: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  private apiUrl = 'https://api.agify.io/?name=';
  public folder!: string;
  public name!: string;
  public res!: string;
  private http = inject(HttpClient);

  @ViewChild('resp') resp!: ElementRef;

  constructor() {}
  
  buscar() {
    this.http.get<any>(`${this.apiUrl}${encodeURIComponent(this.name)}`).subscribe((response: Age) => {
      this.resp.nativeElement.classList.remove("res");
      this.resp.nativeElement.classList.add("res");
      var r = "<div>";
      if (response.age < 18){
        r += "<h1>Joven</h1><img src=\""
        r += "https://th.bing.com/th/id/OIP.5k86cYVibEpuS2JU_nvdPAHaEK?w=1280&h=720&rs=1&pid=ImgDetMain"
        r += "\"/>"
      }else if (response.age < 40){
        r += "<h1>Adulto</h1>"
      }else{
        r += "<h1>Anciano</h1>"
      }
      r += "<p>Edad: " + response.age + "</p>"
      r += "</div>";
      this.res = r;
    })
  }

  ngOnInit() {
  }
}

