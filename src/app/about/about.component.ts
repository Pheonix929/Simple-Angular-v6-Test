import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

public thedata: any;

          constructor(private http: Http) {
                this.http.get('../../assets/data/thedata.json')
               .subscribe(res => this.thedata = res.json());
          }

  ngOnInit() {
  }

}
