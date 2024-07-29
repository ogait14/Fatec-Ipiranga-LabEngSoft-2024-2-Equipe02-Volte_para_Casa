import { Component, OnInit } from '@angular/core';
import { Idoso } from '../idoso';


@Component({
  selector: 'app-idoso-form',
  templateUrl: './idoso-form.component.html',
  styleUrls: ['./idoso-form.component.css']
})
export class IdosoFormComponent {
  idoso: Idoso;

  constructor() { }

  ngOnInit(): void {
  }

}
