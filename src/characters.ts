export interface CharacterResponse{
    items: CharacterItem[],
    meta:{}
    linkHeader: String | null,
    status: number

}

export interface CharacterItem{
    id : Number;
    name: String;
    ki: String;
    maxKi: String;
    race: String;
    gender: String ;
    description: String ;
    image: String ;
    affiliation: String ;
    deletedAt: String | null;
}           

export class Character{
    
    static app = document.querySelector<HTMLDivElement>('#app')!;
    id : Number = 0;
    name: String = '';
    ki: String = '';
    maxKi: String = '';
    race: String = '';
    gender: String = '';
    description: String = '';
    image: String = '';
    affiliation: String = '';
    deletedAt: String | null = null;
    
    constructor(item: CharacterItem){
        this.id = item.id;
        this.name = item.name;
        this.ki = item.ki;
        this.maxKi = item.maxKi;
        this.race = item.race;
        this.gender = item.gender;
        this.description = item.description;
        this.image = item.image;
        this.affiliation = item.affiliation;
        this.deletedAt = item.deletedAt;
    }

    static cleanApp(){
      Character.app.innerHTML = '';
    }

    renderCharacter(){
        Character.app.insertAdjacentHTML('beforeend', `
        <div class="character-card">
          <a>
            <img src="${this.image}" class="character-img" />
          </a>
          <h1>${this.name}</h1>
          <h2>Raza: ${this.race}</h2>
          <h2>Ki: ${this.ki}</h2>
          <h2>MaxKi: ${this.maxKi}</h2>
          <h2>Afiliación: ${this.affiliation}</h2>
        </div>
      `);
        
    }
}