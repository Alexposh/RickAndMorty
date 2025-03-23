import { useQuery, gql } from '@apollo/client'
import { Character, CharactersData, CharactersVars } from "../Types/types";
import React, { useEffect, useState} from 'react';
import SingleCharacter from './SingleCharacter';
import ListItem from './ListItem';
import ErrorPage from './ErrorPage';

  export const GET_CHARACTERS = gql`
 query Query($name: String) {
  characters(page: 2, filter: {name: $name}) {
    
    results {
      name
      id
      image
    }
  }
  
  
}
`;

const ListContainer: React.FC = () => {   
    
    const [name, setName] = useState('');  // defines the name that is searched and the setName function to update it
    const [searchName, setSearchName] = useState('Morty'); // defines the name by which the search is made and the method to update it
    const { loading, error, data } = useQuery<CharactersData, CharactersVars>(GET_CHARACTERS, {
      variables: { page: 1, name: searchName },
    });   // the query that is being made to get the items to list

    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);  // defines the selected character that is shown in the "highlighted"  part and the method to update it
    
    useEffect(() => {
        if (data && data.characters.results.length > 0) {
          setSelectedCharacter(data.characters.results[0]);
        }
      }, [data]);  // this sets the initial item shown as the first item in the fetched list
    const handleCharacterClick = (character: Character) => {
      setSelectedCharacter(character);
    }; // this is the method that is called when a character is clicked

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchName(name);
      }; // this is the method that is called when the search field content should be used for the search to populate the list   

      
      //below is the rendered part that contains a form, the list of characters and the selected character
      // form works with the Submit of the button and by pressing "Enter" key
    return(
        <>
        <div style={{display:"flex"}}>
        <div style ={{  marginRight:"40px", width:"300px" }} >
        <h2>Rick and Morty Characters</h2>
         <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search character"
          style={{width:"185px", height:"35px", marginRight:"10px"}}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      
            {data && (data?.characters.results.length == 0) ? <h3>No  characters found. Empty search is better than wrong search 😀</h3> : null}
            {data && data.characters.results.map(character => (
            <div key={character.id}                 
                onClick={() => handleCharacterClick(character)}>  
                         
                    {character && selectedCharacter && <ListItem character={character} selected={selectedCharacter && selectedCharacter.id === character.id}/>}
            </div>      
        ))} 
        </div>
        {error ? <ErrorPage /> : selectedCharacter && <SingleCharacter id={selectedCharacter.id}/>}
        </div>  
    </>
    )   
    }
    export default ListContainer;