import { Component, OnInit } from '@angular/core';
import { DataService } from './../Servicos/data.service';
import { Router } from '@angular/router';
import { MenuService } from '../Servicos/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  erro: boolean;

  constructor(private dataService: DataService, private router: Router, private menuService: MenuService) {
    this.erro = false;
   }

  submit(form) {
    this.dataService.checkUser(form).subscribe(
      resp => {
        console.log(resp);
        if (resp) {
          switch (this.dataService.getUserType()) {
            case 'Gestor':
              this.menuService.setMenu('Gestor');
              this.router.navigate(['/gestor']);
              break;
            case 'Analista':
              this.menuService.setMenu('Analista');
              this.router.navigate(['/analista']);
              break;
            case 'Administrador':
              this.menuService.setMenu('Admin');
              this.router.navigate(['/admin']);
              break;
            default:
              this.menuService.unsetMenu();
              this.router.navigate(['/']);
              break;
          }
        } else {
          this.erro = true;
        }

      }
    );

  }

  ngOnInit() {
  }

}
