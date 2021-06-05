import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../MyClassInecial';
@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent implements OnInit {
  MyItems=ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
