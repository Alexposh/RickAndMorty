// import { NavLink, Outlet } from "react-router-dom";
import { useQuery, gql } from '@apollo/client'
import { Character, CharactersData, CharactersVars } from "../Types/types";
import { useEffect, useState } from 'react';
import SingleCharacter from './SingleCharacter';
import ListItem from './ListItem';
import ErrorPage from './ErrorPage';

    const GET_CHARACTERS = gql`
 query Query($name: String) {
  characters(page: 2, filter: {name: $name}) {
    info {
      count
    }
    results {
      name
      id
      image
    }
  }
  
  episodesByIds(ids: [1, 2, 3]) {
    id
  }
}
`;

const ListGroup: React.FC = () => {   
    
    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState('Morty');
    const { loading, error, data } = useQuery<CharactersData, CharactersVars>(GET_CHARACTERS, {
      variables: { page: 1, name: searchName },
    });
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    
    useEffect(() => {
        if (data && data.characters.results.length > 0) {
          setSelectedCharacter(data.characters.results[0]);
        }
      }, [data]);
    const handleCharacterClick = (character: Character) => {
      setSelectedCharacter(character);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchName(name);
      };


    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error</p>;
  


    // if (data){
    //     console.log(data.characters.results[0]);
    //     // selectedCharacter = data.characters.results[0];
    //     console.log(selectedCharacter);

    // }
    

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
      {error && <ErrorPage/>}
           {data && data.characters.results.map(character => (
            <div key={character.id}                 
                onClick={() => handleCharacterClick(character)}>  
                         
                    {character && selectedCharacter && <ListItem character={character} selected={selectedCharacter && selectedCharacter.id === character.id}/>}
            </div>      
        ))} 
        </div>
        {selectedCharacter && <SingleCharacter id={selectedCharacter.id}/>}
        </div>  
    </>
    )   
    }
    export default ListGroup;