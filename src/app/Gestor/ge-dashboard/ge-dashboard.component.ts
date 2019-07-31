import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
// import * as CanvasJS from './../../../../node_modules/chartJs/canvasjs.min.js';
>>>>>>> 01f48804c5ba634a179c65ae54185f3fc124a4a0
import { Router } from '@angular/router';

@Component({
  selector: 'app-ge-dashboard',
  templateUrl: './ge-dashboard.component.html',
  styleUrls: ['./ge-dashboard.component.scss']
})
export class GeDashboardComponent implements OnInit {

  public ops = ['Lead', 'Processo', 'Nome do cliente', 'Email', 'Telefone', 'NIF do cliente', 'Lead original', 'Parceiro'];
  public muralUsers = [
    { id: 1, nome: 'Afonso', tipo: 'Gestor'},
    { id: 2, nome: 'Maria', tipo: 'Gestor'},
    { id: 3, nome: 'João', tipo: 'Admin'}
  ];

  constructor(private router: Router) { }

<<<<<<< HEAD
  ngOnInit() { }
=======
  ngOnInit() {
    /* const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ''
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: {y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 5, name: 'Aprovados', link: '/aprov' },
          { y: 12, name: 'Enviados para Analise', link: '/envana' },
          { y: 6, name: 'Em Analise', link: '/emana' },
          { y: 1, name: 'Financiados', link: '/finan' }
        ],
      }]
    });

    chart.render();*/
  } 

>>>>>>> 01f48804c5ba634a179c65ae54185f3fc124a4a0
}
