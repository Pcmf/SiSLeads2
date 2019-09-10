import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/Servicos/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import meses from '../../../assets/jsons/meses.json';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.scss']
})
export class FormContactoComponent implements OnInit, OnDestroy {

  public onCall = false;
  public lead = [];
  public historico = [];
  public sitprofissional = [];
  public meses = meses;

  // zenva style
  public contactForm: FormGroup;


  constructor(private data: DataService, private location: Location, private fb: FormBuilder) {

    // Obter sitprofissional
    this.data.getData('generic/' + 'cnf_sitprofissional').subscribe(
      (param: any) => {
        this.sitprofissional = param;
      }
    );
  }

  back() {
    this.location.back();
  }

  ngOnInit() {
        // Puxar uma lead
        this.data.getData('puxar/' + this.data.getUserId()).subscribe(
          (resp: any) => {
            console.log(this.lead = resp.lead);
            this.historico = resp.historico;
            this.createForm();
          }
        );
  }


  ngOnDestroy() {

  }

  private createForm() {
    this.contactForm = this.fb.group({
      nome: [this.lead.nome, [Validators.required]],
      idade: [this.lead.idade, [Validators.required]],
      telefone: [this.lead.telefone, [Validators.required]],
      email: [this.lead.email, [Validators.required]]
    });
  }

  makeCall() {
    this.onCall = true;

  }

  endCall(tipo) {
    this.onCall = false;
  }
}
