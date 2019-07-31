import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Servicos/data.service';

@Component({
  selector: 'app-ge-dashboard',
  templateUrl: './ge-dashboard.component.html',
  styleUrls: ['./ge-dashboard.component.scss']
})
export class GeDashboardComponent implements OnInit {
  // Options for search
  public ops = ['Lead', 'Processo', 'Nome do cliente', 'Email', 'Telefone', 'NIF do cliente', 'Lead original', 'Parceiro'];

  // Mural Users
  public muralUsers = [
    { id: 1, nome: 'Afonso', tipo: 'Gestor'},
    { id: 2, nome: 'Maria', tipo: 'Gestor'},
    { id: 3, nome: 'João', tipo: 'Admin'}
  ];

  // Dashboard information
  public dashInfo: any = [];

  constructor(private router: Router, private data: DataService) {
      this.data.getData('dashinfo/' + this.data.getUserId()).subscribe(
        (resp: any) => {
          console.log(resp);
          this.dashInfo = resp;
        },
        error => console.log('Erro ' + error.error)
      );
   }

  ngOnInit() {

  }

}
