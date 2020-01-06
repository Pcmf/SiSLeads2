import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/Servicos/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from '../../XComuns/lead';

import meses from '../../../assets/jsons/meses.json';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.scss']
})
export class FormContactoComponent implements OnInit, OnDestroy {

  public onCall = false;
  public lead: Lead ;
  public historico = [];
  public tiposcontrato = [];
  public estadoscivis = [];
  public meses = meses;
  public or: any = [];
  public oc: any = [{tipocredito: '', valorcredito: '', prestacao: '', liquidar: ''}];

  public tiposhabitacao: any = [];
  // zenva style
  public contactForm: FormGroup;


  constructor(private data: DataService, private location: Location, private fb: FormBuilder) {

    // Obter sitprofissional
    this.data.getData('generic/' + 'cnf_sitprofissional').subscribe(
      (param: any) => {
        this.tiposcontrato = param;
      }
    );
    // Obter estados civis
    this.data.getData('generic/' + 'cnf_sitfamiliar').subscribe(
      (param: any) => {
        this.estadoscivis = param;
      }
    );
    // Obter estados civis
    this.data.getData('generic/' + 'cnf_tipohabitacao').subscribe(
          (param: any) => {
            this.tiposhabitacao = param;
          }
        );

    // Puxar uma lead
    this.data.getData('puxar/' + this.data.getUserId()).subscribe(
          (resp: any) => {
            this.lead = resp.lead;
            this.historico = resp.historico;
            this.oc = resp.oc;
            this.or = resp.or;
            /* this.createForm(); */
          }
        );
  }

  addLineOR() {
    const obj =  {lead: this.lead.id, linha: '', tiporendimento: '', valorrendimento: '', periocidade: '', usar: ''};
    this.or.push(obj);
  }

  removeLineOR(ln) {
    if (this.or.length > 1) {
      this.or.pop();
    } else {
      this.or = [{}];
    }
  }

  addLineOC() {
    const obj =  {lead: this.lead.id, linha: '', tipocredito: '', valorcredito: '', prestacao: '', liquidar: ''};
    this.oc.push(obj);
  }

  removeLineOC(ln) {
    if (this.oc.length > 1) {
      this.oc.pop();
    } else {
      this.oc = [{}];
    }
  }

  back() {
    this.location.back();
  }

  ngOnInit() {

  }


  ngOnDestroy() {

  }

  /* private createForm() {
    this.contactForm = this.fb.group({
      nome: [this.lead.nome, [Validators.required]],
      idade: [this.lead.idade, [Validators.required, Validators.min==18]],
      telefone: [this.lead.telefone, [Validators.required]],
      email: [this.lead.email, [Validators.required]],
      nif: [this.lead.nif, [Validators.required]],
      profissao: ['', [Validators.required]],
      tipocontrato: ['', [Validators.required]],
      vencimento: [this.lead.rendimento1, [Validators.required]],
      desdeano: ['', [Validators.required]],
      desdemes: ['', [Validators.required]],
      or: [],
      oc: [],
      valorpretendido: [this.lead.montante, [Validators.required]],
      tipo: [this.lead.tipo, [Validators.required]],
      prazopretendido: [this.lead.prazopretendido, [Validators.required]],
      prestacaopretendida: [],
      diapagamento: [],
      info: [this.lead.info]
    });
  } */

  makeCall() {
    this.onCall = true;

  }

  endCall(tipo) {
    this.onCall = false;
  }
}
