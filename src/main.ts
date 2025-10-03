import './style.css'



async function fetchCharacter(): Promise<any> {
  const res = await fetch('https://dragonball-api.com/api/characters');
  if (!res.ok) {
    throw new Error('No se pudo cargar detalles');
  }
  return await res.json();
}

async function renderCharacter() {
  try {
    const characters = await fetchCharacter();
    let innerhtml = ``
    for(let i=0; i<characters.meta.itemCount; i++){
      innerhtml = innerhtml+`
      <div>
        <a href="https://vite.dev" target="_blank">
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