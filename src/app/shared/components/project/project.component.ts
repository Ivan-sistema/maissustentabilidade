import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  conteudo = [
    {
      imagem:"https://cdn-static.findly.com/wp-content/uploads/sites/584/2018/05/nafta_driver-220x220.jpg",
      alt: "Primeira imagem de planos para projetos futuros"
    },
    {
      imagem:"https://cdn-static.findly.com/wp-content/uploads/sites/584/2018/05/nafta_driver-220x220.jpg",
      alt: "Primeira imagem de planos para projetos futuros"
    },
    {
      imagem:"https://cdn-static.findly.com/wp-content/uploads/sites/584/2018/05/nafta_driver-220x220.jpg",
      alt: "Primeira imagem de planos para projetos futuros"
    },
    {
      imagem:"https://cdn-static.findly.com/wp-content/uploads/sites/584/2018/05/nafta_driver-220x220.jpg",
      alt: "Primeira imagem de planos para projetos futuros"
    }
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
