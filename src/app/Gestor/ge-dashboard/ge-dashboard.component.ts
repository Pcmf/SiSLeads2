import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
