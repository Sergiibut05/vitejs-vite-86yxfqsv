import { Observable, catchError, fromEvent, of, pipe, switchMap, tap, type Observer } from 'rxjs';
import './style.css'
import 'rxjs'
import { fromFetch } from 'rxjs/fetch';
import { Character, type CharacterResponse } from './characters';




fromFetch('https://dragonball-api.com/api/characters', {
  selector: response => response.json() as Promise<CharacterResponse>
}).pipe(
  tap(response => response.items.forEach((item) => {
    const character = new Character(item);
    character.renderCharacter();
    console.log(item)
  })

  )
).subscribe()


