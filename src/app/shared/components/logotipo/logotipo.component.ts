import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logotipo',
  templateUrl: './logotipo.component.html',
  styleUrls: ['./logotipo.component.scss']
})
export class LogotipoComponent implements OnInit {
 variavel = "../../../../../assets/images/logotipos.png";
  constructor() { }

  ngOnInit() {
  }

}
