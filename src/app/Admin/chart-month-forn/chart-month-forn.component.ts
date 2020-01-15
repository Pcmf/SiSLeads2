import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Servicos/data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-month-forn',
  templateUrl: './chart-month-forn.component.html',
  styleUrls: ['./chart-month-forn.component.scss']
})
export class ChartMonthFornComponent implements OnInit {

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

  public barChartLabels: Label[] = ['Recebidos', 'Anulados', 'Recusados', 'Financiados'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];
  public fornecedores: any = [];
  show = false;

  constructor(private dataService: DataService) {
    this.dataService.getData('generic/cad_fornecedorleads').subscribe(
      resp => this.fornecedores = resp
    );
    console.log(this.ano + ' ' + this.mes);
    // this.getData();
  }

  ngOnInit() { }

  getData(form) {
    this.dataService.getData('graphdata/' + form.fornecedor + '/' + this.ano + '/' + this.mes).subscribe(
      resp => {
        this.data = resp;
        console.log(this.data.recebidas.qty);
        this.barChartData = [
          {
            data: [
              +this.data.recebidas.qty,
              +this.data.anuladas.qty,
              +this.data.recusadas.qty,
              +this.data.financiadas.qty
            ], label: 'Leads'
          },
          {
            data: [
              0,
              0,
              +this.data.recusadas.valor / 1000,
              +this.data.financiadas.valor / 1000
            ], label: 'Valor K'
          }
        ];
        this.show = true;
      }
    );
  }
}
