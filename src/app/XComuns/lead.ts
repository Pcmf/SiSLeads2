import { ILead } from './ILead';
import { stat } from 'fs';
export class Lead implements ILead {
    id: number;
    fornecedor: number;
    tipo: string;
    nome: string;
    email: string;
    telefone: string;
    idade: number;
    nif: number;
    montante: number;
    prazopretendido: number;
    rendimento1: number;
    tipocontrato: number;
    info: string;
    dataentrada: string;
    status: number;
    datastatus: string;
    user: number;
    analista: number;

    constructor(id, fornecedor, tipo, nome, email, telefone, idade, nif, montante,
                prazopretendido, rendimento1, tipocontrato, info, dataentrada, status,
                datastatus, user, analista) {

            this.id = id;
            this.fornecedor = fornecedor;
            this.tipo = tipo;
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
            this.idade = idade;
            this.nif = nif;
            this.montante = montante;
            this.prazopretendido = prazopretendido;
            this.rendimento1 = rendimento1;
            this.tipocontrato = tipocontrato;
            this.info = info;
            this.dataentrada = dataentrada;
            this.status = status;
            this.datastatus = datastatus;
            this.user = user;
            this.analista = analista;
         }
}
