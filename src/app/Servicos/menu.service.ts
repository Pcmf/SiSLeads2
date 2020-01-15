import { Injectable } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private subject = new Subject<string>();

  // Selecionar o menu
  setMenu(tipo: string) {
    this.subject.next(tipo);
  }

  // Limpar a seleção
  unsetMenu() {
    this.subject.next();
  }

  // Obter o tipo de menu selecionado
  getMenu(): Observable<string> {
    return this.subject.asObservable();
  }


}
