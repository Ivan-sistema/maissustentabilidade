import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  imagemHeader = "./assets/images/logotipos.png";
  altImg = "Logotipo do header do site mais sustentabilidade";
  constructor() { }

  ngOnInit() {
  }

}
