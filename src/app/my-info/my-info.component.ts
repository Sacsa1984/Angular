import { Component, OnInit } from '@angular/core';
//  import { Hymen} from '../MyInfoClass';
import { ITEMS } from '../MyClassInecial';
@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  MyItems=ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
