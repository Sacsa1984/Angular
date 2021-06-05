import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../MyClassInecial';
@Component({
  selector: 'app-info-certeficat',
  templateUrl: './info-certeficat.component.html',
  styleUrls: ['./info-certeficat.component.css']
})
export class InfoCerteficatComponent implements OnInit {
  MyItems=ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
