import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/Servicos/data.service';
import { timeout } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-cart-actual-sts',
  templateUrl: './cart-actual-sts.component.html',
  styleUrls: ['./cart-actual-sts.component.scss']
})
export class CartActualStsComponent implements OnInit {

  private date = new Date();
  public ano = this.date.getFullYear().toString();
  public mes = (this.date.getMonth() + 1).toString();
  public data: any = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['Novas', 'Agendadas', 'Aguardam Doc.', 'Para Analise', 'Em Analise', 'Aprovados'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];

  show = false;

  private timer: Observable<number> = timer(0, 30000);

  constructor(private dataService: DataService) {
    this.timer.subscribe(
      t => this.getData()
    );
  }

  ngOnInit() { }

  getData() {
    this.dataService.getData('graphdata').subscribe(
      resp => {
        this.data = resp;
        this.barChartData = [
          {
            data: [
              +this.data.novas.qty,
              +this.data.agendadas.qty,
              +this.data.aguardamDoc.qty,
              +this.data.paraAnalise.qty,
              +this.data.emAnalise.qty,
              +this.data.aprovados.qty
            ], label: 'Leads'
          },
          {
            data: [
              0,
              0,
              0,
              +this.data.paraAnalise.valor / 1000,
              +this.data.emAnalise.valor / 1000,
              +this.data.aprovados.valor / 1000
            ], label: 'Valor K'
          }
        ];
        this.show = true;
      }
    );
  }
}
