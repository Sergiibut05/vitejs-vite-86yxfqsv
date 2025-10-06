import { Observable, catchError, fromEvent, of, pipe, switchMap, tap, type Observer } from 'rxjs';
import './style.css'
import 'rxjs'
import { fromFetch } from 'rxjs/fetch';
import type { CharacterResponse } from './characters';

async function fetchCharacter(): Promise<any> {
  const res = await fetch('https://dragonball-api.com/api/characters');
  if (!res.ok) {
    throw new Error('No se pudo cargar detalles');
  }
  return await res.json();
}


fromFetch('https://dragonball-api.com/api/characters', {
  selector: response => response.json() as Promise<CharacterResponse>
}).pipe(
  tap(response => response.items.forEach((item) => {
    console.log(item)
  })

  )
).subscribe()







async function renderCharacter() {
  try {
    const characters = await fetchCharacter();
    let innerhtml = ``
    for(let i=0; i<characters.meta.itemCount; i++){
      innerhtml = innerhtml+`
      <div>
        <a>
          <img src="${characters.items[i].image}" class="logo" alt="Vite logo" />
        </a>
        <h1>${characters.items[i].name}</h1>
      </div>
    `;
    }
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = innerhtml;
  } catch (error) {
    console.error(error);
  }
}

renderCharacter();