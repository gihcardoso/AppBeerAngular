import { Component, OnInit } from '@angular/core';
import { ICerveja } from 'src/app/models/cerveja.model';
import { CervejaService } from 'src/app/services/cerveja.service';

@Component({
  selector: 'app-listar-cervejas',
  templateUrl: './listar-cervejas.component.html',
  styleUrls: ['./listar-cervejas.component.scss']
})
export class ListarCervejasComponent implements OnInit {

  cervejas: ICerveja[] = [];
  mostraCerveja = true;
  filtro = '';

  constructor(private listarCervejas: CervejaService) { }

  ngOnInit() {
    this.listarCervejas.getCervejas()
      .then(dados => {
        this.cervejas = dados;
      })
      .catch(erro => {
        console.log(erro);
      });

    this.listarCervejas.getCerveja(7)
      .then(dados => {
        console.log(dados);
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  mostraCervejas() {
    this.mostraCerveja = !this.mostraCerveja;
  }
}
