import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../MyClassInecial';
@Component({
  selector: 'app-my-foto',
  templateUrl: './my-foto.component.html',
  styleUrls: ['./my-foto.component.css']
})
export class MyFotoComponent implements OnInit {
  MyItems=ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
