import { Component, OnInit } from '@angular/core';
import { Music } from '../model/Music';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {

  musique!: Music;


  constructor(private readonly httpClient: HttpClient) {
    this.httpClient.get<Music>("http://localhost:3000/musics/random").subscribe((personneRandom:Music) => {
      this.musique = personneRandom;
      } )
  }

  ngOnInit(): void {
    //Vide
  }

}
