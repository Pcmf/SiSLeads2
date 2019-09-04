import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mural-dialog',
  templateUrl: './mural-dialog.component.html',
  styleUrls: ['./mural-dialog.component.scss']
})
export class MuralDialogComponent implements OnInit {

  @Input() msgObj: any[];
  @Input() userId: number;

  public msg: any[];
  public showMsg: true;
  public panelOpenState = true;

  constructor() {
   }

  ngOnInit() {
  }

}
