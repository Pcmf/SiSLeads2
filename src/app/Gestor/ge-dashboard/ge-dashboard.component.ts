import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
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

  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
