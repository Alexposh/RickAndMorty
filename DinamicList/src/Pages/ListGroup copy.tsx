import { NavLink, Outlet } from "react-router-dom";
import { useQuery, gql } from '@apollo/client'
import { CharactersData, CharactersVars } from "../Types/types";

    const GET_CHARACTERS = gql`
 query Query {
  characters(page: 2, filter: {name: "Morty"}) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;

    const ListGroup: React.FC = () => {
    const { loading, error, data } = useQuery<CharactersData, CharactersVars>(GET_CHARACTERS, {
      variables: { page: 1 , name: "Morty" },
    });
    // const { loading, error, data } = useQuery(GET_CHARACTERS, {
    //   variables: { page: 1 },
    // });  

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;



    const itemsInList:number[] = [1,2,3,4,5];

    return(
        <>
        <div style={{display:"flex", justifyContent:"center"}}>
        <div style ={{  marginRight:"40px", width:"200px" }} >
        <h2>Items in list</h2>
        {itemsInList.map((item) => ( 
            <div key={item} style={{backgroundColor:"gray", borderRadius:"2px", marginBottom:"5px"}}>
                <NavLink to={`/${item}`}
                                key={item}     
                                className={({isActive}) => {return isActive ? "active" : ""}} 
                                style={({isActive})=>{return isActive ? {color:"white", fontSize:"20px", } : { color:"black",fontSize:"19px"}}} >
                                    List item - {item}
                </NavLink>
            </div>      
        ))} 


            </div>
            <div><Outlet/></div>      
        </div>

        <ul>
        {data && data.characters.results.map(character => (
            <li key={character.id}>
                <img src={character.image} alt={character.name} />
                {character.name}
            </li>
            ))}
        </ul>
    
    
        </>
    )   
    }
    export default ListGroup;