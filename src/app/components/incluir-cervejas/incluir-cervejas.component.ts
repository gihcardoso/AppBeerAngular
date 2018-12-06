import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incluir-cervejas',
  templateUrl: './incluir-cervejas.component.html',
  styleUrls: ['./incluir-cervejas.component.scss']
})
export class IncluirCervejasComponent implements OnInit {

  familia: any = ['IPA', 'ALE', 'Pilsen', 'Bock', 'Weiss'];

  constructor() { }

  ngOnInit() {
  }

}
