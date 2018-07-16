import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from '../subcomponents/carousel-basic/carousel-basic.component';

// import { BasicServiceService } from '../services/basic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [BasicServiceService]
})

export class HomeComponent implements OnInit {

  ngOnInit() {

  }

}
