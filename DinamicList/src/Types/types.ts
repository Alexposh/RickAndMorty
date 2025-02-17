export interface Character {
    id: string;
    name: string;
    image: string;
  }
  
  export interface CharactersData {
    characters: {
      results: Character[];
    };
  }
  
  export interface CharactersVars {
    page: number;
    name: string;
  }

  export interface CharacterData {
    character: Character;
  }
  
  export interface CharacterVars {
    id: string;
  }