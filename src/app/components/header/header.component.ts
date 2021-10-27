import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imagemHeader = "./assets/images/logotipos.png";
  altImg = "Logotipo do header do site mais sustentabilidade";

  constructor() { }

  ngOnInit() {
  }

}
