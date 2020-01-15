import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from './Servicos/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SiSLeads2';
  menu: string;
  subscription: Subscription;

  constructor(private menuService: MenuService) {
    this.subscription = this.menuService.getMenu().subscribe(
      resp => this.menu = resp
    );
  }
}
