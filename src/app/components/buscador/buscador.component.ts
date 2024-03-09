import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string = "";


  constructor(private activatedRoute:ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    })

  }
  
  ngOnInit(): void {
      
  }

}
