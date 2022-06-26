import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading = true;
  public apiError = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(): any {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(this.urlPokemon + '/' + id);
    const name = this.pokeApiService.apiGetPokemon(this.urlName + '/' + id)
    return forkJoin([pokemon, name]).subscribe({
      next: (res) => {
        this.pokemon = res;
        console.log(this.pokemon)
        this.isLoading = false;
      },
      error: (e) => {
        this.apiError = true;
      }
    });
  }

}
