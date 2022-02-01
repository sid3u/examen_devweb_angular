import {Component} from '@angular/core';
import {Music} from "../model/Music";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  liste_musique: Music[] = [];
  view:string = "card";


  constructor(private readonly httpClient: HttpClient) {
    this.httpClient.get<Array<Music>>("http://localhost:3000/musics").subscribe((listDuPersonnel:Array<Music>) => {
      this.liste_musique = listDuPersonnel;
    })
  }

  delete(musique: Music){
    this.httpClient.delete("http://localhost:3000/musics/"+musique.id).subscribe(() => {
    });
    window.location.reload();
  }


  edit(musique: Music){
    this.httpClient.put("http://localhost:3000/musics/"+musique.id, musique).subscribe(() => {
    });
    window.location.reload();
  }

  switchView() {
    if(this.view==="card"){
      this.view = "list"
    }
    else{
      this.view = "card";
    }
  }


}
