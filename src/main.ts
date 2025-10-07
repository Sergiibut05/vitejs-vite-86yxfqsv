import { debounceTime, fromEvent, tap, map} from 'rxjs';
import './style.css'
import 'rxjs'
import { fromFetch } from 'rxjs/fetch';
import { Character, type CharacterItem, type CharacterResponse } from './characters';



fromEvent(document, 'DOMContentLoaded').subscribe(() => {
  listarPersonajes();
});

const inputElement = document.getElementById('buscador') as HTMLInputElement;
fromEvent(inputElement, 'input').pipe(
  debounceTime(300),
  map((event: Event) => (event.target as HTMLInputElement).value.trim())
).subscribe((valor) => {
  if(valor == ''){
    listarPersonajes();
  }else{
    buscarPersonaje(valor);
  }
})

function listarPersonajes(){
  fromFetch('https://dragonball-api.com/api/characters', {
  selector: response => response.json() as Promise<CharacterResponse>
  }).pipe(
    tap(response => console.log(response.meta)),
    tap(response => {
      Character.cleanApp();
      response.items.forEach((item) => {
      const character = new Character(item);
      character.renderCharacter();
      console.log(item)
    })}

    )
  ).subscribe()
}
function buscarPersonaje(nombre: String){
  fromFetch(`https://dragonball-api.com/api/characters?name=${nombre}`, {
      selector: response => response.json() as Promise<[CharacterItem]>
    }).pipe(
      tap(response => {
        Character.cleanApp();
        response.forEach(item => {
          const character = new Character(item);
          character.renderCharacter();
          console.log(item)
        })
      })
    ).subscribe();
}



