import { Component, OnInit } from '@angular/core';
import { Representante } from '../representante';

@Component({
  selector: 'app-representante-form',
  templateUrl: './representante-form.component.html',
  styleUrls: ['./representante-form.component.css']
})
export class RepresentanteFormComponent {
  representante: Representante;

  constructor() { }

  ngOnInit(): void {
    
  }

}
