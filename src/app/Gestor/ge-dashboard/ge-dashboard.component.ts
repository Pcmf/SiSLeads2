import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription,  Observable, timer } from 'rxjs';

import { DataService } from 'src/app/Servicos/data.service';

@Component({
  selector: 'app-ge-dashboard',
  templateUrl: './ge-dashboard.component.html',
  styleUrls: ['./ge-dashboard.component.scss']
})
export class GeDashboardComponent implements OnInit, OnDestroy {

  // Options for search
  public ops = ['Lead', 'Processo', 'Nome do cliente', 'Email', 'Telefone', 'NIF do cliente', 'Lead original', 'Parceiro'];
  // User
  public userId: number;
  // Mural Users
  public muralUsers: any = [];
  // Mural data
  public muralData: any = [];
  // Selected mural users
  public selectedMuralUsers: number[];
  // Mensage to send
  public msgToSend = '';
  // Dashboard information
  public dashInfo: any = [];
  // Timer 1 minuto
  private timer: Observable<number> = timer(0, 60000);

    // CHART TEST
    public pieChartLabels = ['Puxadas', 'Analise', 'Aprovadas', 'Financiadas'];
    public pieChartData = [1, 1, 1, 1];
    public pieChartType = 'pie';

  constructor(private router: Router, private data: DataService) {

    this.userId = this.data.getUserId();
    // Utilizadores do mural
    this.data.getData('mural').subscribe(
      (resp: any) => {
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
            this.dashInfo = resp;
            // tslint:disable-next-line: max-line-length
            this.pieChartLabels = [
                                  'Puxadas ' + this.dashInfo.puxadosMes,
                                  'Analise ' + this.dashInfo.toAnaliseMes,
                                  'Aprovadas ' + this.dashInfo.aprovadosMes,
                                  'Financiadas ' + this.dashInfo.financiadosMes
                                ];
            this.pieChartData = [
                                    this.dashInfo.puxadosMes,
                                    this.dashInfo.toAnaliseMes,
                                    this.dashInfo.aprovadosMes,
                                    this.dashInfo.financiadosMes
                                ];
            this.pieChartType = 'pie';
          },
          error => console.log('Erro ' + error.error)
        );
        this.mural();
      }
    );

  }



  ngOnInit() {

  }
  ngOnDestroy(): void {
  }
  // Enviar msg
  sendMsg() {
    console.log('Users ' + this.selectedMuralUsers + ' Msg ' + this.msgToSend);
    // enviar Msg
    const obj = {
      origem: this.data.getUserId(),
      destino: this.selectedMuralUsers,
      assunto: this.msgToSend
    };
    this.data.setData('mural', obj).subscribe(
      r => {
        console.log(r);
        this.mural();
      }
    );
    // limpar dados
    this.selectedMuralUsers = [];
    this.msgToSend = '';

  }

  private mural() {
    // Informação do mural
    this.data.getData('mural/' + this.data.getUserId()).subscribe(
      (resp: any) => {
        this.muralData = resp;
      },
      error => console.log('Erro ' + error.error)
    );
  }

}
