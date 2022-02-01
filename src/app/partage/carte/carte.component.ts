import {Component, Input, Output} from '@angular/core';
import {Music} from "../../model/Music";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  @Input() musique: Music | undefined;
  @Output('musicDelete') delete$: EventEmitter<any> = new EventEmitter();
  @Output('musicEdit') edit$: EventEmitter<any> = new EventEmitter();

  constructor() {
    //Empty
  }


  delete() {
    this.delete$.emit(this.musique);
  }

  edit(){
    this.edit$.emit(this.musique)
  }

}
