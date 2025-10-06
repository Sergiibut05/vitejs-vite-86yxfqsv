export interface CharacterResponse{
    items: [],
    linkHeader: String | null,
    status: number

}

export class Character{
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
    
    constructor(item: {}){

    }
}