import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable, timer } from 'rxjs';

import { DataService } from 'src/app/Servicos/data.service';
// import * from '../../XComuns/mural-dialog/mural-dialog.component';

@Component({
  selector: 'app-ge-dashboard',
  templateUrl: './ge-dashboard.component.html',
  styleUrls: ['./ge-dashboard.component.scss']
})
export class GeDashboardComponent implements OnInit {
  // Options for search
  public ops = ['Lead', 'Processo', 'Nome do cliente', 'Email', 'Telefone', 'NIF do cliente', 'Lead original', 'Parceiro'];
  // User
  public userId: number;
  // Mural Users
  public muralUsers: any = [];
  // Mural data
  public muralData: any = [];
  // Dashboard information
  public dashInfo: any = [];
  // Timer 1 minuto
  private timer: Observable<number> = timer(0, 600000);

  constructor(private router: Router, private data: DataService) {
    this.userId = this.data.getUserId();
    // Utilizadores do mural
    this.data.getData('mural').subscribe(
      (resp: any) => {
        console.log(resp);
        this.muralUsers = resp;
      },
      error => console.log('Erro ' + error.error)
    );
    // Timer 1min
    this.timer.subscribe(
      t => {
        // Informação para o dashboard
        this.data.getData('dashinfo/' + this.data.getUserId()).subscribe(
          (resp: any) => {
            console.log(resp);
            this.dashInfo = resp;
          },
          error => console.log('Erro ' + error.error)
        );
        // Informação do mural
        this.data.getData('mural/' + this.data.getUserId()).subscribe(
          (resp: any) => {
            console.log(resp);
            this.muralData = resp;
          },
          error => console.log('Erro ' + error.error)
        );
      }
    );

  }

  ngOnInit() {

  }

  // Enviar msg
  sendMsg(e) {
    console.log(e);
  }

}
