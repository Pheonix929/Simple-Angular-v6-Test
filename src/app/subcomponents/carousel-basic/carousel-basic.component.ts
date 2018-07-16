import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class NgbdCarouselBasic implements OnInit {

public slideData: any;

          constructor(private http: Http) {
                this.http.get('../../assets/data/thedata.json')
               .subscribe(res => this.slideData = res.json());
          }

          addSlide(str: HTMLInputElement) {
            this.slideData.Carousel.push(str.value);
            str.value = null;
          }

  ngOnInit() {
  }

}
